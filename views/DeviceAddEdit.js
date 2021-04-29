import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
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
} from 'react-native-paper';

const DeviceAddEditScreen = props => {
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('first');
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.container}>
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
              value={name}
              onChangeText={name => setName(name)}
              dense
            />
          </View>
        </Card>

        <Paragraph style={{marginTop: 16, marginBottom: 16}}>Group:</Paragraph>
        <Card style={{paddingTop: 10}}>
          <RadioButton.Group
            style={styles.radioButton}
            onValueChange={value => setValue(value)}
            value={value}>
            <RadioButton.Item
              color="#fdd835"
              label="Beehive #1"
              value="first"
            />
            <RadioButton.Item
              color="#fdd835"
              label="Beehive #2"
              value="second"
            />
          </RadioButton.Group>

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

          {/* <View style={{flexDirection: 'row'}}>
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
              Add Device
            </Button>
          </View> */}
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
                    value={name}
                    onChangeText={name => setName(name)}
                    dense
                  />
                </Dialog.Content>
                <Dialog.Actions>
                  <Button color="#fdd835" onPress={hideDialog}>
                    Save
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </Card>
      </View>
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
