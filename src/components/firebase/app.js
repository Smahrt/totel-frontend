import firebase from 'firebase/compat/app';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyDCIMisRqxjdbBhFRtt1UMP4AZNNljb3v8",
    authDomain: "metoospace-cf8b8.firebaseapp.com",
    projectId: "metoospace-cf8b8",
    storageBucket: "metoospace-cf8b8.appspot.com",
    messagingSenderId: "446579819584",
    appId: "1:446579819584:web:4c33abbf4de4c9b3694ba5",
    measurementId: "G-86ZD4B91Y9"
}
export const createFirebaseApp = () => firebase.initializeApp(config);