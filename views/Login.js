import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput, Text, Card, Avatar} from 'react-native-paper';

const LoginScreen = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLoginClick = () => {
    Navigation.setRoot(
      // root: {
      //   component: {
      //     name: 'Home',
      //   },
      // },
      mainRoot,
    );
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      {/* <Text
        style={styles.logo}
        theme={{
          colors: {
            text: '#ffffff',
          },
        }}>
        BeeControl
      </Text> */}
      <TextInput
        style={styles.username}
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
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        dense
        secureTextEntry={true}
      />

      <Button
        style={styles.login}
        mode="contained"
        dark
        color="#ffb300"
        onPress={handleLoginClick}>
        Login
      </Button>

      <Button
        style={styles.register}
        mode="text"
        dark
        theme={{colors: {text: '#FFFFFF', primary: '#FFFFFF'}}}
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Register',
            },
          })
        }>
        No account yet? Create one
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
    // marginBottom: 'auto',
  },
  register: {
    marginTop: 24,
    marginBottom: 'auto',
    // alignSelf: 'flex-end',
  },
  logo: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 230,
    maxHeight: 230,
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
            options: {
              bottomTab: {
                iconColor: '#fdd835',
                // textColor: '#fdd835',
                icon: require('../assets/home.png'),
              },
            },
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
            options: {
              bottomTab: {
                iconColor: '#fdd835',
                // textColor: '#fdd835',
                icon: require('../assets/cog.png'),
              },
            },
          },
        },
      ],
    },
  },
};

export default LoginScreen;
