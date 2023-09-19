// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA3i4utp1nIUO4Gthvk6ePy-3vf3buGTnE",

  authDomain: "headlesswp-ce9b5.firebaseapp.com",

  projectId: "headlesswp-ce9b5",

  storageBucket: "headlesswp-ce9b5.appspot.com",

  messagingSenderId: "553083323121",

  appId: "1:553083323121:web:f6c3014ab6950bf3761f50",
};

// Initialize Firebase

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
