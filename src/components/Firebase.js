// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3N6KfENEhlPm8UGQdMuP5rcFx8qsw0bM",
  authDomain: "cryptoinvest-2e57f.firebaseapp.com",
  projectId: "cryptoinvest-2e57f",
  storageBucket: "cryptoinvest-2e57f.appspot.com",
  messagingSenderId: "449428626029",
  appId: "1:449428626029:web:cbb6517e43e9779b74bd64",
  measurementId: "G-RMD44PBE84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);