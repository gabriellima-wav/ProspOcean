import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const TelaCategorias = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]); 

  const categorias = [
    { name: 'Identificação', screen: 'CategoriaIdentificacao', icon: 'clipboard' },
    { name: 'Encontros', screen: 'CategoriaEncontros', icon: 'users' },
    { name: 'Cuidados', screen: 'CategoriaCuidados', icon: 'heart' },
    { name: 'Classificação', screen: 'CategoriaClassificacao', icon: 'list' },
    { name: 'Relatórios', screen: 'CategoriaRelatorios', icon: 'file-alt' },
    { name: 'Monitoramento', screen: 'CategoriaMonitoramento', icon: 'eye' }
  ];

  const numColumns = 3; 

  const renderCategoriaButton = (categoria, index) => {
    const { width } = Dimensions.get('window');
    const buttonWidth = (width - 40) / numColumns - 20; 

    return (
      <TouchableOpacity
        key={index}
        style={[styles.button, { width: buttonWidth }]}
        onPress={() => navigation.navigate(categoria.screen)}
      >
        <FontAwesome5 name={categoria.icon} size={40} color="#fff" />
        <Text style={styles.buttonText}>{categoria.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua categoria</Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.grid}>
          {categorias.map((categoria, index) => renderCategoriaButton(categoria, index))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Ajustado para alinhar conteúdo para cima
    backgroundColor: '#1d3557',
    paddingTop: 60, // Espaço extra no topo
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  categoriesContainer: {
    backgroundColor: '#180d4a',
    borderRadius: 20,
    padding: 20,
    marginTop: 275, 
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#1f187c',
    height: 100,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default TelaCategorias;
