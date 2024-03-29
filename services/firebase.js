import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//For authentication
//import { useAuthState } from 'react-firebase-hooks/auth';

//For DB Queries
//import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function initFirebase() {
  
  if (!firebase.apps.length) {
    var firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID
    };
    firebase.initializeApp(firebaseConfig);
  }

}

// To initialize firebase
// import initFirebase from 'services/firebase';
// initFirebase();