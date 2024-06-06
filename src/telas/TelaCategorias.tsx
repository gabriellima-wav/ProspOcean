import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const TelaCategorias = ({ navigation }) => {
  const categorias = [
    { name: 'Identificação', screen: 'CategoriaIdentificacao', icon: 'clipboard', lib: 'FontAwesome5' },
    { name: 'Encontros', screen: 'CategoriaEncontros', icon: 'users', lib: 'FontAwesome5' },
    { name: 'Cuidados', screen: 'CategoriaCuidados', icon: 'heart', lib: 'FontAwesome5' },
    { name: 'Classificação', screen: 'CategoriaClassificacao', icon: 'list', lib: 'FontAwesome5' },
    { name: 'Relatórios', screen: 'CategoriaRelatorios', icon: 'file-alt', lib: 'FontAwesome5' },
    { name: 'Monitoramento', screen: 'CategoriaMonitoramento', icon: 'eye', lib: 'FontAwesome5' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua categoria</Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.grid}>
          {categorias.map((categoria, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate(categoria.screen)}
            >
              {categoria.lib === 'Ionicons' ? (
                <Ionicons name={categoria.icon} size={40} color="#fff" />
              ) : (
                <FontAwesome5 name={categoria.icon} size={40} color="#fff" />
              )}
              <Text style={styles.buttonText}>{categoria.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ajusta o espaço entre os itens
    width: '100%',
    marginTop: 20, // Adiciona um espaço extra acima da grade
  },
  button: {
    backgroundColor: '#1f187c',
    width: '30%', // Ajusta a largura do botão para ocupar um terço da largura do contêiner pai
    height: 100,
    marginVertical: 10, // Espaço vertical entre os botões
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default TelaCategorias;
