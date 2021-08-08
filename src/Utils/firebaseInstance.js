import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import 'firebase/analytics';

import config from './firebaseConfig';

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
