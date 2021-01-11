import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDE0gAGnCYNE1_S_3nto4I5QEHGOHbn91g",
  authDomain: "snapchat-clone-f8f84.firebaseapp.com",
  projectId: "snapchat-clone-f8f84",
  storageBucket: "snapchat-clone-f8f84.appspot.com",
  messagingSenderId: "102452438707",
  appId: "1:102452438707:web:2812d7c0eb7c2dba0632c6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
