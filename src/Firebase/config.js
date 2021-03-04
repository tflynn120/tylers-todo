import firebase from 'firebase';
// import 'firebase/firestore'
// import 'firebase/auth';

  // Your web app's Firebase configuration
  const firebaseApp =  firebase.initializeApp ({
    apiKey: "AIzaSyCfoOe7kvLUCNr19yseMgjTTfogv70k3qU",
    authDomain: "tf-todo-7ca0d.firebaseapp.com",
    databaseURL: "https://tf-todo-7ca0d.firebaseio.com",
    projectId: "tf-todo-7ca0d",
    storageBucket: "tf-todo-7ca0d.appspot.com",
    messagingSenderId: "1047018296336",
    appId: "1:1047018296336:web:d94a47019e8d036e5fa695"
  });

  const db = firebaseApp.firestore();
  export default db;