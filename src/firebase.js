// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHjA5bZGz6D7kXdEA4QAbpOoh6iR9nByw",
  authDomain: "clone-3e3bc.firebaseapp.com",
  projectId: "clone-3e3bc",
  storageBucket: "clone-3e3bc.appspot.com",
  messagingSenderId: "702827376596",
  appId: "1:702827376596:web:6d2f4596e91bf3acfb3041",
  measurementId: "G-L8383NN2PW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
