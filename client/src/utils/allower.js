import routesMap from './../routesMap';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    return true;
  } else {
    return false
  }
});

