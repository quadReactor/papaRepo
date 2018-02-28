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
    firebaseAuth.signInWithPopup(provider)
      .then(firebase.auth().currentUser)
      .then(result => Promise.resolve(result))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message,
      }));
  },

  logoutUser: () => firebaseAuth.signOut()
    .then(console.log('in logout'))
    .then(result => Promise.resolve(result)),

};

export default FireBaseTools;
