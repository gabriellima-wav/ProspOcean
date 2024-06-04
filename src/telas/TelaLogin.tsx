import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

// Configurações do Firebase
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

const TelaLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('TelaInicial');
      })
      .catch((error) => {
        Alert.alert('Erro de Login', error.message);
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu email para redefinir a senha.');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Sucesso', 'Um email de redefinição de senha foi enviado.');
      })
      .catch((error) => {
        Alert.alert('Erro', error.message);
      });
  };

  const handleCadastro = () => {
    navigation.navigate('TelaCadastro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Entre com o seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#a9a9a9"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Entre com a sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#a9a9a9"
        />
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.optionText}>Lembre de mim</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.optionText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Ou</Text>
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require('../../assets/google.png')} style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Login usando Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupLink} onPress={handleCadastro}>
          <Text style={styles.signupText}>Não tem conta ainda? <Text style={styles.signupLinkText}>Crie sua conta aqui</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d3557',
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    flex: 2,
    width: '90%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    marginTop: -30,
  },
  label: {
    color: '#333',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    color: '#1d3557',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#1d3557',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#a9a9a9',
    marginBottom: 20,
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupLink: {
    alignItems: 'center',
  },
  signupText: {
    color: '#a9a9a9',
    fontSize: 14,
  },
  signupLinkText: {
    color: '#1d3557',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TelaLogin;
