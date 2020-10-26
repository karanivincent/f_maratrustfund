import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyA49tnO7gpvscIRPhA45jTFZ-EYvvOl9e0",
    authDomain: "maratrustfunds.firebaseapp.com",
    databaseURL: "https://maratrustfunds.firebaseio.com",
    projectId: "maratrustfunds",
    storageBucket: "maratrustfunds.appspot.com",
    messagingSenderId: "992035230746",
    appId: "1:992035230746:web:f80faaa3e922217bd92da3",
    measurementId: "G-C44GKXCKEV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



export default db;