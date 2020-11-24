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
import Play from "./PlayGame/Play";
import PlayEasy from "./PlayGame/PlayEasy";
import MultiplayerChoice from "./PlayGame/Multiplayer/Multiplayer";
import Scores from "./PlayGame/Single Player/SinglePlayerSubmit";

// if another page needs to be added make sure to add it before the "/" because it would be overriden and
// show up

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/multiplayer">
          <MultiplayerChoice />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/scores">
          <Scores />
        </Route>
        <Route path="/singleplayer/playhard">
          <Play />
        </Route>
        <Route path="/singleplayer/playeasy">
          <PlayEasy />
        </Route>
        <Route path="/leaderboards">
          <Leaderboard />
        </Route>
        <Route path="/personalbests">
          <PersonalBest />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
