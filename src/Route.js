import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home"
import Game from "./PlayGame/GameMode"
import Leaderboard from "./Leaderboard/LeaderboardPage"
import UserPrompt from "./Modal"

// if another page needs to be added make sure to add it before the "/" because it would be overriden and
// show up

export default function Routes() {
    return (
        <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/playgame">
            <Game />
          </Route>
          <Route path="/leaderboards">
            <Leaderboard />
          </Route>
          <Route path="/login">
            <UserPrompt />
          </Route>
          <Route path="/">
            <NavigationBar />
          </Route>
        </Switch>
        </Router>
    );
}
