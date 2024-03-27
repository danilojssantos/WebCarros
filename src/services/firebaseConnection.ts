
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSedYNVhb_2mQrtfinzKQ8rE1yyxeR7uE",
  authDomain: "webcarros-3bd84.firebaseapp.com",
  projectId: "webcarros-3bd84",
  storageBucket: "webcarros-3bd84.appspot.com",
  messagingSenderId: "784929201488",
  appId: "1:784929201488:web:e7a53249448d5b5704a055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export{db,auth,storage};
