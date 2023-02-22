import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyC_3VOUR4nmwZmU3gxC0X_Mes8xbBzu_zU",
  authDomain: "linkedin-clone-de19b.firebaseapp.com",
  projectId: "linkedin-clone-de19b",
  storageBucket: "linkedin-clone-de19b.appspot.com",
  messagingSenderId: "882921629213",
  appId: "1:882921629213:web:38c8784ff963d9866288f4",
  measurementId: "G-8G6BREQSFD"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()
const db=firebaseApp.firestore()



export {db,auth}