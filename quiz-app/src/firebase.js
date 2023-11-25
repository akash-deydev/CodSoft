import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAseP0DcMmxEawX6OcOxaylr-bwQUPwoQs",
  authDomain: "quiz-app-5f41d.firebaseapp.com",
  projectId: "quiz-app-5f41d",
  storageBucket: "quiz-app-5f41d.appspot.com",
  messagingSenderId: "340339360831",
  appId: "1:340339360831:web:c70bbf1732fe0148d4648a",
  measurementId: "G-6EFMDQTJLN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
