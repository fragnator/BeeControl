import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
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
} from 'react-native-paper';

//TODO:
//DODAJ na topTab ikono tri pike in odjava;

const HomeScreen = props => {
  const [visible, setVisible] = React.useState(true);

  const handleBannerClick = () => {
    setVisible(false);
    Navigation.push(props.componentId, {
      component: {
        name: 'DeviceDetails',
      },
    });
  };

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        visible: true,
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
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

        <Card style={styles.card}>
          <Card.Title
            title="BeeHive #1"
            left={props => (
              <Avatar.Icon
                color="#ffffff"
                style={{backgroundColor: '#fdd835'}}
                {...props}
                icon="beehive-outline"
              />
            )}
          />
          <Divider />
          <TouchableRipple
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'DeviceDetails',
                },
              })
            }
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title="Device 1"
              description="Device description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="information" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'DeviceDetails',
                },
              })
            }
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title="Device 2"
              description="Device description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="information" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'DeviceDetails',
                },
              })
            }
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title="Device 3"
              description="Device description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="information" />}
            />
          </TouchableRipple>
        </Card>
        <Card style={styles.lastCard}>
          <Card.Title
            title="BeeHive #2"
            left={props => (
              <Avatar.Icon
                color="#ffffff"
                style={{backgroundColor: '#fdd835'}}
                {...props}
                icon="beehive-outline"
              />
            )}
          />
          <Divider />
          <TouchableRipple
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'DeviceDetails',
                },
              })
            }
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title="Device 1"
              description="Device description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="information" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'DeviceDetails',
                },
              })
            }
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title="Device 2"
              description="Device description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="information" />}
            />
          </TouchableRipple>
          <Divider />
          <TouchableRipple
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'DeviceDetails',
                },
              })
            }
            rippleColor="rgba(0, 0, 0, .32)">
            <List.Item
              title="Device 3"
              description="Item description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="information" />}
            />
          </TouchableRipple>
        </Card>
      </ScrollView>
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
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
    rightButtons: [
      {
        component: {name: 'NavigationButtonComponent'},
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
