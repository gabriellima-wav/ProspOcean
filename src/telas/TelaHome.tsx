import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const TelaHome = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Seja Bem-Vindo!</Text>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/ProspOcean.png')} style={styles.logo} />
          <Text style={styles.logoText}>ProspOcean</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaLogin')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaCadastro')}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    marginTop: 120, // Increased margin to move title down
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 300, // Increased margin to move logo down
    marginBottom: 20,
  },
  logo: {
    width: 74,
    height: 74,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    marginTop: 10, // Increased margin to move buttons down
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#0a74da',
    paddingVertical: 15,
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
    position: 'absolute',
    bottom: 10,
  },
});

export default TelaHome;