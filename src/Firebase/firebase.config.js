// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZGtRbNanWlrHwT9jov31ZRVYVGms4_m4",
  authDomain: "visa-navigator-6e2d7.firebaseapp.com",
  projectId: "visa-navigator-6e2d7",
  storageBucket: "visa-navigator-6e2d7.firebasestorage.app",
  messagingSenderId: "1034409279046",
  appId: "1:1034409279046:web:8161d4f4f52d3c2a4dd447",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
