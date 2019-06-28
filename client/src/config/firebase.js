import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBMgzblqqn56mhhq_HMZtT-tNlRZ1eZCiQ",
    authDomain: "group-project-pokemon.firebaseapp.com",
    databaseURL: "https://group-project-pokemon.firebaseio.com",
    projectId: "group-project-pokemon",
    storageBucket: "group-project-pokemon.appspot.com",
    messagingSenderId: "229416045485",
    appId: "1:229416045485:web:7f268df45e8a2e90"
  };

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db