// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASVm-rKRdQqUA43ECJ31yMYeAJ3gDnzNo",
  authDomain: "pantrytracker-d4fbe.firebaseapp.com",
  projectId: "pantrytracker-d4fbe",
  storageBucket: "pantrytracker-d4fbe.appspot.com",
  messagingSenderId: "21047209538",
  appId: "1:21047209538:web:33ba094a2d85d87e1787db",
  measurementId: "G-WXCT4NT4RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { app, firestore};