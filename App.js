import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaHome from './src/telas/TelaHome'; 
import TelaLogin from './src/telas/TelaLogin'; 

// Import and initialize Firebase
import { firebase } from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDrJa8_QCbxD6_HgvI8TxVOEK8sa8oqKD0",
  authDomain: "propsaiocean.firebaseapp.com",
  projectId: "propsaiocean",
  storageBucket: "propsaiocean.appspot.com",
  messagingSenderId: "524007923471",
  appId: "1:524007923471:web:2662803053d793784e287a",
  measurementId: "G-CC6LW971QN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Login" component={TelaLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
