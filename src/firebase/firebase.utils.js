import { firestore } from './index'
import { doc, getDoc, setDoc } from '@firebase/firestore'

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = getUserRef(userAuth)
  const snapShot = await getDoc(userRef)

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
}

export const converSnapshotToDocArray = (snap) => {
  const arr = []
  snap.forEach((doc) => {
    arr.push({ ...doc.data(), id: doc.id })
  })
  return arr
}

export const getUserRef = (userAuth) => {
  const userRef = doc(firestore, `users/${userAuth.uid}`)
  return userRef
}
