import * as React from "react";
import {useState} from "react";
import firebase from "firebase";
import {
    AppNavBar,
    setItemActive
  } from "baseui/app-nav-bar";
import UserPrompt from "./Modal";
 
function NavigationBar(){
  const [modalOpen, setOpen] = React.useState(false);
  const [user, setUser] = useState("Login");
  const [mainItems, setMainItems] = React.useState([
    {label: 'Home', info: {id: "/home"}},
    {label: 'Play Game', info: {id: "/game"}},
    {label: 'Leaderboard', info: {id: "/leaderboards"}},
    {label: user, info: {id: "login"}},
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
 
  function login(){
    var provider = new firebase.auth.GoogleAuthProvider(); 
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result.user);
      console.log(result.user.displayName);
      setUser("Bob"); // 
    }).catch(function(error) {
      console.log(error);
   });
  
   
  }
  // this may be a terrible method right now but this is all that i could think of currently
  if (modalOpen === false){
    return (
      <AppNavBar
        title="Old Times X"
        mainItems={mainItems}
        onMainItemSelect={handleMainItemSelect}
      />
      );
  } 
  else{
    return (
      <UserPrompt />
    )
  }  
}
 
export default NavigationBar;
