import firebase from 'firebase';

// Initialize Firebase
 try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env_STORAGE_BUCKET,
      };
    firebase.initializeApp(config);
 } catch (e) {

 }
export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;