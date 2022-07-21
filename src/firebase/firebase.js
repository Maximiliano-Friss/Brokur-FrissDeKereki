import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAPc5RmiMjGtjViNBUmG8vpUVBnRixjmZI",
    authDomain: "brokur-coderhouse.firebaseapp.com",
    projectId: "brokur-coderhouse",
    storageBucket: "brokur-coderhouse.appspot.com",
    messagingSenderId: "899041759861",
    appId: "1:899041759861:web:1736aac86d549734f91e3c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);