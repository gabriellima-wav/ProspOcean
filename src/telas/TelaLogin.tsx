import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView, Switch } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

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
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
        Alert.alert('Erro de Login', 'Use email e senha válidos');
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.container}>
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
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Entre com a sua senha"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#a9a9a9"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="grey" />
            </TouchableOpacity>
          </View>
          <View style={styles.rememberContainer}>
            <View style={styles.rememberMe}>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
              />
              <Text style={styles.rememberText}>Lembre de mim</Text>
            </View>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#1a237e', 
  },
  topContainer: {
    height: '30%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingTop: 40,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', 
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    width: '90%',
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputPassword: {
    flex: 1,
    height: '100%',
    borderColor: 'transparent',
  },
  eyeIcon: {
    padding: 5,
  },
  rememberContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 14,
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#1a237e',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
  googleButton: {
    width: '90%',
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
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
  },
  signupLink: {
    alignItems: 'center',
  },
  signupText: {
    color: '#000',
    fontSize: 14,
  },
  signupLinkText: {
    color: '#202327',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TelaLogin;
