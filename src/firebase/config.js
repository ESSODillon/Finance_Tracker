import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWXBlDkdTb5eNaVMWltkiQrrkoPSJ8xNA",
  authDomain: "mymoney-d5e4b.firebaseapp.com",
  projectId: "mymoney-d5e4b",
  storageBucket: "mymoney-d5e4b.appspot.com",
  messagingSenderId: "120980842084",
  appId: "1:120980842084:web:4b8d16d8ebc33c3629a171",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
