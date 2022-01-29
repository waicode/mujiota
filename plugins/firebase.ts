import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

const apps = getApps()
let firebaseApp = null
if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig)
} else {
  // eslint-disable-next-line prefer-destructuring
  firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp)
export { db }
