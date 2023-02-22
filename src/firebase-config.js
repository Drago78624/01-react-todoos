import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2KT6-aKDzQLba-PgDquYdsp4tYb9Ub8I",
  authDomain: "productivity-app-f5848.firebaseapp.com",
  projectId: "productivity-app-f5848",
  storageBucket: "productivity-app-f5848.appspot.com",
  messagingSenderId: "797285650043",
  appId: "1:797285650043:web:e0304660aeabbd8f579cde",
  measurementId: "G-ZLF2JBLKZ0",
};

const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
