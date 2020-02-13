import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVr1EPGdyiF4ThxHDVUak2yHY9tjF4pyM",
    authDomain: "crwn-db-2419a.firebaseapp.com",
    databaseURL: "https://crwn-db-2419a.firebaseio.com",
    projectId: "crwn-db-2419a",
    storageBucket: "crwn-db-2419a.appspot.com",
    messagingSenderId: "787061324324",
    appId: "1:787061324324:web:4c1471e414b993994a76b1",
    measurementId: "G-Z172JJXFPS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;