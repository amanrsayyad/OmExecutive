import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    apiKey: "AIzaSyCv1Jv-AiHYV8tzqZklqYo-5LgcWBlpEe4",
    authDomain: "om-executive-3e34d.firebaseapp.com",
    projectId: "om-executive-3e34d",
    storageBucket: "om-executive-3e34d.appspot.com",
    messagingSenderId: "105596112750",
    appId: "1:105596112750:web:029bbac5baacfb0afdfb7f",
    measurementId: "${config.measurementId}"
});

var db = firebaseApp.firestore();

export { db };