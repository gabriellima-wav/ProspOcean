// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrJa8_QCbxD6_HgvI8TxVOEK8sa8oqKD0",
  authDomain: "propsaiocean.firebaseapp.com",
  projectId: "propsaiocean",
  storageBucket: "propsaiocean.appspot.com",
  messagingSenderId: "524007923471",
  appId: "1:524007923471:web:2662803053d793784e287a",
  measurementId: "G-CC6LW971QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);