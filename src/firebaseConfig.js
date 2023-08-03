// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
      apiKey: "AIzaSyBCExZp5vK3Mo1RTiUS5bVl4OVatYy_kvw",
    authDomain: "typing-speed-test-44f80.firebaseapp.com",
    projectId: "typing-speed-test-44f80",
    storageBucket: "typing-speed-test-44f80.appspot.com",
    messagingSenderId: "958077196154",
    appId: "1:958077196154:web:5ad33533dd6f862d85a8c3",
    measurementId: "G-CMYMV93VN7"
}

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebaseApp.firestore();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export {auth, db}
