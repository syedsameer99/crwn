import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBSEM-JNIo-BqTS5stUdM_xRvtTX5KjB9Q",
  authDomain: "crwn-db-4a4c9.firebaseapp.com",
  databaseURL: "https://crwn-db-4a4c9.firebaseio.com",
  projectId: "crwn-db-4a4c9",
  storageBucket: "crwn-db-4a4c9.appspot.com",
  messagingSenderId: "621070002219",
  appId: "1:621070002219:web:710d803672e9539f87a26e",
  measurementId: "G-977KPMY7VF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
