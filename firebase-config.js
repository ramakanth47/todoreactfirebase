import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCj3E9hECH-k_BpMRXhdkmXorWTbC9vYgo",
    authDomain: "jdbcapp-8e1dd.firebaseapp.com",
    projectId: "jdbcapp-8e1dd",
    storageBucket: "jdbcapp-8e1dd.appspot.com",
    messagingSenderId: "990043415289",
    appId: "1:990043415289:web:37fe872acb3d648275f828"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
