import * as React from 'react';
import {ProgressBar} from 'baseui/progress-bar';
import {Card} from "baseui/card";


const MAX_SECONDS = 100;

function useInterval(callback, delay) {
  const savedCallback = React.useRef(() => {});
  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function GameProgressBar ({finishedFunctions}){

  const [value, setValue] = React.useState(1);
  const [color, setColor] = React.useState("blue");

  useInterval(() => {
    if (value < MAX_SECONDS) {
      setValue(value + 1);
      if (value > 33 && value < 66){
          setColor("yellow");
      }
      else if (value > 66){
          setColor("red");
      }
    }
    else if (value >= MAX_SECONDS){
        finishedFunctions[0](true);
    }

  }, 1000);

  return (
      <Card>
        <ProgressBar
        value={value}
        getProgressLabel={value => `${MAX_SECONDS - value} seconds left`}
        showLabel
        successValue={MAX_SECONDS}
        overrides={{
            BarProgress: {
            style: () => ({
                backgroundColor: color,
            })
            },
            Bar: {
                style: ({$theme}) => ({
                height: $theme.sizing.scale800,
                }),
            },  
        }}
        />
    </Card>

  );

};