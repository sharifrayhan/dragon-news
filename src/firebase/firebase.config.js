// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO-5XOK_KTFZGsy4G3yZKw24iaZwtUVJo",
  authDomain: "dragon-news-c10f7.firebaseapp.com",
  projectId: "dragon-news-c10f7",
  storageBucket: "dragon-news-c10f7.appspot.com",
  messagingSenderId: "618144260656",
  appId: "1:618144260656:web:6d80a8352a41074ab483f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app