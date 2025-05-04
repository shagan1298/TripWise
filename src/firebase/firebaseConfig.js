import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove, set, update } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBNBwG1GdHJOG_Fegu_VQ623A6VCda4tCc",
    authDomain: "travel-budget-planning-tool.firebaseapp.com",
    databaseURL: "https://travel-budget-planning-tool-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "travel-budget-planning-tool",
    storageBucket: "travel-budget-planning-tool.firebasestorage.app",
    messagingSenderId: "664684698073",
    appId: "1:664684698073:web:266ab8108cfa1cfcf521c8"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { ref, push, onValue, remove, set, update };