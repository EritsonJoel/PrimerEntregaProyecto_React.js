
import {initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyDbrxWd9Upyv8gCSyClUdujqSk4rVfnexQ",
  authDomain: "miprimeraapp-cc7f1.firebaseapp.com",
  projectId: "miprimeraapp-cc7f1",
  storageBucket: "miprimeraapp-cc7f1.appspot.com",
  messagingSenderId: "666307333993",
  appId: "1:666307333993:web:b20993c1bcc7c067bf77f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

export default db;