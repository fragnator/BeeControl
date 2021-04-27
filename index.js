import {Navigation} from 'react-native-navigation';
import App from './App';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React from 'react';

Navigation.registerComponent('com.BeeControl.HomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.BeeControl.HomeScreen',
            },
          },
        ],
      },
    },
  });
});
