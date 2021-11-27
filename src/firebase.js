import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAG6Wmx83-lMDYY7DUaAGvr2BNRBeEKMmA",
  authDomain: "firechat-5de4a.firebaseapp.com",
  projectId: "firechat-5de4a",
  storageBucket: "firechat-5de4a.appspot.com",
  messagingSenderId: "1000615101519",
  appId: "1:1000615101519:web:6730343ea335015c65963a",
  measurementId: "G-LVQ6T101KJ"
})

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export {db , auth}