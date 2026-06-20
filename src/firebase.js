// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA147NoNEicTRorKjtdB3xgESWmDU7M52Q",
  authDomain: "portfolio-ef32d.firebaseapp.com",
  projectId: "portfolio-ef32d",
  storageBucket: "portfolio-ef32d.firebasestorage.app",
  messagingSenderId: "48957231482",
  appId: "1:48957231482:web:095c96dafca152e4ffc6c3",
  measurementId: "G-3X16R3H6P0"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
