import React from 'react';
import {View} from 'react-native';
import {Button, IconButton, Menu, Divider, Provider} from 'react-native-paper';
import {Navigation} from 'react-native-navigation';

const NavigationButtonDeviceEditComponent = props => {
  const handleEditClick = () => {
    Navigation.push(props.parentComponent, {
      component: {
        name: 'DeviceAddEdit',
        passProps: {
          deviceId: props.deviceId,
          title: props.title,
        },
      },
    });
  };

  return (
    <View>
      <Button
        style={{marginRight: 16}}
        icon="pencil"
        color="#ffffff"
        size={20}
        onPress={() => handleEditClick()}>
        Edit
      </Button>
    </View>
  );
};

export default NavigationButtonDeviceEditComponent;
