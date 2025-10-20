// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_EP3ExSine5Okh8f-UCQtqeWHBHv0SWs",
  authDomain: "shopopedia-59d9b.firebaseapp.com",
  projectId: "shopopedia-59d9b",
  storageBucket: "shopopedia-59d9b.firebasestorage.app",
  messagingSenderId: "703405825073",
  appId: "1:703405825073:web:64aefa41ff7ff31f814910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { app as firebaseApp, db };