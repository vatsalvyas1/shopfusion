// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCRWVuN4tbakpMfEkEKoA3bUeLtOguGYlY",
  authDomain: "ecommerce-2a7ec.firebaseapp.com",
  projectId: "ecommerce-2a7ec",
  storageBucket: "ecommerce-2a7ec.appspot.com",
  messagingSenderId: "692161922750",
  appId: "1:692161922750:web:80ffc655dd15b9655640ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firestore = getFirestore(app);
