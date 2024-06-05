import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TelaDoacao = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Formas de Doação</Text>
        <Text style={styles.text}>
          Juntos, podemos fazer a diferença para um futuro mais sustentável e um oceano mais limpo.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Doação Mensal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Doar Agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1d3557', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white', 
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1d3557',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 60,
    alignItems: 'center',
    marginVertical: 20, 
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 18, 
    fontSize: 18,
    textAlign: 'center',
  },
});

export default TelaDoacao;
