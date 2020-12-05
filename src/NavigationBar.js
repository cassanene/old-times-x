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
import {Game} from "./PlayGame/GameMode"

const app = firebaseApp;
const db = firebase.firestore(app);
// export const UserContext = createContext();

function NavigationBar(props) {

  const userContext = React.useContext(UserContext);

  const [modalOpen, setOpen] = React.useState(false);
  const [user, setUser] = useState("Login");
  const [userData, setUserData] = useState({name: userContext.name, uid: userContext.uid, email: userContext.email});
  const [logged, setLogged] = useState(false);
  const [mainItems, setMainItems] = React.useState([
    { label: "Home", info: { id: "/home"} },
    { label: 'Play Game', info: { id: "/game"} },
    { label: 'Leaderboard', info: { id: "/leaderboards" } },
    { label: "Login", info: { id: "login" } },
  ]);


  useEffect(() => {
    /// slice the entire list without the login..
    var copy = [...mainItems];
    copy[3] = {label: user, info: {id: "login" }};
    setMainItems(copy);

    if (!(userContext.logged) && user != "Login"){
      setLogged(true);
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
 
  user != "Login" && item.info.id == "login" ? setOpen(true) : item.info.id == "login" ? login() : window.location = item.info.id;

 
  }

  function login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      db.collection("users").doc(result.user.uid).set({
        uid : result.user.uid,
        name : result.user.displayName,
        email : result.user.email,
    }).then(async function() {
      var userInfo = await FirebaseData(result.user.uid);
      setUserData(userInfo);
      setUser(userInfo.name);
      userContext.setName(userData.name);
      userContext.setUID(userData.uid);
      userContext.setEmail(userData.email);
      userContext.setLogged(true);
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
