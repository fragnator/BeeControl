import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LoginScreen from './views/Login';
import HomeScreen from './views/Home';
import SettingsScreen from './views/Settings';
import RegisterScreen from './views/Register';
import DeviceAddEditScreen from './views/DeviceAddEdit';
import DeviceDetailsScreen from './views/DeviceDetails';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Register', () => RegisterScreen);
Navigation.registerComponent('DeviceAddEdit', () => DeviceAddEditScreen);
Navigation.registerComponent('DeviceDetails', () => DeviceDetailsScreen);

const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 12,
    selectedFontSize: 12,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});

export default LoginScreen;
