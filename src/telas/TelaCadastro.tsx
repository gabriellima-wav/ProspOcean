import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCadastro = () => {
    if (!email || !password || !name || !telefone || !cpf || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.profilePicContainer}>
          <TouchableOpacity style={styles.profilePicButton}>
            <Text style={styles.profilePicText}>+</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
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
          placeholder="Telefone"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
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
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')} style={styles.loginLink}>
          <Text style={styles.loginLinkText}>Já tem uma conta? Entre na sua conta aqui</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a237e', // Fundo azul escuro
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: 130,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a237e', // Cor do título
    marginBottom: 20,
    alignSelf: 'center'
  },
  profilePicContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  profilePicButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicText: {
    fontSize: 32,
    color: '#fff',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '90%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: '#007bff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default CadastroScreen;
