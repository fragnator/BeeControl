import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput, Text, Card, Avatar} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginScreen = props => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        visible: false,
      },
    });
  }, []);

  const handleLoginClick = () => {
    // if (username.length === 0 || password.length === 0) {
    //   setError(true);
    //   return;
    // }

    auth()
      .signInWithEmailAndPassword('kc7947@student.uni-lj.si', 'debil123')
      .then(() => {
        Navigation.setRoot(mainRoot);
      })
      .catch(error => {
        setError(true);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/logo.png')}
      />

      {error ? (
        <Text
          theme={{
            colors: {
              text: '#ffffff',
            },
          }}
          style={{alignSelf: 'center', marginVertical: 16}}>
          {'An error has occurred'}
        </Text>
      ) : null}

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
};

export default LoginScreen;
