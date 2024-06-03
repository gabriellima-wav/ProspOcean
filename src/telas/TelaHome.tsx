import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const TelaHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/ProspOcean.png')}
        style={styles.logo}
      />
      <Text style={styles.logoText}>ProspOcean</Text>
      <Text style={styles.welcomeText}>
        Bem-vindo ao <Text style={styles.highlightText}>ProspOcean</Text>
      </Text>
      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate('TelaLogin')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    width: 100, 
    height: 100, 
    marginBottom: 20,
  },
  logoText: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4682B4', 
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#4682B4', 
  },
  highlightText: {
    color: '0000', 
  },
});

export default TelaHome;