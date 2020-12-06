import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import Game from "./PlayGame/GameMode";
import Leaderboard from "./Leaderboard/LeaderboardPage";
import PersonalBest from "./PersonalBest";
import Play from "./PlayGame/Play";
import Scores from "./PlayGame/Single Player/Scores";
import Mode from "./PlayGame/Play";


export default function Routes() {

  return (
    <Router>
      <Switch>
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
        <Route path="/" >
          <Home />
        </Route> 
      </Switch>
    </Router>
  )
}
