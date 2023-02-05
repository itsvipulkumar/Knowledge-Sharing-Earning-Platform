// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD2MjdSf1Bk8W-0RbhMq-U_-_ZmvjXCBj0",
  authDomain: "syntaxerrorhub.firebaseapp.com",
  projectId: "syntaxerrorhub",
  storageBucket: "syntaxerrorhub.appspot.com",
  messagingSenderId: "476543083986",
  appId: "1:476543083986:web:51cd201c507467fb6c140b",
  measurementId: "G-BJJRMGT7WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth();
export const provider= new GoogleAuthProvider();