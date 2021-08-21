import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigator from './Pages/Navigator';
import UserEditProfile from './Pages/UserEditProfile';
import ArrayTest from './Testing/ArrayTest';
import FindDistance from './Testing/FindDistance';
import FlowTest from './Testing/FlowTest';
import ImagePicker from './Testing/ImagePicker';
import ImageTest from './Testing/ImageTest';
import TestingGIFS from './Testing/TestingGIFS';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Navigator);
