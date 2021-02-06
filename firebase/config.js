import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_J54qsCPPmyyeNK_OQJBTKrxDGEpbdyg",
    authDomain: 'myday-b93b4.firebaseapp.com',
    databaseURL: 'https://myday-b93b4.firebaseio.com',
    projectId: 'myday-b93b4',
    storageBucket: 'myday-b93b4.appspot.com',
    messagingSenderId: '26219097559',
    appId: '1:26219097559:web:934c1d08cdd2e330ddef92',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };