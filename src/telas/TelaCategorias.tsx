import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TelaCategorias = () => {
  const categorias = [
    'Identificação',
    'Encontros',
    'Cuidados',
    'Classificação',
    'Relatórios',
    'Monitoramento'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      {categorias.map((categoria, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.buttonText}>{categoria}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0000FF', // Cor de fundo azul
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TelaCategorias;
