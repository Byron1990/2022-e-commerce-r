// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtmyJsWWzgxo1O3i7nNIdPImeXIYfYW2I",
  authDomain: "my-project-1535778205247.firebaseapp.com",
  projectId: "my-project-1535778205247",
  storageBucket: "my-project-1535778205247.appspot.com",
  messagingSenderId: "174571872846",
  appId: "1:174571872846:web:ea54ebf09512e278bf991f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
