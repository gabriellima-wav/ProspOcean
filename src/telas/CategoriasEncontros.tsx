import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoriaEncontros = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categoria Encontros</Text>
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CategoriaEncontros;
