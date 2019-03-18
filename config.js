import React from 'react';
import firebase from 'firebase';

{/* <script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script> */}
const config = {
    apiKey: "AIzaSyC5-OuUPYpNW6kJm1qKTUjPgoyZR1UcrZs",
    authDomain: "reactapp-c89ce.firebaseapp.com",
    databaseURL: "https://reactapp-c89ce.firebaseio.com",
    projectId: "reactapp-c89ce",
    storageBucket: "reactapp-c89ce.appspot.com",
    messagingSenderId: "292007036130",
};

firebase.initializeApp(config);
   
export default firebase;