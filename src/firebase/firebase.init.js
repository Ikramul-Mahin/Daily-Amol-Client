// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLwXcej_82xN2-8c5buhcMshRw_0lNeKA",
    authDomain: "daily-amol-client.firebaseapp.com",
    projectId: "daily-amol-client",
    storageBucket: "daily-amol-client.appspot.com",
    messagingSenderId: "28344736829",
    appId: "1:28344736829:web:f28d5aea8fd02b5ea2de54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;