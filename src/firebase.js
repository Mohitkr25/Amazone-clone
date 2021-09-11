// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDiUPAc77iflxy_uS5Gvu69-6RJC_eZtRs",
  authDomain: "e-challenge-d8b5e.firebaseapp.com",
  projectId: "e-challenge-d8b5e",
  storageBucket: "e-challenge-d8b5e.appspot.com",
  messagingSenderId: "797993882056",
  appId: "1:797993882056:web:2c60bb5e9522da66b170fd",
  measurementId: "G-KWBLGXB7CD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
