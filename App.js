import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from "./components/Todo"
import Login from "./components/Login";
import User from "./components/User";
import UsersScreen from "./screens/UsersScreen";
import SelectImage from "./screens/SelectImage";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

const Stack = createNativeStackNavigator();

const App = () => {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="open" component={Login} options={{ title: 'Home' }} />
          <Stack.Screen name="todo" component={Todo} options={{ title: 'Todo' }} />
          <Stack.Screen name="userScreen" component={UsersScreen} options={{ title: 'Users' }} />
          <Stack.Screen name="chooseImage" component={SelectImage} options={{ title: 'Select Image' }} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }

};

export default App;
