// src/telas/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TelaCategorias from './TelaCategorias';
import TelaInicial from './TelaInicial';
import TelaDoacao from './TelaDoacao';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categorias') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Doacoes') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: '#0000FF' },
        headerTintColor: '#fff',
      })}
    >
      <Tab.Screen 
        name="Categorias" 
        component={TelaCategorias} 
        options={{ tabBarLabel: 'Categorias' }} 
      />
      <Tab.Screen 
        name="Home" 
        component={TelaInicial} 
        options={{ tabBarLabel: 'Home' }} 
      />
      <Tab.Screen 
        name="Doacoes" 
        component={TelaDoacao} 
        options={{ tabBarLabel: 'Doações' }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
