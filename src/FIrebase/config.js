import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.react_app_key,
    authDomain: "rhythm-afc9d.firebaseapp.com",
    projectId: "rhythm-afc9d",
    storageBucket: "rhythm-afc9d.appspot.com",
    messagingSenderId: "1066326081346",
    appId: process.env.react_app_api_id,
    measurementId: "G-Z0XX802Z39"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app)
  const storage = getStorage(app)

  export {auth,db,storage}