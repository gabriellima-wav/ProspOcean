import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TelaHome from './src/telas/TelaHome';
import TelaLogin from './src/telas/TelaLogin';
import TelaCadastro from './src/telas/TelaCadastro';
import TelaInicial from './src/telas/TelaInicial';
import TelaCategorias from './src/telas/TelaCategorias';
import TelaDoacao from './src/telas/TelaDoacao';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tela1') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'TelaInicial') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Tela2') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Tela1" component={TelaCategorias} options={{ tabBarLabel: 'TelaCategorias' }} />
      <Tab.Screen name="TelaInicial" component={TelaInicial} options={{ tabBarLabel: 'Mapa' }} />
      <Tab.Screen name="Tela2" component={TelaDoacao} options={{ tabBarLabel: 'TelaDoacao' }} />
    </Tab.Navigator>
  );
}

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
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default App;
