import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDbD8B95BJI7QQHUh3dn6EkOvsg99k4IH0',
  authDomain: 'api-server-d7e3d.firebaseapp.com',
  databaseURL: 'https://api-server-d7e3d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'api-server-d7e3d',
  storageBucket: 'api-server-d7e3d.appspot.com',
  messagingSenderId: '716065194705',
  appId: '1:716065194705:web:0c96783a04af45a93f3bf0',
  measurementId: 'G-LSNZ5Y27M7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getFirestore(app)
