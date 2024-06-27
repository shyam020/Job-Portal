// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGJ3CN1DMCRvVHS7D0fV38PwEZmpm4uWI",
  authDomain: "online-job-portal-12ea5.firebaseapp.com",
  projectId: "online-job-portal-12ea5",
  storageBucket: "online-job-portal-12ea5.appspot.com",
  messagingSenderId: "29076634768",
  appId: "1:29076634768:web:86374c10f062a2b8a9ac15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db};