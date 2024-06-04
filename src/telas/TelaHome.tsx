// src/telas/TelaHome.js
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const TelaHome = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/backpp.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Seja Bem-Vindo!</Text>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>ProspOcean</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaLogin')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaCadastro')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>ProspAI©</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top: 100,
    fontWeight: 'bold',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0a74da', // Ajuste a cor conforme necessário
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default TelaHome;