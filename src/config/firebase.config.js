import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_KEY,
  authDomain: 'mylove-bitacoras.firebaseapp.com',
  projectId: 'mylove-bitacoras',
  storageBucket: 'mylove-bitacoras.appspot.com',
  messagingSenderId: '227992067733',
  appId: '1:227992067733:web:99e5ac7b86273b67d0059c',
  measurementId: 'G-C3LNBF7L8Q'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
/* const analytics = getAnalytics(app) */

export {
  db, doc, setDoc, getDoc, collection, getDocs
}
