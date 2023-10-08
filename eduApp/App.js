import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./src/screens/StartScreen";
import AdvertisingScreen from "./src/screens/AdvertisingScreen";
import { stackScreen } from "./src/constants/constants";
import TutorialScreen from "./src/components/Tutorial/TutorialScreen";
import GuideScreen from "./src/components/Guide/GuideScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          // key={stackItem.name}
          name="a"
          component={GuideScreen}
          options={{ headerShown: false }}
        />
        {/* {stackScreen.map((stackItem) => (
          <Stack.Screen
            key={stackItem.name}
            name={stackItem.name}
            component={stackItem.component}
            options={{ headerShown: false }}
          />
        ))} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
