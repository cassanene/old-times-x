import * as React from "react";
import {useState, useEffect} from "react";
import firebase from "firebase";
import {firebaseApp} from "./firebase";
import FirebaseData from "./test.firestore";
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import UserPrompt from "./Modal";
import {UserContext} from "./UserContext";

const app = firebaseApp;
const db = firebase.firestore(app);

function NavigationBar() {

  const userContext = React.useContext(UserContext);
  const [modalOpen, setOpen] = React.useState(false);
  const [user, setUser] = useState("Login");
  const [userData, setUserData] = useState({});
  const [logged, setLogged] = useState(false);
  const [mainItems, setMainItems] = React.useState([
    { label: "Home", info: { id: "/home"} },
    { label: 'Play Game', info: { id: "/game"} },
    { label: 'Leaderboard', info: { id: "/leaderboards" } },
    { label: "Login", info: { id: "login" } },
  ]);


  // `${userData.uid}/game` 
  useEffect(() => {
    console.log("the is logged", logged);
    console.log("main items", mainItems[3].label);
    console.log("this is main itmems", mainItems[3]);
    /// slice the entire list without the login..
    var copy = [...mainItems];
    copy[3] = {label: user, info: {id: "login" }};
    setMainItems(copy);

    console.log("copy of items", copy);
    if (user != "Login"){
      setLogged(true);
      console.log("uid", userData)
      userContext.setName(userData.name);
      userContext.setUID(userData.uid);
      userContext.setEmail(userData.email);
      userContext.setLogged(true);
    }
    
  }, [user]);
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
      console.log("Document successfully written!");

      var userInfo = await FirebaseData(result.user.uid);
      console.log("name in navbar ", userInfo.name);
      console.log("in navbar ", userInfo);
      setUserData(userInfo);
      setUser(userInfo.name);
      console.log("user after set", user);
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  })

    }).catch(function(error) {
      console.log(error);
   });

  }

    return (
      <div> 
      {
        modalOpen && (
          <UserPrompt />
        )
      }
      {
        !logged && (
        <AppNavBar
        title="Old Times X"
        mainItems={mainItems}
        onMainItemSelect={handleMainItemSelect}
      /> )
      }
      {
        logged && (
          <AppNavBar
            title="Old Times X"
            mainItems={mainItems}
            onMainItemSelect={handleMainItemSelect}
          />
        )
      }
      </div>
    );
}

export default NavigationBar;
