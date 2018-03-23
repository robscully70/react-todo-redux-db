import firebase from 'firebase';

// Initialize Firebase
 try {
    var config = {
        apiKey: "AIzaSyDIGF6QRRWEkYpNul-fKlMn7S4TQha3_vg",
        authDomain: "todo-app-4cad7.firebaseapp.com",
        databaseURL: "https://todo-app-4cad7.firebaseio.com",
        projectId: "todo-app-4cad7",
        storageBucket: "todo-app-4cad7.appspot.com",
        messagingSenderId: "130621573006"
      };
    firebase.initializeApp(config);
 } catch (e) {

 }

export var firebaseRef = firebase.database().ref();
export default firebase;