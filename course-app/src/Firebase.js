import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAoU3NCjB0K_aZBAEzDhgrnadiLM4iR9Wk",
  authDomain: "fitness-pro-db2af.firebaseapp.com",
  databaseURL: "https://fitness-pro-db2af-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-pro-db2af",
  storageBucket: "fitness-pro-db2af.appspot.com",
  messagingSenderId: "617400126781",
  appId: "1:617400126781:web:fec3da9e068a209c284954"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app
