import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2sdeU0pooLqNjjskmBpf0Pw5j32PMjTA",
    authDomain: "clone-9a4b7.firebaseapp.com",
    projectId: "clone-9a4b7",
    storageBucket: "clone-9a4b7.appspot.com",
    messagingSenderId: "749465910719",
    appId: "1:749465910719:web:23488b07cfb307ea97750a",
    measurementId: "G-61BL98YSPV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth };