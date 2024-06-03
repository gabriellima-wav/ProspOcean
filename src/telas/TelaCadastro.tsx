import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDrJa8_QCbxD6_HgvI8TxVOEK8sa8oqKD0",
  authDomain: "propsaiocean.firebaseapp.com",
  projectId: "propsaiocean",
  storageBucket: "propsaiocean.appspot.com",
  messagingSenderId: "524007923471",
  appId: "1:524007923471:web:2662803053d793784e287a",
  measurementId: "G-CC6LW971QN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleCadastro = () => {
    if (!email || !password || !name || !cpf || !day || !month || !year) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const birthdate = `${day}/${month}/${year}`;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate('TelaInicial');
      })
      .catch((error) => {
        Alert.alert('Erro', error.message);
      });
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>Voltar</Text>
    </TouchableOpacity>
    <Text style={styles.title}>Cadastro</Text>
    <TextInput
      style={styles.input}
      placeholder="Nome"
      value={name}
      onChangeText={setName}
    />
    <TextInput
      style={styles.input}
      placeholder="E-mail"
      keyboardType="email-address"
      autoCapitalize="none"
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      style={styles.input}
      placeholder="Senha"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <TextInput
      style={styles.input}
      placeholder="CPF"
      keyboardType="numeric"
      value={cpf}
      onChangeText={setCpf}
    />
    <Text style={styles.dateOfBirthLabel}>Data de Nascimento</Text>
    <View style={styles.dateOfBirthContainer}>
      <View style={styles.dateInputContainer}>
        <Text style={styles.dateInputLabel}>Dia</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="DD"
          keyboardType="numeric"
          value={day}
          onChangeText={setDay}
        />
      </View>
      <View style={styles.dateInputContainer}>
        <Text style={styles.dateInputLabel}>Mês</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="MM"
          keyboardType="numeric"
          value={month}
          onChangeText={setMonth}
        />
      </View>
      <View style={styles.dateInputContainer}>
        <Text style={styles.dateInputLabel}>Ano</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="YYYY"
          keyboardType="numeric"
          value={year}
          onChangeText={setYear}
        />
      </View>
    </View>
    <TouchableOpacity style={styles.button} onPress={handleCadastro}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  dateOfBirthLabel: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateOfBirthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateInputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  dateInputLabel: {
    marginBottom: 5,
  },
  dateInput: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CadastroScreen;
