import * as firebase from 'firebase/app'

const isInitialize = firebase.getApps().length > 0

if (!isInitialize) {
  firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
  })
}

export default firebase