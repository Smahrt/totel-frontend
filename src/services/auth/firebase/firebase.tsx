import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyDCIMisRqxjdbBhFRtt1UMP4AZNNljb3v8",
	// databaseURL: "https://metoospace.firebaseio.com",
	authDomain: "metoospace-cf8b8.firebaseapp.com",
	projectId: "metoospace-cf8b8",
	storageBucket: "metoospace-cf8b8.appspot.com",
	messagingSenderId: "446579819584",
	appId: "1:446579819584:web:4c33abbf4de4c9b3694ba5",
	measurementId: "G-86ZD4B91Y9"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}else {
	firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
