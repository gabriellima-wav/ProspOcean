import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';


const TelaCategorias = ({ navigation }) => {
  const categorias = [
    { name: 'Identificação', screen: 'CategoriaIdentificacao', icon: 'clipboard' },
    { name: 'Encontros', screen: 'CategoriaEncontros', icon: 'team' },
    { name: 'Cuidados', screen: 'CategoriaCuidados', icon: 'heart' },
    { name: 'Classificação', screen: 'CategoriaClassificacao', icon: 'ios-list' },
    { name: 'Relatórios', screen: 'CategoriaRelatorios', icon: 'file-text' },
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
    backgroundColor: '#0000FF', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', 
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1f187c',
    width: 100, 
    height: 100, 
    margin: 10,
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
