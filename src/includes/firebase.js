import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

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
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`Firebase Persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, storage, usersCollection, songsCollection, commentsCollection }
