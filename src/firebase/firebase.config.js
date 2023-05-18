// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLg6uFhtFd0GsM3iHZJFTsMvGPuLjwUso",
  authDomain: "toy-shop-f0cfd.firebaseapp.com",
  projectId: "toy-shop-f0cfd",
  storageBucket: "toy-shop-f0cfd.appspot.com",
  messagingSenderId: "808366697614",
  appId: "1:808366697614:web:a8810873457255b10ceddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;