import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
 import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyARg13vtpFuPluS8wN33JaAb6t8cn7wvCI",
    authDomain: "myfitness-38f77.firebaseapp.com",
    projectId: "myfitness-38f77",
    storageBucket: "myfitness-38f77.appspot.com",
    messagingSenderId: "407369893505",
    appId: "1:407369893505:web:e042bb9622629dc8b5ef80",
    measurementId: "G-X6G8PCF243"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
