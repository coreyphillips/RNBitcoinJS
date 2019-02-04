/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import 'node-libs-react-native/globals';
import './globals.js';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
