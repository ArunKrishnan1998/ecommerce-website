import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJS8i3rerg2tEhbcEmfSRh2ScU47lT2Tw",
  authDomain: "by-ak-773c0.firebaseapp.com",
  projectId: "by-ak-773c0",
  storageBucket: "by-ak-773c0.appspot.com",
  messagingSenderId: "818049466051",
  appId: "1:818049466051:web:732f570fdb540912f32c76",
  measurementId: "G-TSVY96QD0C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };