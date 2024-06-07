import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const TelaCategorias = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]); 

  const categorias = [
    { name: 'Identificação', screen: 'CategoriaIdentificacao', icon: 'clipboard', lib: FontAwesome5 },
    { name: 'Encontros', screen: 'CategoriaEncontros', icon: 'users', lib: FontAwesome5 },
    { name: 'Cuidados', screen: 'CategoriaCuidados', icon: 'heart', lib: FontAwesome5 },
    { name: 'Classificação', screen: 'CategoriaClassificacao', icon: 'list', lib: FontAwesome5 },
    { name: 'Relatórios', screen: 'CategoriaRelatorios', icon: 'file-alt', lib: FontAwesome5 },
    { name: 'Monitoramento', screen: 'CategoriaMonitoramento', icon: 'eye', lib: FontAwesome5 }
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
        <categoria.lib name={categoria.icon} size={40} color="#fff" />
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
    justifyContent: 'center',
    backgroundColor: '#1d3557',
    paddingVertical: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: 100,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
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
