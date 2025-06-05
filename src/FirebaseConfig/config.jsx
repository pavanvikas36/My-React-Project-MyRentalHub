import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCAsUnRtG5Z_30cYfwBvrTLPpMpms0F6Tg",
  authDomain: "react-project-e5f98.firebaseapp.com",
  projectId: "react-project-e5f98",
  storageBucket: "react-project-e5f98.firebasestorage.app",
  messagingSenderId: "638095784831",
  appId: "1:638095784831:web:94e7871eee025ec219b84a",
  measurementId: "G-J7CDRC4632"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const db = getFirestore(app)