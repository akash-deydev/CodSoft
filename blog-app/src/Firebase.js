import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN4GNDHbt2Ks7Dn9ZTahck1WnbM2uculY",
  authDomain: "my-blog-app-b3db6.firebaseapp.com",
  projectId: "my-blog-app-b3db6",
  storageBucket: "my-blog-app-b3db6.appspot.com",
  messagingSenderId: "738735888535",
  appId: "1:738735888535:web:c3861ec1000472b06171d2",
  measurementId: "G-70YF963PN1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();

export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);
