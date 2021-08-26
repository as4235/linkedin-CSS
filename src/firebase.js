import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxsnLT8z8ZlBf60arOiyzD8IlbFWBOSY4",
  authDomain: "linkedin-42169.firebaseapp.com",
  projectId: "linkedin-42169",
  storageBucket: "linkedin-42169.appspot.com",
  messagingSenderId: "422304662679",
  appId: "1:422304662679:web:642017082b28e61cc595d2",
  measurementId: "G-E6J30FQ58C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };