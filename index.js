/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

import Card from './components/card/Card';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Card);
