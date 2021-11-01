import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9CRencLuYranOK4IZcbY49uHJ8t0erlQ",
  authDomain: "twitterdemo-d934e.firebaseapp.com",
  projectId: "twitterdemo-d934e",
  storageBucket: "twitterdemo-d934e.appspot.com",
  messagingSenderId: "469579728833",
  appId: "1:469579728833:web:725a3f2b4cdd8487a51140"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
