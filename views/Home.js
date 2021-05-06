import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

import {
  List,
  Banner,
  Card,
  Title,
  Divider,
  FAB,
  Avatar,
  IconButton,
  TouchableRipple,
  ActivityIndicator,
  Portal,
  Dialog,
  Button,
  Provider,
} from 'react-native-paper';

//TODO:
//BACK BUTTON NA EDITDEVICE SCREENU
//POGLEJ ZAKAJ CHART JEBE

const HomeScreen = props => {
  const [visible, setVisible] = React.useState(true);
  const [hivesGroups, setHivesGroups] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [tempHive, setTempHive] = React.useState({});

  const handleBannerClick = () => {
    setVisible(false);
    Navigation.push(props.componentId, {
      component: {
        name: 'DeviceDetails',
      },
    });
  };

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  const handleDeleteGroupClick = hive => {
    setTempHive(hive);
    showDialog();
  };

  const handleDeleteGroupAction = event => {
    if (!event) {
      hideDialog();
      return;
    }

    firestore()
      .collection('hives')
      .doc(tempHive.hiveId)
      .delete()
      .then(resp => {
        initalLoading();
        setTempHive({});
        hideDialog();
      });
  };

  const initalLoading = () => {
    setLoading(true);
    const userId = auth().currentUser.uid;

    let promises = [
      firestore().collection('devices').where('userId', '==', userId).get(),
      firestore().collection('hives').where('userId', '==', userId).get(),
    ];

    Promise.all(promises).then(values => {
      let devices = values[0].docs.map(element => {
        return {...element.data(), deviceId: element.id};
      });

      let hives = values[1].docs.map(element => {
        return {...element.data(), hiveId: element.id};
      });

      let groupedHives = hives.map(hive => {
        return {
          ...hive,
          devices: devices.filter(element =>
            hive.devices.includes(element.deviceId),
          ),
        };
      });

      setHivesGroups(groupedHives);
      setLoading(false);
    });
  };

  useEffect(() => {
    initalLoading();
  }, []);

  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        return saveTokenToDatabase(token);
      });

    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });
  }, []);

  const saveTokenToDatabase = async token => {
    const userId = auth().currentUser.uid;
    const doc = await firestore().collection('users').doc(userId).get();

    if (doc._exists) {
      await firestore().collection('users').doc(userId).update({
        fcm: token,
      });
    } else {
      await firestore().collection('users').doc(userId).set({
        fcm: token,
      });
    }
  };

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        visible: true,
      },
    });
  }, []);

  return (
    <Provider>
      <View style={styles.container}>
        <Banner
          visible={visible}
          actions={[
            {
              color: '#fdd835',
              label: 'Learn more',
              onPress: () => handleBannerClick(),
            },
          ]}
          icon={({size}) => (
            <Avatar.Icon
              {...props}
              color="#ffffff"
              style={{backgroundColor: '#fdd835'}}
              size={42}
              icon="beehive-outline"
            />
          )}>
          There was a problem with BeeHive #1
        </Banner>
        <View>
          {loading && (
            <ActivityIndicator
              style={{marginTop: 48}}
              animating={true}
              color="#ffb300"
              size="large"></ActivityIndicator>
          )}
        </View>
        {!loading && (
          <ScrollView>
            {hivesGroups.map((hive, index) => {
              return (
                <Card style={styles.card} key={index}>
                  <Card.Title
                    title={hive.name}
                    left={props => (
                      <Avatar.Icon
                        color="#ffffff"
                        style={{backgroundColor: '#fdd835'}}
                        {...props}
                        icon="beehive-outline"
                      />
                    )}
                    right={props => (
                      <IconButton
                        icon="delete"
                        color="grey"
                        size={25}
                        style={{marginRight: 10}}
                        onPress={() => handleDeleteGroupClick(hive)}
                      />
                    )}
                  />
                  <Divider />
                  {hive.devices.map((device, ind) => {
                    return (
                      <View key={ind}>
                        <TouchableRipple
                          onPress={() =>
                            Navigation.push(props.componentId, {
                              component: {
                                name: 'DeviceDetails',
                                passProps: {
                                  title: device.name,
                                  deviceId: device.deviceId,
                                },
                              },
                            })
                          }
                          rippleColor="rgba(0, 0, 0, .32)">
                          <List.Item
                            title={device.name}
                            description={device.description}
                            left={props => (
                              <List.Icon {...props} large icon="bee-flower" />
                            )}
                          />
                        </TouchableRipple>
                        <Divider />
                      </View>
                    );
                  })}
                  <Divider />
                </Card>
              );
            })}
          </ScrollView>
        )}
        <FAB
          dark
          style={styles.fab}
          icon="plus"
          color="#ffffff"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'DeviceAddEdit',
              },
            })
          }
        />
        <View>
          <Portal>
            <Dialog visible={dialogVisible} onDismiss={hideDialog}>
              <Dialog.Title>
                <Text>Are you sure you want to delete group?</Text>
              </Dialog.Title>
              <Dialog.Content>
                <Text>This action is nonreversible</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                  color="#fdd835"
                  onPress={() => handleDeleteGroupAction(false)}>
                  Cancel
                </Button>
                <Button
                  color="#fdd835"
                  onPress={() => handleDeleteGroupAction(true)}>
                  Remove
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </View>
    </Provider>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
    rightButtons: [
      {
        component: {name: 'NavigationButtonLogoutComponent'},
      },
    ],
  },
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'whitesmoke',
  },
  card: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  cardContent: {
    marginBottom: 20,
  },
  lastCard: {
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 50,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#fdd835',
  },
});

export default HomeScreen;
