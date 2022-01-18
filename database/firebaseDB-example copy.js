import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAl_-THToODN-plxu3Em0Hozq_yAGwPOpY",
  authDomain: "todo-ryan-71f11.firebaseapp.com",
  projectId: "todo-ryan-71f11",
  storageBucket: "todo-ryan-71f11.appspot.com",
  messagingSenderId: "307359791756",
  appId: "1:307359791756:web:202ab4b4598573c510d9a9"
};

firebase.initializeApp(firebaseConfig);
export default firebase;