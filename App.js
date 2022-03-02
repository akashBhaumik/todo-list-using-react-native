import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from "./components/Todo"
import Login from "./components/Login";
import User from "./components/User";

const Stack = createNativeStackNavigator();

const App = () => {
  

  return (
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OPEN" component={Login} />
        <Stack.Screen name="Todo" component={Todo}  options={{ title: 'Overview' }} />
        <Stack.Screen name="user" component={User}   options={{ title: 'Users' }}/>

      </Stack.Navigator>
    </NavigationContainer>

  
  )
};



export default App;
