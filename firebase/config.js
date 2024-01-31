// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB5UVW4Z_u_ZTpxJuMgkMnuoTot9qJCzys",
  authDomain: "myapp-e0e3a.firebaseapp.com",
  projectId: "myapp-e0e3a",
  storageBucket: "myapp-e0e3a.appspot.com",
  messagingSenderId: "1090277296484",
  appId: "1:1090277296484:web:b9f66287cd804236e85271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)
export const provider = new GoogleAuthProvider();