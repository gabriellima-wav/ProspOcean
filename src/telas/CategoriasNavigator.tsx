import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import TelaCategorias from './TelaCategorias';
import CategoriaClassificacao from './CategoriaClassificacao';
import CategoriaIdentificacao from './CategoriaIdentificacao';
import CategoriaMonitoramento from './CategoriaMonitoramento';
import CategoriaCuidados from './CategoriasCuidados';
import CategoriaEncontros from './CategoriasEncontros';
import CategoriaRelatorios from './CategoriasRelatorios';

const Stack = createStackNavigator();

const CategoriasNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name="Escolha a Categoria" 
        component={TelaCategorias} 
        options={{ headerShown: false }}  
      />
      <Stack.Screen 
        name="CategoriaIdentificacao" 
        component={CategoriaIdentificacao} 
        options={{ headerTitle: 'Identificação' }}
      />
      <Stack.Screen 
        name="CategoriaEncontros" 
        component={CategoriaEncontros} 
        options={{ headerTitle: 'Encontros' }}
      />
      <Stack.Screen 
        name="CategoriaCuidados" 
        component={CategoriaCuidados} 
        options={{ headerTitle: 'Cuidados' }}
      />
      <Stack.Screen 
        name="CategoriaClassificacao" 
        component={CategoriaClassificacao} 
        options={{ headerTitle: 'Classificação' }}
      />
      <Stack.Screen 
        name="CategoriaRelatorios" 
        component={CategoriaRelatorios} 
        options={{ headerTitle: 'Relatórios' }}
      />
      <Stack.Screen 
        name="CategoriaMonitoramento" 
        component={CategoriaMonitoramento} 
        options={{ headerTitle: 'Monitoramento' }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTitleStyle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const screenOptions = {
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.headerTitleStyle,
};

export default CategoriasNavigator;
