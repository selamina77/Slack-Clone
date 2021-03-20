import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMTWatOMBNq03My4wXEZaOYhRcGqnx-60",
    authDomain: "slack-clone-d6ddb.firebaseapp.com",
    projectId: "slack-clone-d6ddb",
    storageBucket: "slack-clone-d6ddb.appspot.com",
    messagingSenderId: "298864359422",
    appId: "1:298864359422:web:bd2ed8e3b1cd1462f3f2af",
    measurementId: "G-Q7MVXSBT4F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;