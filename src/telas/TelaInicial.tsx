import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const TelaInicial = () => {
  const initialRegion = {
    latitude: -29.4597,
    longitude: -51.9634,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: -29.4597, longitude: -51.9731 }}
          title="Lajeado"
          description="Cidade de Lajeado"
        />
        <Marker
          coordinate={{ latitude: -29.4464, longitude: -51.9487 }}
          title="Estrela"
          description="Cidade de Estrela"
        />
        <Marker
          coordinate={{ latitude: -29.4008, longitude: -51.9505 }}
          title="Arroio do Meio"
          description="Cidade de Arroio do Meio"
        />
        <Marker
          coordinate={{ latitude: -29.5144, longitude: -51.9929 }}
          title="Cruzeiro do Sul"
          description="Cidade de Cruzeiro do Sul"
        />
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
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '70%', 
  },
});

export default TelaInicial;
