// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhVXKMwbQj02oCimxaQ62AF2puFNK13pM",
  authDomain: "ecommercecoderhouse-693b1.firebaseapp.com",
  projectId: "ecommercecoderhouse-693b1",
  storageBucket: "ecommercecoderhouse-693b1.appspot.com",
  messagingSenderId: "626038545052",
  appId: "1:626038545052:web:ec717f82c7d0ba514beb59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);