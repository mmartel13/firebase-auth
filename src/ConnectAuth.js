// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRKeO836Awrpq9wwOrJrNtxvSzuNHAyqw",
  authDomain: "fir-auth-mm.firebaseapp.com",
  projectId: "fir-auth-mm",
  storageBucket: "fir-auth-mm.appspot.com",
  messagingSenderId: "1051894121700",
  appId: "1:1051894121700:web:51e97c729272f6c2b418f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);