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

export default function Play() {
  const [startTime, setStartTime] = React.useState(0);
  const [currentSeconds, setSeconds] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);

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

  for (let i = 0; i < 40; i++) {
    cells.push(
      <Cell>
        <Problem />
      </Cell>
    );
  }

  function handleClick() {
    window.location = "/scores";
    return (<Routes />)
  }

  return (
    <div>
      <NavigationBar />
      <StartPrompt start={[startTime, setStartTime]} />
      {/* render grid */}
      <Grid col={2} colsSm={20}>
        {cells}
      </Grid>
      <Button onClick={handleClick} > Submit Answers</Button>
    </div>
  )
}