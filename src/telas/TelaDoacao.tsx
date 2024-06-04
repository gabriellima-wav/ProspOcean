// src/telas/TelaDoacao.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TelaDoacao = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formas de Doação</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Doação Mensal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Doar Agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1d3557',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaDoacao;
