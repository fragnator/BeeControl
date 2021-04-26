import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput, Text} from 'react-native-paper';

const LoginScreen = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.username}
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

      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => Navigation.setRoot(mainRoot)}>
        Login
      </Button>

      <Button
        style={styles.register}
        mode="text"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Register',
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

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
            // options: {
            //   bottomTab: {
            //     icon: require('./home.png'), //TODO: find vector icon
            //   },
            // },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings',
                },
              },
            ],
            // options: {
            //   bottomTab: {
            //     icon: require('./settings.png'), //TODO: find vector icon
            //   },
            // },
          },
        },
      ],
    },
  },
};

export default LoginScreen;
