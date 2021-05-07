import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import {
  Button,
  TextInput,
  RadioButton,
  Card,
  Title,
  List,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TouchableRipple,
  Divider,
  ActivityIndicator,
} from 'react-native-paper';

const DeviceAddEditScreen = props => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [newGroupName, setNewGroupName] = React.useState('');
  const [groups, setGroups] = React.useState([]);
  const [chosenGroup, setChosenGroup] = React.useState(0);
  const [initalGroup, setInitalGroup] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState(false);
  const [deviceId, setDeviceId] = React.useState(props.deviceId);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    if (typeof props.deviceId !== 'undefined') {
      Navigation.mergeOptions(props.componentId, {
        topBar: {
          title: {
            text: 'Edit device',
          },
        },
      });
      firestore()
        .collection('devices')
        .doc(props.deviceId)
        .get()
        .then(resp => {
          let data = resp.data();
          setName(data.name);
          setDescription(data.description);
          setInitalGroup(data.group);
          setChosenGroup(data.group);
          setIsEdit(true);
        });
    }
  }, []);

  useEffect(() => {
    const userId = auth().currentUser.uid;

    let promises = [
      firestore().collection('hives').where('userId', '==', userId).get(),
    ];

    Promise.all(promises).then(values => {
      let groups = values[0].docs.map(element => {
        return {...element.data(), groupId: element.id};
      });

      setGroups(groups);
      setLoading(false);
    });
  }, []);

  const handleSaveGroup = () => {
    const userId = auth().currentUser.uid;
    setLoading(true);
    firestore()
      .collection('hives')
      .add({devices: [], name: newGroupName, userId: userId})
      .then(resp => {
        firestore()
          .collection('hives')
          .where('userId', '==', userId)
          .get()
          .then(resp => {
            resp = resp.docs.map(element => {
              return {...element.data(), groupId: element.id};
            });
            setGroups(resp);
            setNewGroupName('');
            setVisible(false);
            setLoading(false);
          });
      });
  };
  const handleSaveClick = () => {
    const userId = auth().currentUser.uid;

    if (isEdit) {
      firestore()
        .collection('devices')
        .doc(props.deviceId)
        .update({
          description: description,
          group: chosenGroup,
          name: name,
          userId: userId,
        })
        .then(resp => {
          if (initalGroup === chosenGroup) {
            Navigation.setRoot({
              root: {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Home',
                      },
                    },
                  ],
                },
              },
            });
            return;
          }

          let promises = [
            firestore()
              .collection('hives')
              .doc(chosenGroup)
              .update({
                devices: firestore.FieldValue.arrayUnion(props.deviceId),
              }),
            firestore()
              .collection('hives')
              .doc(initalGroup)
              .update({
                devices: firestore.FieldValue.arrayRemove(props.deviceId),
              }),
          ];
          Promise.all(promises).then(values => {
            Navigation.setRoot({
              root: {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Home',
                      },
                    },
                  ],
                },
              },
            });
          });
        });
    } else {
      firestore()
        .collection('devices')
        .add({
          description: description,
          group: chosenGroup,
          name: name,
          userId: userId,
        })
        .then(resp => {
          firestore()
            .collection('hives')
            .doc(chosenGroup)
            .update({devices: firestore.FieldValue.arrayUnion(resp.id)})
            .then(() => {
              Navigation.setRoot({
                root: {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'Home',
                        },
                      },
                    ],
                  },
                },
              });
            });
        });
    }
  };
  const handleDeleteClick = () => {
    const userId = auth().currentUser.uid;
    console.log(props.deviceId);
    firestore()
      .collection('devices')
      .doc(props.deviceId)
      .delete()
      .then(resps => {
        console.log(resps);
        firestore()
          .collection('hives')
          .doc(chosenGroup)
          .update({devices: firestore.FieldValue.arrayRemove(props.deviceId)})
          .then(() => {
            Navigation.setRoot({
              root: {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Home',
                      },
                    },
                  ],
                },
              },
            });
          });
      });
  };

  return (
    <Provider>
      <View style={styles.container}>
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
            <Paragraph>Information:</Paragraph>
            <Card style={styles.card}>
              <View style={{marginHorizontal: 16}}>
                <TextInput
                  style={{marginTop: 6, marginBottom: 16}}
                  theme={{
                    colors: {
                      text: '#fdd835',
                      accent: '#fdd835',
                      primary: '#fdd835',
                      placeholder: '#fdd835',
                      background: 'transparent',
                    },
                  }}
                  underlineColor="#fdd835"
                  label="Name"
                  value={name}
                  onChangeText={name => setName(name)}
                  dense
                />
                <TextInput
                  style={{marginBottom: 24}}
                  theme={{
                    colors: {
                      text: '#fdd835',
                      accent: '#fdd835',
                      primary: '#fdd835',
                      placeholder: '#fdd835',
                      background: 'transparent',
                    },
                  }}
                  underlineColor="#fdd835"
                  label="Description"
                  value={description}
                  onChangeText={description => setDescription(description)}
                  dense
                />
              </View>
            </Card>

            <Paragraph style={{marginTop: 16, marginBottom: 16}}>
              Group:
            </Paragraph>
            <Card style={{paddingTop: 10}}>
              <RadioButton.Group
                style={styles.radioButton}
                onValueChange={value => setChosenGroup(value)}
                value={chosenGroup}>
                {groups.map((group, index) => {
                  return (
                    <RadioButton.Item
                      key={index}
                      color="#fdd835"
                      label={group.name}
                      value={group.groupId}
                    />
                  );
                })}
              </RadioButton.Group>
              <Divider></Divider>
              <TouchableRipple
                onPress={showDialog}
                rippleColor="rgba(0, 0, 0, .32)">
                <List.Item
                  title="New Group"
                  left={props => (
                    <List.Icon
                      {...props}
                      style={{marginRight: 5}}
                      icon="plus-circle"
                    />
                  )}
                />
              </TouchableRipple>
            </Card>
          </ScrollView>
        )}
      </View>

      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>New Group</Dialog.Title>
            <Dialog.Content>
              <TextInput
                style={{marginBottom: 16}}
                theme={{
                  colors: {
                    text: '#fdd835',
                    accent: '#fdd835',
                    primary: '#fdd835',
                    placeholder: '#fdd835',
                    background: 'transparent',
                  },
                }}
                underlineColor="#fdd835"
                label="Name"
                value={newGroupName}
                onChangeText={newGroupName => setNewGroupName(newGroupName)}
                dense
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                color="#fdd835"
                disabled={newGroupName.length === 0}
                onPress={handleSaveGroup}>
                Save
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>

      <Card elevation={12} style={{alignSelf: 'flex-end', height: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginTop: 6,
          }}>
          <Button
            disabled={!isEdit}
            color="black"
            style={{marginLeft: 16}}
            onPress={handleDeleteClick}>
            Delete
          </Button>
          {/* Hack marginLeft*/}
          <Button
            color="#fdd835"
            style={{marginRight: 16, marginLeft: 200}}
            onPress={handleSaveClick}>
            Save
          </Button>
        </View>
      </Card>
    </Provider>
  );
};

DeviceAddEditScreen.options = {
  topBar: {
    title: {
      text: 'New Device',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingTop: 16,
    padding: 16,
    backgroundColor: 'whitesmoke',
  },
  card: {
    marginTop: 15,
  },
  name: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  radioButton: {
    marginBottom: 20,
    marginTop: 40,
  },
  cancelButton: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 5,
  },
  addButton: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 'auto',
  },
});

export default DeviceAddEditScreen;
