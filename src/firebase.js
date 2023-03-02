// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAALeArrRjXYWNVyWjOmLYrwQRo_0aKqvk",
	authDomain: "todoapp-56a40.firebaseapp.com",
	projectId: "todoapp-56a40",
	storageBucket: "todoapp-56a40.appspot.com",
	messagingSenderId: "692329167107",
	appId: "1:692329167107:web:cd43a0e5f321ae1953d136",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
