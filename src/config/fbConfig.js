import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDRQ6tt_tnNSHF81RGN4UBqAE-eJrxrZpc",
    authDomain: "manage-projects-a68ab.firebaseapp.com",
    databaseURL: "https://manage-projects-a68ab.firebaseio.com",
    projectId: "manage-projects-a68ab",
    storageBucket: "manage-projects-a68ab.appspot.com",
    messagingSenderId: "528956846328"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots: true
  })

  export default firebase;