import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Game from "./PlayGame/GameMode";
import Leaderboard from "./Leaderboard/LeaderboardPage";
import PersonalBest from "./PersonalBest";
import Play from "./PlayGame/Play";
import MultiplayerChoice from "./PlayGame/Multiplayer/Multiplayer";
import Scores from "./PlayGame/Single Player/SinglePlayerSubmit";
import Mode from "./PlayGame/Play";
import {UserContext} from "./UserContext";

// if another page needs to be added make sure to add it before the "/" because it would be overriden and
// show up



function PrivateRoute({ component: Component, authenticated, ...rest}){
  return (
    // <Route />
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/home", state: { from: props.location } }}
            />
          )
      }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : console.log("hello")
        // (
        //     <Redirect to="/home" />
        //   )
      }
    />
  );
}

export default function Routes() {

  const user = React.useContext(UserContext);

  return (
    <Router>
      <Switch>
        {/* <Route path="/multiplayer">
          <MultiplayerChoice /> */}
        {/* </Route> */}
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/scores" >
          <Scores />
        </Route>
        <Route path="/singleplayer/play/:mode" children={<Mode />} >
          <Play />
        </Route>
        <Route path="/leaderboards" >
          <Leaderboard /> 
        </Route>
        <Route path="/personalbests">
          <PersonalBest /> 
        </Route>
        <Route path="/home" >
          <Home />
        </Route> 
      </Switch>
    </Router>
  );
}
