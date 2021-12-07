import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    apiKey: "AIzaSyANujmF0S-hFx_7UrClN8qfujIFS8c-Gb4",
    authDomain: "om-executive.firebaseapp.com",
    projectId: "om-executive",
    storageBucket: "om-executive.appspot.com",
    messagingSenderId: "157835338244",
    appId: "1:157835338244:web:b39172564a15036c2f8b51",
    measurementId: "G-Y0C2DV1L9Y"
});

var db = firebaseApp.firestore();

export { db };