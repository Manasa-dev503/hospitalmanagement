// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDP9SxyVvC1fpEyOv-GXWLdLLrv78rPKOs",
  authDomain: "socialmedia-41471.firebaseapp.com",
  projectId: "socialmedia-41471",
  storageBucket: "socialmedia-41471.appspot.com",
  messagingSenderId: "1019007902672",
  appId: "1:1019007902672:web:635922cefd9665970f4fd5",
  measurementId: "G-YXH73LP5T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);