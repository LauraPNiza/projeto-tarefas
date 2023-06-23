import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAl6q_l16fbqFazYhU7jEGVyqPRXQxCLM4",
  authDomain: "tarefasplus-6001e.firebaseapp.com",
  projectId: "tarefasplus-6001e",
  storageBucket: "tarefasplus-6001e.appspot.com",
  messagingSenderId: "360143591941",
  appId: "1:360143591941:web:f2c4baf722db2488a45a6c"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db}