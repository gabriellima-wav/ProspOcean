import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriaClassificacao = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categoria Classificação</Text>
      <Button
        title="Voltar para Categorias"
        onPress={() => navigation.navigate('TelaCategorias')}
      />
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

export default CategoriaClassificacao;
