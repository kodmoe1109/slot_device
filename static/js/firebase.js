import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCULELKDjE7kWsNMVJKr5LmPLmVhWa4y1s",
    authDomain: "exhibition-prototype-01.firebaseapp.com",
    databaseURL: "https://exhibition-prototype-01-default-rtdb.firebaseio.com",
    projectId: "exhibition-prototype-01",
    storageBucket: "exhibition-prototype-01.appspot.com",
    messagingSenderId: "22848181911",
    appId: "1:22848181911:web:f6ec831bd5b5bb7accbbd2",
    measurementId: "G-00RJCEEB6C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

export { firebase, auth, db, storage };