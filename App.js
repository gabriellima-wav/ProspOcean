import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TelaHome from './src/telas/TelaHome';
import TelaLogin from './src/telas/TelaLogin';
import TelaCadastro from './src/telas/TelaCadastro';
import TelaInicial from './src/telas/TelaInicial';

import firebase from 'firebase/app';
import { app, db, getFirestore, collection, addDoc, getDocs } from './src/services/firebaseConfig';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;