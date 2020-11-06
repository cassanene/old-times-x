import * as React from "react";
import {
    AppNavBar,
    setItemActive
  } from "baseui/app-nav-bar";

function NavigationBar(){

    const [mainItems, setMainItems] = React.useState([
        {label: 'Home', info: {id: "/home"}},
        {label: 'Play Game', info: {id: "/playgame"}},
        {label: 'Leaderboard', info: {id: "/leaderboards"}},
        {label: 'Login', info: {id: "/login"}},
      ]);

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
    window.location = item.info.id;
    }

    return (
    <AppNavBar
      title="Old Times X"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
    />
    );
}

export default NavigationBar;
