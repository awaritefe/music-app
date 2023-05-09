import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWYGPBuGe5Q6cFiSybLlCXZnndFElmMgI',
  authDomain: 'music-592c7.firebaseapp.com',
  projectId: 'music-592c7',
  storageBucket: 'music-592c7.appspot.com',
  messagingSenderId: '327698475515',
  appId: '1:327698475515:web:798f17e4ea134c4df5c35e'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
