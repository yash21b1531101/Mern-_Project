// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-22613.firebaseapp.com",
  projectId: "mern-estate-22613",
  storageBucket: "mern-estate-22613.appspot.com",
  messagingSenderId: "669319883377",
  appId: "1:669319883377:web:b3325b402235efe02dc9d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
