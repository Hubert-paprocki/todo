// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgLttFh3XEC45l_aHZQsVMd96DcJCJb94",
  authDomain: "whatstheplan-hp.firebaseapp.com",
  projectId: "whatstheplan-hp",
  storageBucket: "whatstheplan-hp.appspot.com",
  messagingSenderId: "805288612708",
  appId: "1:805288612708:web:8063a094133fa59a26a071",
  measurementId: "G-12T590SFPN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
