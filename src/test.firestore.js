import {firebaseApp} from './firebase.js';
import firebase from 'firebase';


const app = firebaseApp;
const db = firebase.firestore(app);


async function FirebaseData(userID){
    // now async 
    let username = null;
    var docRef = db.collection("users").doc(userID);

    let user = await docRef.get().then(function(doc) { // .get returns a promise -> give it a function that doesnt execute right awat it doesnt execute right away
        // awaiting the promise , .then() chaining a promising onto it, executes our function, 
        if (doc.exists) {
            console.log("Document exist");
            console.log(doc.data());
            console.log(doc.data().name);
            username = doc.data().name;
           return username;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
return user;    
    
}

export default FirebaseData;




