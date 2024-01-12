import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCTvegRE18MVo3Sto-AzqSBn0nzOsJv71E",
    authDomain: "delivery-36501.firebaseapp.com",
    projectId: "delivery-36501",
    storageBucket: "delivery-36501.appspot.com",
    messagingSenderId: "1064267560791",
    appId: "1:1064267560791:web:bc9f27beba49dfb2d4f012"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {app, db, auth, storage}
