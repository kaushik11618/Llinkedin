import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_dshwvfc9col5uQspRmgslpjUxz-gER0",
  authDomain: "linkedin-9ec6f.firebaseapp.com",
  projectId: "linkedin-9ec6f",
  storageBucket: "linkedin-9ec6f.appspot.com",
  messagingSenderId: "818496012439",
  appId: "1:818496012439:web:9731e5dd60551152b7e9d2",
  measurementId: "G-H6Y57VXB97",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };
