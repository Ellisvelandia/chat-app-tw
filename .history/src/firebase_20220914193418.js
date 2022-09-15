// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArN-aIeYcvKr-WdaDeH9DIHVln_F8JEI8",
  authDomain: "chat-app-tw-e9553.firebaseapp.com",
  projectId: "chat-app-tw-e9553",
  storageBucket: "chat-app-tw-e9553.appspot.com",
  messagingSenderId: "672762240739",
  appId: "1:672762240739:web:6a72872c95dd80343bafd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const auth = getAuth(app);
