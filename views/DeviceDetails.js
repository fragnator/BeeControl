import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
  Button,
  TextInput,
  RadioButton,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

const DeviceAddEditScreen = props => {
  const [username, setUsername] = React.useState('');
  const [value, setValue] = React.useState('first');

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Card.Content style={{marginTop: 15}}>
            <Title>Device #1</Title>
          </Card.Content>
          <Button
            style={styles.editButton}
            mode="text"
            icon="pencil"
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'DeviceAddEdit',
                },
              })
            }>
            Edit
          </Button>
        </View>
        <Card.Content style={styles.cardContent}>
          <Paragraph>
            Card content Card content Card content Card content Card content
            Card content Card content Card content Card content Card content
            Card content Card content Card content Card content Card content
            Card content Card content Card content Card content Card content
            Card content Card content Card content Card content Card content
            Card content Card content Card content Card content Card content
            Card content Card content Card content Card content Card content
            Card content
          </Paragraph>
        </Card.Content>

        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.cancelButton}
            mode="text"
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'Home',
                },
              })
            }>
            Cancel
          </Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 10,
    padding: 15,
    backgroundColor: 'whitesmoke',
  },
  card: {
    marginTop: 15,
  },
  cardContent: {
    marginTop: 20,
  },
  cancelButton: {
    marginBottom: 20,
    marginHorizontal: 5,
  },
  editButton: {
    marginTop: 15,

    marginRight: 20,
    marginLeft: 'auto',
  },
});

export default DeviceAddEditScreen;
