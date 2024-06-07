import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const TelaInicial = () => {
  const initialRegion = {
    latitude: -29.4597,
    longitude: -51.9634,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Áreas Afetadas por Enchentes no Rio Grande do Sul</Text>
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
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Temperatura</Text>
          <Text style={styles.infoValue}>22°C</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Qualidade da Água</Text>
          <Text style={styles.infoValue}>ruim</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: 20,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: 400, 
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    color: '#1d3557',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d3557',
  },
});

export default TelaInicial;
