import firebase from 'firebase';
import { FIREBASE_CONFIG } from './../../../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();

const FireBaseTools = {

  getProvider: (provider) => {
    switch (provider) {
      case 'github':
        return new firebase.auth.GithubAuthProvider();
      case 'google':
        return new firebase.auth.GoogleAuthProvider();
      default:
        throw new Error('Provider is not supported!!!');
    }
  },

  loginWithProvider: (p) => {
    const provider = FireBaseTools.getProvider(p);
    return firebaseAuth.signInWithPopup(provider).then(firebase.auth().currentUser).catch(error => ({
      errorCode: error.code,
      errorMessage: error.message,
    }));
  },

  logoutUser: () => firebaseAuth.signOut().then(() => ({
    success: 1,
    message: 'logout',
  })),

  // checkUser: () => {
  //   // firebase.auth().onAuthStateChanged((user) => {
  //   //   window.user = user;
  //   });
  // },

};

export default FireBaseTools;
