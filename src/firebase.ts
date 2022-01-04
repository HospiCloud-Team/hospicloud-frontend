import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "hospicloud.firebaseapp.com",
  projectId: "hospicloud",
  storageBucket: "hospicloud.appspot.com",
  messagingSenderId: "1034323579143",
  appId: "1:1034323579143:web:730715ad0de595ad3a75a2",
  measurementId: "G-9B73DJQSTQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
