import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC3FwUIMIeLKuMvX14-29isgvhqNIA7GoA",
    authDomain: "ciudad-sin-techo.firebaseapp.com",
    databaseURL: "https://ciudad-sin-techo.firebaseio.com",
    projectId: "ciudad-sin-techo",
    storageBucket: "ciudad-sin-techo.appspot.com",
    messagingSenderId: "624450653605",
    appId: "1:624450653605:web:e3d4500b2847b54763ac4c",
    measurementId: "G-EWPX6MG2D4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}



