import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const TelaCategorias = ({ navigation }) => {
  const categorias = [
    { name: 'Identificação', screen: 'CategoriaIdentificacao', icon: 'clipboard' },
    { name: 'Encontros', screen: 'CategoriaEncontros', icon: 'ios-people' },
    { name: 'Cuidados', screen: 'CategoriaCuidados', icon: 'ios-heart' },
    { name: 'Classificação', screen: 'CategoriaClassificacao', icon: 'ios-list' },
    { name: 'Relatórios', screen: 'CategoriaRelatorios', icon: 'ios-paper' },
    { name: 'Monitoramento', screen: 'CategoriaMonitoramento', icon: 'ios-eye' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.grid}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.button} 
            onPress={() => navigation.navigate(categoria.screen)}
          >
            <Ionicons name={categoria.icon} size={40} color="#fff" />
            <Text style={styles.buttonText}>{categoria.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF', // Cor de fundo azul
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Cor do texto branco
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1f187c', // Cor de fundo azul
    width: 100, // Largura do botão
    height: 100, // Altura do botão
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Arredondar os cantos do botão
  },
  buttonText: {
    color: '#ffffff', // Cor do texto dos botões branco
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default TelaCategorias;
