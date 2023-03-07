import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhOV4tgF9uy0pRwBPsiCQbaX6PtBQZalY",
  authDomain: "lcdal-3254c.firebaseapp.com",
  databaseURL: "https://lcdal-3254c-default-rtdb.firebaseio.com",
  projectId: "lcdal-3254c",
  storageBucket: "lcdal-3254c.appspot.com",
  messagingSenderId: "456906009075",
  appId: "1:456906009075:web:05bb4bb8aaac95af080a86",
  measurementId: "G-2H7XTB8H65"
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app)

export { projectFirestore };