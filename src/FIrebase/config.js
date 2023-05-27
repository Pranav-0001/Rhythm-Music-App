import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCP4tQj8QzshouOZ4qehJ81miRV2QbaF1w",
    authDomain: "rhythm-afc9d.firebaseapp.com",
    projectId: "rhythm-afc9d",
    storageBucket: "rhythm-afc9d.appspot.com",
    messagingSenderId: "1066326081346",
    appId: "1:1066326081346:web:d6bf308b9272f60e4792db",
    measurementId: "G-Z0XX802Z39"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app)
  const storage = getStorage(app)

  export {auth,db,storage}