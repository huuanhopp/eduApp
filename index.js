/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StartScreen from './src/screens/StartScreen';
import MainScreen from './src/screens/MainScreen';
import PuzzleGame2 from './src/screens/PuzzleScreen/PuzzleGame2';

AppRegistry.registerComponent(appName, () => App);
