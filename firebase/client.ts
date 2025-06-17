
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpXNJ9jgJaxLOx9AZQ09d-JHiqCBdl87c",
  authDomain: "prepmockint.firebaseapp.com",
  projectId: "prepmockint",
  storageBucket: "prepmockint.firebasestorage.app",
  messagingSenderId: "123967858525",
  appId: "1:123967858525:web:70d6f1330dde51d51ceab4",
  measurementId: "G-33483Z7G72"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
 