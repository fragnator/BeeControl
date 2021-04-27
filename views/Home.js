import React from 'react';
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

  return (
    <View style={styles.container}>
      <ScrollView>
        <Banner
          visible={visible}
          actions={[
            {
              label: 'Learn more',
              onPress: () => handleBannerClick(),
            },
          ]}
          icon={({size}) => (
            <Avatar.Icon {...props} size={42} icon="beehive-outline" />
          )}>
          There was a problem with BeeHive #1
        </Banner>

        <Card style={styles.card}>
          <Card.Title
            title="BeeHive #1"
            left={props => <Avatar.Icon {...props} icon="beehive-outline" />}
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
              title="First Item"
              description="Item description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="eye" />}
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
              title="First Item"
              description="Item description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="eye" />}
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
              title="First Item"
              description="Item description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="eye" />}
            />
          </TouchableRipple>
        </Card>
        <Card style={styles.lastCard}>
          <Card.Title
            title="BeeHive #2"
            left={props => <Avatar.Icon {...props} icon="beehive-outline" />}
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
              title="First Item"
              description="Item description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="eye" />}
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
              title="First Item"
              description="Item description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="eye" />}
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
              title="First Item"
              description="Item description"
              left={props => <List.Icon {...props} large icon="bee" />}
              right={props => <List.Icon {...props} icon="eye" />}
            />
          </TouchableRipple>
        </Card>
      </ScrollView>
      <FAB
        dark
        style={styles.fab}
        icon="plus"
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
  },
  bottomTab: {
    text: 'Home',
  },
};

const styles = StyleSheet.create({
  container: {
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
  },
});

export default HomeScreen;
