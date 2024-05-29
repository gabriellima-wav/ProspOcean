import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TelaHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Bem vindo ao <Text style={styles.highlightText}>ProspOcean</Text>
      </Text>
      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  highlightText: {
    color: '#f00', // Cor vermelha
  },
});

export default TelaHome;
