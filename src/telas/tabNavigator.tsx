import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TelaInicial from './TelaInicial';
import TelaCategorias from './TelaCategorias';
import TelaDoacao from './TelaDoacao';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categorias') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Doações') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Categorias" 
        component={TelaCategorias} 
        options={{ 
          tabBarLabel: 'TelaCategorias',
          headerStyle: { backgroundColor: '#1d3557' }, 
        }} 
      />
      <Tab.Screen 
        name="Home" 
        component={TelaInicial} 
        options={{ 
          tabBarLabel: 'Mapa',
          headerStyle: { backgroundColor: '#1d3557' }, 
          headerTintColor: '#fff',
        }} 
      />
      <Tab.Screen 
        name="Doações" 
        component={TelaDoacao} 
        options={{ 
          tabBarLabel: 'TelaDoacao',
          headerStyle: { backgroundColor: '#1d3557' }, 
          headerTintColor: '#fff',
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
