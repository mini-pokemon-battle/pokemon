import firebase from 'firebase/app'
import 'firebase/firestore'
require('dotenv').config


var firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECT,
    storageBucket: process.envBUCKET,
    messagingSenderId: process.env.OKOK,
    appId: process.env.appID
  };

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db