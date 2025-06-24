// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn4X6VIs9Lf3Iqxdpl3w-mJIIPWZa-Jzw",
  authDomain: "sortify-cd06d.firebaseapp.com",
  projectId: "sortify-cd06d",
  storageBucket: "sortify-cd06d.firebasestorage.app",
  messagingSenderId: "626903809039",
  appId: "1:626903809039:web:b5b8ce3b8eecc5ccafb77a",
  measurementId: "G-MJHHV5D79X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);