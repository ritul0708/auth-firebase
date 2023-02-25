// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "auth-firebase-51931.firebaseapp.com",
  projectId: "auth-firebase-51931",
  storageBucket: "auth-firebase-51931.appspot.com",
  messagingSenderId: "724240360647",
  appId: "1:724240360647:web:850826f43cabcd8ccf4ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app