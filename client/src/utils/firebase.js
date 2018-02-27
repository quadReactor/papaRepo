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
    return firebaseAuth.signInWithPopup(provider).then(firebaseAuth.currentUser).catch(error => ({
      errorCode: error.code,
      errorMessage: error.message,
    }));
  },

  logoutUser: () => firebaseAuth.signOut().then(() => ({
    success: 1,
    message: 'logout',
  })),

  fetchUser: () => new Promise((resolve, reject) => {
    const unsub = firebaseAuth.onAuthStateChanged((user) => {
      unsub();
      resolve(user);
    }, (error) => {
      reject(error);
    });
  }),
};

export default FireBaseTools;
