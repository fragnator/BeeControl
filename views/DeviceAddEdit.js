import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput, RadioButton, Card, Title} from 'react-native-paper';

const DeviceAddEditScreen = props => {
  const [username, setUsername] = React.useState('');
  const [value, setValue] = React.useState('first');

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>New device</Title>
        </Card.Content>
        <TextInput
          style={styles.name}
          label="Name"
          value={username}
          onChangeText={username => setUsername(username)}
        />

        <RadioButton.Group
          style={styles.radioButton}
          onValueChange={value => setValue(value)}
          value={value}>
          <RadioButton.Item label="Beehive #1" value="first" />
          <RadioButton.Item label="Beehive #2" value="second" />
        </RadioButton.Group>

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

          <Button
            style={styles.addButton}
            icon="plus-circle"
            mode="contained"
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'Home',
                },
              })
            }>
            Add
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
  name: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  radioButton: {
    marginBottom: 20,
    marginTop: 20,
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
