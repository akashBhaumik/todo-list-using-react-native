import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from "./components/Todo"
import Login from "./components/Login";
import User from "./components/User";
import UsersScreen from "./screens/UsersScreen";
import SelectImage from "./screens/SelectImage";

const Stack = createNativeStackNavigator();

const App = () => {
  

  return (
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="open" component={Login} options={{ title: 'Home' }}/>
        <Stack.Screen name="todo" component={Todo}  options={{ title: 'Todo' }} />
        <Stack.Screen name="userScreen" component={UsersScreen}   options={{ title: 'Users' }}/>
        <Stack.Screen name="chooseImage" component={SelectImage}   options={{ title: 'Select Image' }}/>

      </Stack.Navigator>
    </NavigationContainer>

  
  )
};

export default App;
