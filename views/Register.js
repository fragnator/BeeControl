import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput, Text} from 'react-native-paper';

const RegisterScreen = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <Text
        style={styles.logo}
        theme={{
          colors: {
            text: '#ffffff',
          },
        }}>
        Register
      </Text>

      <TextInput
        style={styles.username}
        label="Username"
        value={username}
        theme={{
          colors: {
            text: '#ffffff',
            accent: '#ffffff',
            primary: '#ffffff',
            placeholder: '#ffffff',
            background: 'transparent',
          },
        }}
        underlineColor="#ffffff"
        onChangeText={username => setUsername(username)}
        dense
      />

      <TextInput
        style={styles.password}
        label="Email"
        value={username}
        theme={{
          colors: {
            text: '#ffffff',
            accent: '#ffffff',
            primary: '#ffffff',
            placeholder: '#ffffff',
            background: 'transparent',
          },
        }}
        underlineColor="#ffffff"
        onChangeText={username => setUsername(username)}
        dense
      />

      <TextInput
        style={styles.password}
        label="Password"
        value={password}
        theme={{
          colors: {
            text: '#ffffff',
            accent: '#ffffff',
            primary: '#ffffff',
            placeholder: '#ffffff',
            background: 'transparent',
          },
        }}
        underlineColor="#ffffff"
        onChangeText={password => setPassword(password)}
        dense
        secureTextEntry={true}
      />

      <TextInput
        style={styles.password}
        label="Re-type password"
        value={password}
        theme={{
          colors: {
            text: '#ffffff',
            accent: '#ffffff',
            primary: '#ffffff',
            placeholder: '#ffffff',
            background: 'transparent',
          },
        }}
        underlineColor="#ffffff"
        onChangeText={password => setPassword(password)}
        dense
        secureTextEntry={true}
      />

      <Button
        style={styles.login}
        mode="contained"
        color="#ffb300"
        dark
        onPress={() =>
          Navigation.setRoot({
            root: {
              component: {
                name: 'Home',
              },
            },
          })
        }>
        Register
      </Button>

      <Button
        style={styles.register}
        mode="text"
        dark
        theme={{colors: {text: '#FFFFFF', primary: '#FFFFFF'}}}
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Login',
            },
          })
        }>
        Already have an account? Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: '#fdd835',
  },
  username: {
    backgroundColor: 'transparent',
    marginBottom: 16,
    paddingHorizontal: 0,
    color: '#ffb300',
  },
  password: {
    backgroundColor: 'transparent',
    marginBottom: 16,
    paddingHorizontal: 0,
  },
  login: {
    marginTop: 16,
    color: '#ffb300',
  },
  register: {
    marginTop: 24,
    marginBottom: 'auto',
  },
  logo: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 64,
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
