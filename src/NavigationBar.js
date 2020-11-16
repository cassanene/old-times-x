import * as React from "react";
import {
    AppNavBar,
    setItemActive
  } from "baseui/app-nav-bar";
import UserPrompt from "./Modal";

function NavigationBar(){
  const [modalOpen, setOpen] = React.useState(false);
  const [mainItems, setMainItems] = React.useState([
    {label: 'Home', info: {id: "/home"}},
    {label: 'Play Game', info: {id: "/game"}},
    {label: 'Leaderboard', info: {id: "/leaderboards"}},
    {label: 'Login', info: {id: "login"}},
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
 
  item.info.id == "login" ? setOpen(true) : window.location = item.info.id;


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
