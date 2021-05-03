import {Navigation} from 'react-native-navigation';
import LoginScreen from './views/Login';
import HomeScreen from './views/Home';
import SettingsScreen from './views/Settings';
import RegisterScreen from './views/Register';
import DeviceAddEditScreen from './views/DeviceAddEdit';
import DeviceDetailsScreen from './views/DeviceDetails';
import NavigationButtonComponent from './components/NavigationButton';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Register', () => RegisterScreen);
Navigation.registerComponent('DeviceAddEdit', () => DeviceAddEditScreen);
Navigation.registerComponent('DeviceDetails', () => DeviceDetailsScreen);
Navigation.registerComponent(
  'NavigationButtonComponent',
  () => NavigationButtonComponent,
);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#feb600',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#fdd835',
    },
    visible: true,
  },
});

export default LoginScreen;
