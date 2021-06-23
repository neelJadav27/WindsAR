/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomePage from './Pages/HomePage';
import MenuNavigator from './Pages/MenuNavigator';
import Navigator from './Pages/Navigator';
import ProfilePage from './Pages/ProfilePage';
import SignupAs from './Pages/SignupAs';
import TESTT from './Testing/TESTT';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => ProfilePage);
