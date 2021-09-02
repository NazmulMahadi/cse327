import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBMnLus_n5OakNaELs1FXYRJCiODSVHrcs',

  authDomain: 'alumni-management-4567e.firebaseapp.com',

  projectId: 'alumni-management-4567e',

  storageBucket: 'alumni-management-4567e.appspot.com',

  messagingSenderId: '177082903503',

  appId: '1:177082903503:web:567c3f104ae24fac9f80ba',

  measurementId: 'G-JYC6NDYKEV',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
