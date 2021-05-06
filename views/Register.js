import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Button, TextInput, Text} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const RegisterScreen = props => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleRegister = () => {
    if (
      username.length === 0 ||
      password.length === 0 ||
      rePassword.length === 0
    ) {
      console.log('111');
      setError(true);
      return;
    }

    if (password !== rePassword) {
      console.log('222');
      setError(true);
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        Navigation.setRoot(mainRoot);
        setError(false);
      })
      .catch(error => {
        console.log('333');
        setError(true);
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
        value={email}
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
        onChangeText={email => setEmail(email)}
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
        value={rePassword}
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
        onChangeText={rePassword => setRePassword(rePassword)}
        dense
        secureTextEntry={true}
      />

      <Button
        style={styles.login}
        mode="contained"
        color="#ffb300"
        dark
        onPress={() => handleRegister()}>
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
    maxWidth: 150,
    maxHeight: 150,
  },
});

export default RegisterScreen;
