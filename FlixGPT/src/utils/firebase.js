import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "flixgpt-s.firebaseapp.com",
  projectId: "flixgpt-s",
  storageBucket: "flixgpt-s.appspot.com",
  messagingSenderId: "632185850931",
  appId: "1:632185850931:web:7018d7a53dd411df2d6746",
  measurementId: "G-2VW8YMH5HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage }; 

export const auth = getAuth();
