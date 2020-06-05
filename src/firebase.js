import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


const config = {
    apiKey: "AIzaSyCyh-XJah9G2l5K4OkXjP6ud9UopVRTtio",
    authDomain: "sports-club-70237.firebaseapp.com",
    databaseURL: "https://sports-club-70237.firebaseio.com",
    projectId: "sports-club-70237",
    storageBucket: "sports-club-70237.appspot.com",
    messagingSenderId: "1053249615904",
    appId: "1:1053249615904:web:d9df295f5430589d1ea445",
    measurementId: "G-QEK3H9KDLG"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}