import * as React from "react";
import {
    AppNavBar,
    setItemActive
  } from "baseui/app-nav-bar";
import {HomeLink} from "./Constants"

function NavigationBar(){

    const [mainItems, setMainItems] = React.useState([
        {label: 'Home', info: {id: "/home"}},
        {label: 'Play Game', info: {id: 2}},
        {label: 'Leaderboard', info: {id: 3}},
        {label: 'Login', info: {id: 4}},
      ]);

    const [userItems] = [
        {label: 'user one', info: {color: 'green'}}
    ]

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
      }


    return (
    <AppNavBar
      title="Old Times X"
      mainItems={mainItems}
      userItems={userItems}
      onMainItemSelect={handleMainItemSelect}
      username="Umka Marshmallow"
      usernameSubtitle="5.0"
      userImgUrl=""
    />
    );
}

export default NavigationBar;
