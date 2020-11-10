import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import Game from "./PlayGame/GameMode";
import Leaderboard from "./Leaderboard/LeaderboardPage";
import PersonalBest from "./PersonalBest";
import SingleSet from "./PlayGame/SinglePlayer";
import MultiplayerChoice from "./PlayGame/Multiplayer";

// if another page needs to be added make sure to add it before the "/" because it would be overriden and
// show up

export default function Routes() {
    return (
        <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/playgame/multiplayer">
            <MultiplayerChoice />
          </Route>
          <Route path="/playgame">
            <Game />
          </Route>
          <Route path="/singleplayer/play">
            <SingleSet />
          </Route>
          <Route path="/leaderboards">
            <Leaderboard />
          </Route>
          <Route path="/personalbests">
            <PersonalBest />
          </Route>
          <Route path="/">
            <NavigationBar />
          </Route>
        </Switch>
        </Router>
    );
}
