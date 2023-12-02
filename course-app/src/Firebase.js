import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Конфиг для фаербейса 

const fireBaseConfig = {
        apiKey: "AIzaSyDcReZcgoHpj1zSdaoE77ofcE1ytDl8r6M",
        authDomain: "fitnes-pro-df342.firebaseapp.com",
        databaseURL: "https://fitnes-pro-df342-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "fitnes-pro-df342",
        storageBucket: "fitnes-pro-df342.appspot.com",
        messagingSenderId: "299081918646",
        appId: "1:299081918646:web:7f792908a95bdb967b9e17"
}

const app = initializeApp(fireBaseConfig)

export const auth = getAuth(app)
export default app