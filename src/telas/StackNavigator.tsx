// src/telas/StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from './TelaHome';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaInicial from './TelaInicial';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TelaHome">
      <Stack.Screen
        name="TelaHome"
        component={TelaHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaLogin"
        component={TelaLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaCadastro"
        component={TelaCadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
