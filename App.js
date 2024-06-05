import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
        headerStyle: { backgroundColor: '#1d3557' }, // Azul
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
        options={{ tabBarLabel: 'Mapa' }} 
      />
      <Tab.Screen 
        name="Doações" 
        component={TelaDoacao} 
        options={{ tabBarLabel: 'Doações' }} 
      />
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
