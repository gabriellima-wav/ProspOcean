import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // Certifique-se de importar ambas as bibliotecas

const TelaCategorias = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

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
      <View style={styles.categoriesWrapper}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0000FF',
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  categoriesWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1f187c',
    width: '30%',
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
