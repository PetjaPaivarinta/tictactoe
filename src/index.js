import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import firebase from "firebase/compat";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB-mZSczIvhhcJ8b6y3_ctUaEp8hVGVFyI",
        authDomain: "tictactoe-2f4a0.firebaseapp.com",
        databaseURL: "https://tictactoe-2f4a0-default-rtdb.europe-west1.firebasedatabase.app/",
        projectId: "tictactoe-2f4a0",
        storageBucket: "tictactoe-2f4a0.appspot.com",
        messagingSenderId: "271571749323",
        appId: "1:271571749323:web:1ac2b0efe058fe5fcbce4e"
});

    let playerId
    let playerRef
    const db = getDatabase(firebaseApp);
    const auth = getAuth();
    signInAnonymously(auth)
        .then(() => {
            console.log("Signed in");
            playerRef = firebase.database().ref(`players/${playerId}`);
            playerId = playerRef.push().key;

            playerRef.set({
                name: "Player",
            }).then(r => {
                console.log("Player created");
            });
            // Signed in..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ...
        });
    function generateInviteCode() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    // make a chat room

