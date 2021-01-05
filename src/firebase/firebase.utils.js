import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsMeA0Ktu_BUK-m_o3TAKH1pVCwuRgM-M",
  authDomain: "shopping-cartdb.firebaseapp.com",
  projectId: "shopping-cartdb",
  storageBucket: "shopping-cartdb.appspot.com",
  messagingSenderId: "269001941789",
  appId: "1:269001941789:web:02069e4e265894df6037f4",
  measurementId: "G-J0DWM8LWH1",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

//Google Authentication

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
