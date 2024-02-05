import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAZ3wdQe-CIWY7Vg_2cmKMK9DGBnvA7eZg",
  authDomain: "e-libaray-49a8c.firebaseapp.com",
  projectId: "e-libaray-49a8c",
  storageBucket: "e-libaray-49a8c.appspot.com",
  messagingSenderId: "361587900463",
  appId: "1:361587900463:web:375521dbda7227ddbe86da"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
