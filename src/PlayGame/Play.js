import * as React from "react";
import NavigationBar from '../NavigationBar';
import { Button } from "baseui/button";
import { Grid, Cell } from 'baseui/layout-grid';
import { useStyletron } from 'baseui';
import Problem from "./Problem";
import StartPrompt from "../StartModal";
import GameProgressBar from "./ProgressBar";
import Scores from "./Single Player/SinglePlayerSubmit";
import Routes from "../Route";
import RandomProblems from "../Multiplication/RandomizeProblems";
import { problemSolver } from "../Multiplication/ProblemSolver";
import { compareGrids } from "../Multiplication/CompareGrids";
import { useParams } from "react-router";
import { Block } from 'baseui/block';
//import { Form, Field } from 'react-final-form';


let GRID_SIZE;

export default function Play() {
  const [startTime, setStartTime] = React.useState(0);
  const [currentSeconds, setSeconds] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);
  const [userAnswers, setAnswers] = React.useState({});

  // const gridStyle = {
  //   gridRow: 10,
  // }



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
  // calculateSeconds();
  // 40 problems
  // 2 minutes - 120 seconds


  const Outer = ({ children }) => {
    const [css, theme] = useStyletron();
    return (
      <div
        className={css({
          background: theme.colors.accent100,
        })}
      >
        {children}
      </div>
    );
  };


  // function handleSubmit(){
  //   console.log("time again", startTime);
  //   let endTime;
  //   endTime = new Date();
  //   setSeconds(endTime)
  //   let timeDiff = endTime - startTime;
  //   timeDiff /= 1000;
  //   var seconds = Math.round(timeDiff);
  //   console.log("seconds: ", seconds);
  // }

  // function calculateSeconds(){
  //     console.log("time again", startTime);
  //     let endTime;
  //     endTime = new Date();
  //     // setSeconds(endTime)
  //     let timeDiff = endTime - startTime;
  //     console.log("time diff", timeDiff);
  //     timeDiff /= 1000;
  //     var seconds = Math.round(timeDiff);
  //     console.log("seconds", seconds)
  //     // setSeconds(seconds)
  //     calculateSeconds()
  // }

  // function createProblems(number){
  //     let i;
  //     for (i = 0; i < 3; i++){
  //         return(
  //             <Cell>
  //             <Problem />
  //             </Cell>
  //         )
  //         }
  // }
  // populate grid
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
      <StartPrompt start={[startTime, setStartTime]} />
      {/* render grid */}
      {/* <Block style={gridStyle} > */}
      <Grid col={2} colsSm={20}>
        {cells}
      </Grid>
      {/* </Block> */}

      <Button onClick={handleClick} > Submit Answers</Button>
    </div>
  )
}