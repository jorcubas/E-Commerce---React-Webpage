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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      console.log(displayName);
      console.log(email);
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName, 
          email, 
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  };



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;