// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnERPwQtu_HMSH6foQcdMrbzg7zEOFQX0",
  authDomain: "hotelbooking-ddf51.firebaseapp.com",
  projectId: "hotelbooking-ddf51",
  storageBucket: "hotelbooking-ddf51.appspot.com",
  messagingSenderId: "3720775267",
  appId: "1:3720775267:web:292dff2f4e958618521a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app