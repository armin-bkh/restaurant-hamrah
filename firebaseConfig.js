// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTTfpQVQDntEETV6mqrg09Wna4j7sqyXk",
  authDomain: "restoyar.firebaseapp.com",
  projectId: "restoyar",
  storageBucket: "restoyar.appspot.com",
  messagingSenderId: "775150996667",
  appId: "1:775150996667:web:d20be32ce806db48572d9e",
  measurementId: "G-8HMH0YZ6N5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
