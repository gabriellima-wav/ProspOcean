import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const TelaInicial = () => {
  const initialRegion = {
    latitude: -29.4597,
    longitude: -51.9634,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mapa de Cidades</Text>
      <MapView 
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: -29.4597, longitude: -51.9731 }}
          title="Lajeado"
          description="Cidade de Lajeado"
        >
          <Callout>
            <Text>Lajeado - Uma cidade importante na região.</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{ latitude: -29.4464, longitude: -51.9487 }}
          title="Estrela"
          description="Cidade de Estrela"
        >
          <Callout>
            <Text>Estrela - Conhecida por suas indústrias e turismo rural.</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{ latitude: -29.4008, longitude: -51.9505 }}
          title="Arroio do Meio"
          description="Cidade de Arroio do Meio"
        >
          <Callout>
            <Text>Arroio do Meio - Destaque na produção agroindustrial.</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{ latitude: -29.5144, longitude: -51.9929 }}
          title="Cruzeiro do Sul"
          description="Cidade de Cruzeiro do Sul"
        >
          <Callout>
            <Text>Cruzeiro do Sul - Importante no contexto histórico e cultural.</Text>
          </Callout>
        </Marker>
      </MapView>
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
    marginBottom: 30,

  },
  map: {
    width: '100%',
    height: '80%',
  },
});

export default TelaInicial;
