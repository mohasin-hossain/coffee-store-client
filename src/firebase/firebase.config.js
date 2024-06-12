// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOYiXeQvplPhLmnQ_Q1ySr_YLK0qahn2A",
  authDomain: "coffee-store-auth-f2528.firebaseapp.com",
  projectId: "coffee-store-auth-f2528",
  storageBucket: "coffee-store-auth-f2528.appspot.com",
  messagingSenderId: "993775963904",
  appId: "1:993775963904:web:75041cc004c89ca4152de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;