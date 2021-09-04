import * as firebase from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBMnLus_n5OakNaELs1FXYRJCiODSVHrcs',

  authDomain: 'alumni-management-4567e.firebaseapp.com',

  projectId: 'alumni-management-4567e',

  storageBucket: 'alumni-management-4567e.appspot.com',

  messagingSenderId: '177082903503',

  appId: '1:177082903503:web:567c3f104ae24fac9f80ba',

  measurementId: 'G-JYC6NDYKEV',
}

const app = !firebase.getApps()?.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.getApps()[0]

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export default app
