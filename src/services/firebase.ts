// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  orderBy,
  query as q,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8wzdy2q5Ty0iJ3-vIKg9ycfhS-yKxCz8",
  authDomain: "fleet-app-21c1d.firebaseapp.com",
  projectId: "fleet-app-21c1d",
  storageBucket: "fleet-app-21c1d.appspot.com",
  messagingSenderId: "269675770256",
  appId: "1:269675770256:web:d0458c144f1606b3ca0315",
  measurementId: "G-D3M0RREPT0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

//firebase utils
const authenticateUserAnonymously = async () => {
  try {
    await signInAnonymously(auth);
  } catch (error: any) {}
};

const signOutAnonymously = async () => {
  try {
    auth.currentUser?.delete();
    await signOut(auth);
  } catch (error: any) {}
};

const collectionRef = collection(db, "usersCollection");

const query = q(collectionRef, orderBy("createdAt", "desc"));

const writeNewMessage = async (id: string, data: Object) => {
  if (!id) return;

  const userRef = doc(db, "supportChat", id);
  try {
    await setDoc(userRef, data, { merge: true });
  } catch (error: any) {}
};
export {
  db,
  auth,
  collectionRef,
  query,
  authenticateUserAnonymously,
  signOutAnonymously,
  writeNewMessage,
};
