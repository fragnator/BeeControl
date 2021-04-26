import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput, Text} from 'react-native-paper';

const RegisterScreen = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.username}
        label="Username"
        value={username}
        onChangeText={username => setUsername(username)}
      />

      <TextInput
        style={styles.password}
        label="Email"
        value={username}
        onChangeText={username => setUsername(username)}
      />

      <TextInput
        style={styles.password}
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.password}
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />

      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Login',
            },
          })
        }>
        Register
      </Button>
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
  username: {
    marginTop: 'auto',
    marginBottom: 15,
  },
  password: {
    marginBottom: 15,
  },
  login: {
    marginBottom: 'auto',
  },
  register: {
    marginTop: 'auto',
    alignSelf: 'flex-end',
  },
});

export default RegisterScreen;
