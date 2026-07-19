// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk7qBrOnqOfSHJWNHmB-f73wusrbHHAP8",
  authDomain: "netflix-gpt-29b15.firebaseapp.com",
  projectId: "netflix-gpt-29b15",
  storageBucket: "netflix-gpt-29b15.firebasestorage.app",
  messagingSenderId: "825456432451",
  appId: "1:825456432451:web:caff1b2745f943a918cbf6",
  measurementId: "G-1PLVJH0BZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);