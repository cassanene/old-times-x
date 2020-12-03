import * as React from "react";
import NavigationBar from '../NavigationBar';
import { Button } from "baseui/button";
import { Grid, Cell } from 'baseui/layout-grid';
import { useStyletron } from 'baseui';
import Problem from "./Problem";
import StartPrompt from "../StartModal";
import GameProgressBar from "./ProgressBar";
import Routes from "../Route";
import RandomProblems from "../Multiplication/RandomizeProblems";
import { problemSolver } from "../Multiplication/ProblemSolver";
import { compareGrids } from "../Multiplication/CompareGrids";
import { useParams } from "react-router";
import GameOverPrompt from "../GameOverModal";
import {
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
} from 'baseui/typography';

let GRID_SIZE;

export default function Play() {
  const [startTime, setStartTime] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [userAnswers, setAnswers] = React.useState({});
  function Mode() {
    let { mode } = useParams();
    let i;

    GRID_SIZE = mode == "hard" ? 40 : mode == "easy" ? 20 : 0;

    for (i = 1; i < GRID_SIZE; i++) {
      userAnswers[i.toString()] = null;
    }

    console.log(userAnswers);

  }
  Mode();
  const cells = [];
  let problems = RandomProblems(GRID_SIZE);
  let problemAnswers = problemSolver(problems)
  console.log("answers in play", problemAnswers);



  for (let i = 0; i < GRID_SIZE; i++) {
    cells.push(
      <Cell>
        <Problem problems={problems[i]} answers={[userAnswers, setAnswers]} cell={i} />
      </Cell>
    );
  }

  console.log("answers in play after", userAnswers);

  function handleClick() {
    let correctness = compareGrids(userAnswers, problemAnswers, problems);
    console.log("correct", correctness);
    //compare the grids then put that information in the backend
    window.location = "/scores";
    return (<Routes />)
  }

  return (
    <div>
      <NavigationBar />
      <StartPrompt start={[startTime, setStartTime]} started={[setStarted]} />
      {finished && (
        <GameOverPrompt />
      )}
      { started &&
        (
          <GameProgressBar finishedFunctions={[setFinished]} />
        )
      }
      <Grid col={2} colsSm={20}>
        {cells}
      </Grid>
      <Paragraph1></Paragraph1>
      <Button onClick={handleClick} > Submit Answers</Button>
    </div>
  )
}