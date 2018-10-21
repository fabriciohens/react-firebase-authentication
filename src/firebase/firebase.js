import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: 'AIzaSyBarTM0M2PxijZBCu4RnyvSrmiTM7JQSPI',
  authDomain: 'reactfirebaseauth487.firebaseapp.com',
  databaseURL: 'https://reactfirebaseauth487.firebaseio.com',
  projectId: 'reactfirebaseauth487',
  storageBucket: 'reactfirebaseauth487.appspot.com',
  messagingSenderId: '513668637643'
}

const devConfig = {
  apiKey: 'AIzaSyBarTM0M2PxijZBCu4RnyvSrmiTM7JQSPI',
  authDomain: 'reactfirebaseauth487.firebaseapp.com',
  databaseURL: 'https://reactfirebaseauth487.firebaseio.com',
  projectId: 'reactfirebaseauth487',
  storageBucket: 'reactfirebaseauth487.appspot.com',
  messagingSenderId: '513668637643'
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };