import React from 'react';
import {View} from 'react-native';
import {Button, IconButton, Menu, Divider, Provider} from 'react-native-paper';
import {Navigation} from 'react-native-navigation';

const NavigationButtonLogoutComponent = () => {
  const handleLogoutClick = () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Login',
              },
            },
          ],
        },
      },
    });
  };

  return (
    <View>
      <Button
        style={{marginRight: 16}}
        icon="logout"
        color="#ffffff"
        size={20}
        onPress={() => handleLogoutClick()}>
        Logout
      </Button>
    </View>
  );
};

export default NavigationButtonLogoutComponent;
