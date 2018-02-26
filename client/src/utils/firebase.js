import firebase from 'firebase';
import { FIREBASE_CONFIG } from './../../../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
// export const firebaseDb = firebaseApp.database();

const FireBaseTools = {

  /**
   * Return an instance of a firebase auth provider based on the provider string.
   *
   * @param provider
   * @returns {firebase.auth.AuthProvider}
   */
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

  /**
   * Login with provider => p is provider "email", "facebook", "github", "google", or "twitter"
   * Uses Popup therefore provider must be an OAuth provider. EmailAuthProvider will throw an error
   *
   * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
   */
  loginWithProvider: (p) => {
    const provider = FireBaseTools.getProvider(p);
    return firebaseAuth.signInWithPopup(provider).then(firebaseAuth.currentUser).catch(error => ({
      errorCode: error.code,
      errorMessage: error.message,
    }));
  },
  /**
   * Sign the user out
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  logoutUser: () => firebaseAuth.signOut().then(() => ({
    success: 1,
    message: 'logout',
  })),

  /**
   * Send an account email verification message for the currently logged in user
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  sendEmailVerification: () => firebaseAuth.currentUser.sendEmailVerification().then(() => ({
    message: 'Email sent',
  }), error => ({
    errorCode: error.code,
    errorMessage: error.message,
  })),

//   /**
//    * Get the firebase database reference.
//    *
//    * @param path {!string|string}
//    * @returns {!firebase.database.Reference|firebase.database.Reference}
//    */
//     getDatabaseReference: path => firebaseDb.ref(path),
};

export default FireBaseTools;


/**
   * Retrieve the current user (Promise)
   * @returns {Promise}
   */
// fetchUser: () => new Promise((resolve, reject) => {
//   const unsub = firebaseAuth.onAuthStateChanged((user) => {
//     unsub();
//     resolve(user);
//   }, (error) => {
//     reject(error);
//   });
// })
