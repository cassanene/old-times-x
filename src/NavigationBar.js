import * as React from "react";
import {useState} from "react";
import firebase from "firebase";
import {firebaseApp} from "./firebase";
import FirebaseData from "./test.firestore";
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import UserPrompt from "./Modal";

const app = firebaseApp;
const db = firebase.firestore(app);

function NavigationBar() {
  const [modalOpen, setOpen] = React.useState(false);
  const [user, setUser] = useState("Login");
  const [mainItems, setMainItems] = React.useState([
    { label: 'Home', info: { id: "/home" } },
    { label: 'Play Game', info: { id: "/game" } },
    { label: 'Leaderboard', info: { id: "/leaderboards" } },
    { label: user, info: { id: "login" } },
  ]);

  // google login in here
  function getUniqueIdentifier(item) {
    if (item.info) {
      return item.info.id;
    }
    return item.label;
  }

  function handleMainItemSelect(item) {
    setMainItems(prev =>
      setItemActive(prev, item, getUniqueIdentifier),
  );
 
  //window.location = item.info.id;
  user != "Login" && item.info.id == "login" ? setOpen(true) : item.info.id == "login" ? login() : window.location = item.info.id;

 
  }

  function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result.user);
      console.log(result.user.displayName);
      //setUser(result.user.displayName); 
      console.log("This is user ", user);
      db.collection("users").doc(result.user.uid).set({
        uid : result.user.uid,
        name : result.user.displayName,
        email : result.user.email,
    }).then(async function() {
      //var id = result.user.uid;
     // var newUser = db.collection("users").doc(result.user.uid);
      //console.log(newUser);
     // console.log("This is username " , newUser.name);
     // setUser(newUser.name);
      console.log("Document successfully written!");

      var username = await FirebaseData(result.user.uid);
      console.log("in navbar ", username);
      setUser(username);
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  })

    }).catch(function(error) {
      console.log(error);
   });
  
   
  }
  // this may be a terrible method right now but this is all that i could think of currently
  if (modalOpen === false) {
    return (
      <AppNavBar
        title="Old Times X"
        mainItems={mainItems}
        onMainItemSelect={handleMainItemSelect}
      />
    );
  }
  else {
    return (
      <UserPrompt />
    )
  }
}

export default NavigationBar;
