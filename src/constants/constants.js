import StartScreen from '../screens/StartScreen';
import AdvertisingScreen from '../screens/AdvertisingScreen';
import MainScreen from '../screens/MainScreen';
import StageScreen from '../screens/StageScreen';
import ProgressScreen from '../screens/ProgressScreen/ProgressScreen';
import ListeningProgress from '../screens/ProgressScreen/ListeningProgress';
import SpeakingProgress from '../screens/ProgressScreen/SpeakingProgress';
import PuzzleProgress from '../screens/ProgressScreen/PuzzleProgress';
import ListeningGame1 from '../screens/ListeningScreen/ListeningGame1';
import ListeningGame2 from '../screens/ListeningScreen/ListeningGame2';
import ListeningGame3 from '../screens/ListeningScreen/ListeningGame3';
import ListeningGame4 from '../screens/ListeningScreen/ListeningGame4';
import ListeningGame5 from '../screens/ListeningScreen/ListeningGame5';
import PuzzleGame1 from '../screens/PuzzleScreen/PuzzleGame1';
import SpeakingGame1 from '../screens/SpeakingScreen/SpeakingGame1';
import SpeakingGame1Result from '../screens/SpeakingScreen/SpeakingGame1Result';
import SpeakingGame2 from '../screens/SpeakingScreen/SpeakingGame2';
import SpeakingGame2Result from '../screens/SpeakingScreen/SpeakingGame2Result';
import SpeakingGame3 from '../screens/SpeakingScreen/SpeakingGame3';
import SpeakingGame3Result from '../screens/SpeakingScreen/SpeakingGame3Result';
import SpeakingGame4 from '../screens/SpeakingScreen/SpeakingGame4';
import SpeakingGame4Result from '../screens/SpeakingScreen/SpeakingGame4Result';
// import ListeningModalDialog from '../core/Modal/ListeningModalDialog';
import Stage1Screen from '../screens/Stage1Screen/Stage1Screen';
import TutorialScreen from '../components/Tutorial/TutorialScreen';
import {Dimensions} from 'react-native';
import GuideScreen from '../components/Guide/GuideScreen';

export const stackScreen = [
  {
    name: 'Start',
    component: StartScreen,
  },
  {
    name: 'AdvertisingScreen',
    component: AdvertisingScreen,
  },
  {
    name: 'Main',
    component: MainScreen,
  },
  {
    name: 'Stage',
    component: StageScreen,
  },
  {
    name: 'Progress',
    component: ProgressScreen,
  },
  {
    name: 'ListeningProgress',
    component: ListeningProgress,
  },
  {
    name: 'SpeakingProgress',
    component: SpeakingProgress,
  },
  {
    name: 'PuzzleProgress',
    component: PuzzleProgress,
  },
  {
    name: 'ListeningGame1',
    component: ListeningGame1,
  },
  {
    name: 'ListeningGame3',
    component: ListeningGame3,
  },
  {
    name: 'ListeningGame2',
    component: ListeningGame2,
  },
  {
    name: 'ListeningGame4',
    component: ListeningGame4,
  },
  {
    name: 'ListeningGame5',
    component: ListeningGame5,
  },
  {
    name: 'PuzzleGame1',
    component: PuzzleGame1,
  },
  {
    name: 'Stage1',
    component: Stage1Screen,
  },
  {
    name: 'SpeakingGame1',
    component: SpeakingGame1,
  },
  {
    name: 'SpeakingGame1Result',
    component: SpeakingGame1Result,
  },
  {
    name: 'SpeakingGame2',
    component: SpeakingGame2,
  },
  {
    name: 'SpeakingGame2Result',
    component: SpeakingGame2Result,
  },
  {
    name: 'SpeakingGame3',
    component: SpeakingGame3,
  },
  {
    name: 'SpeakingGame3Result',
    component: SpeakingGame3Result,
  },
  {
    name: 'SpeakingGame4',
    component: SpeakingGame4,
  },
  {
    name: 'SpeakingGame4Result',
    component: SpeakingGame4Result,
  },
  {
    name: 'TutorialScreen',
    component: TutorialScreen,
  },
  {
    name: 'GuideScreen',
    component: GuideScreen,
  },
];

export const screenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const widthScreen = Dimensions.get('screen').height * 1.431;
