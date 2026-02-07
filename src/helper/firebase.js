import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDL7SVPd7HQrsHTwlTtobB3IT8zKX0H1xE",
    authDomain: "greenfilter-admin.firebaseapp.com",
    databaseURL: "https://greenfilter-admin-default-rtdb.firebaseio.com",
    projectId: "greenfilter-admin",
    storageBucket: "greenfilter-admin.appspot.com",
    messagingSenderId: "504709588655",
    appId: "1:504709588655:web:2545c9770bca5c9fba965a",
    measurementId: "G-JSZNYMGH8Q"
  });


const db = getFirestore();
export {db};

  

