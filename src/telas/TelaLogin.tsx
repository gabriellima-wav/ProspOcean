import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Importações do Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

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
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.formContainer}>
                <Image source={require('../../assets/ProspOcean.png')} style={styles.logo} />
                <Text style={styles.title}>Login</Text>
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
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCadastro}>
                    <Text style={styles.cadastroText}>Não tem uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    formContainer: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    loginButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        marginTop: 10,
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    cadastroText: {
        marginTop: 20,
        color: '#007bff',
        textDecorationLine: 'underline',
    },
});

export default TelaLogin;
