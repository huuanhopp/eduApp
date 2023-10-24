import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackScreen} from './src/constants/constants';
import PuzzleGame1 from './src/screens/PuzzleScreen/PuzzleGame1';
import PuzzleGame2 from './src/screens/PuzzleScreen/PuzzleGame2';
import PuzzleGame3 from './src/screens/PuzzleScreen/PuzzleGame3';
import SpeakingGame3 from './src/screens/SpeakingScreen/SpeakingGame3';
import ListeningGame1 from './src/screens/ListeningScreen/ListeningGame1';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {/* {stackScreen.map(stackItem => (
          <Stack.Screen
            key={stackItem.name}
            name={stackItem.name}
            component={stackItem.component}
            options={{headerShown: false}}
          />
        ))} */}
        <Stack.Screen
            key={"PuzzleGame2"}
            name={"PuzzleGame2"}
            component={PuzzleGame2}
            options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
