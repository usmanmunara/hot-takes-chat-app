import firebase from 'firebase';

const config = {
  // apiKey: 'AIzaSyAhWMYWhBG2UvsNMZ-qVLbaqVZ5aTzwsNU',
  // authDomain: 'hot-takes.firebaseapp.com',
  // databaseURL: 'https://hot-takes.firebaseio.com',
  // storageBucket: 'hot-takes.appspot.com',
  // messagingSenderId: '823384132241'
  apiKey: 'AIzaSyDJM2pwZ0QHLwaUjfCIjng_NlU8EoHdKOE',
  authDomain: 'hot-takes-chat-app.firebaseapp.com',
  databaseURL: 'https://hot-takes-chat-app.firebaseio.com',
  projectId: 'hot-takes-chat-app',
  storageBucket: 'hot-takes-chat-app.appspot.com',
  messagingSenderId: '943607913711'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
