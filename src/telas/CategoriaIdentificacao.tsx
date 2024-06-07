import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert, Modal, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoriaIdentificacao = () => {
  const [especies, setEspecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nomeCientifico, setNomeCientifico] = useState('');
  const [nomeComum, setNomeComum] = useState('');
  const [habitat, setHabitat] = useState('');
  const [statusConservacao, setStatusConservacao] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const apiUrl = Platform.OS === 'android'
    ? 'http://10.0.2.2:8080/api/especies-marinhas'
    : 'http://192.168.15.180:8080/api/especies-marinhas';

  useEffect(() => {
    fetchEspecies();
  }, []);

  const fetchEspecies = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setEspecies(data.content);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar espécies marinhas:', error);
      setLoading(false);
    }
  };

  const handleAddOrUpdateEspecie = async () => {
    try {
      const especie = { nomeCientifico, nomeComum, habitat, statusConservacao };
      const response = editingId
        ? await fetch(`${apiUrl}/${editingId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(especie),
          })
        : await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(especie),
          });

      if (!response.ok) {
        throw new Error('Erro ao salvar espécie marinha');
      }

      fetchEspecies();
      setNomeCientifico('');
      setNomeComum('');
      setHabitat('');
      setStatusConservacao('');
      setEditingId(null);
      setModalVisible(false);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao salvar espécie marinha');
    }
  };

  const handleEditEspecie = (especie) => {
    setNomeCientifico(especie.nomeCientifico);
    setNomeComum(especie.nomeComum);
    setHabitat(especie.habitat);
    setStatusConservacao(especie.statusConservacao);
    setEditingId(especie.id);
    setModalVisible(true);
  };

  const handleDeleteEspecie = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar espécie marinha');
      }

      fetchEspecies();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro ao deletar espécie marinha');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Espécies Marinhas</Text>
      <FlatList
        data={especies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Nome Comum: {item.nomeComum}</Text>
            <Text style={styles.itemText}>Nome Científico: {item.nomeCientifico}</Text>
            <Text style={styles.itemText}>Habitat: {item.habitat}</Text>
            <Text style={styles.itemText}>Status de Conservação: {item.statusConservacao}</Text>
            <View style={styles.itemButtons}>
              <TouchableOpacity style={[styles.iconButton, styles.editButton]} onPress={() => handleEditEspecie(item)}>
                <Ionicons name="create-outline" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.iconButton, styles.deleteButton]} onPress={() => handleDeleteEspecie(item.id)}>
                <Ionicons name="trash-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setEditingId(null);
          setNomeCientifico('');
          setNomeComum('');
          setHabitat('');
          setStatusConservacao('');
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{editingId ? 'Atualizar Espécie' : 'Adicionar Espécie'}</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome Científico"
              value={nomeCientifico}
              onChangeText={setNomeCientifico}
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Nome Comum"
              value={nomeComum}
              onChangeText={setNomeComum}
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Habitat"
              value={habitat}
              onChangeText={setHabitat}
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.input}
              placeholder="Status de Conservação"
              value={statusConservacao}
              onChangeText={setStatusConservacao}
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleAddOrUpdateEspecie}>
              <Text style={styles.modalButtonText}>{editingId ? 'Atualizar' : 'Adicionar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.modalCloseButton]} onPress={() => {
              setModalVisible(!modalVisible);
              setEditingId(null);
              setNomeCientifico('');
              setNomeComum('');
              setHabitat('');
              setStatusConservacao('');
            }}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  itemButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#ffc107',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
  addButton: {
    backgroundColor: '#28a745',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#e9ecef',
    color: '#343a40',  
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  modalCloseButton: {
    backgroundColor: '#6c757d',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CategoriaIdentificacao;
