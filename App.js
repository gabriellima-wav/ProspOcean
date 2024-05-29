// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaHome from './TelaHome';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Adicione outras telas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
