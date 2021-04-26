import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default {AppNavigator};
