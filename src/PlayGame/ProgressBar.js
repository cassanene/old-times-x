// // import * as React from 'react';
// import * as React from 'react';
// import  {useEffect, useState} from 'react';
// // import {ProgressBar} from 'baseui/progress-bar';
// // const MAX_SECONDS = 120;



// // function useInterval(callback, delay) {
// //   const savedCallback = React.useRef(() => {});
// //   // Remember the latest callback.
// //   React.useEffect(() => {
// //     savedCallback.current = callback;
// //   }, [callback]);
// //   // Set up the interval.
// //   React.useEffect(() => {
// //     function tick() {
// //       savedCallback.current();
// //     }
// //     if (delay !== null) {
// //       let id = setInterval(tick, delay);
// //       return () => clearInterval(id);
// //     }
// //   }, [delay]);
// // }


// // export default function GameProgressBar ({current}){

// //   const [value, setValue] = React.useState(0);

// //   useInterval(() => {
// //     if (value < MAX_SECONDS) {
// //       setValue(value + 1);
// //     }
// //   }, 1000);

// //   console.log("current", current[0])

// //   return (
// //     <ProgressBar
// //       value={value}
// //     //   getProgressLabel={value =>
// //     //     `${(MAX_SECONDS / 100) *
// //     //       value}mb out of ${MAX_SECONDS}mb downloaded`
// //     //   }
// //       getProgressLabel={value => `${value}`}
// //       showLabel

// //     />

// //   );

// // };

// import {ProgressBar} from 'baseui/progress-bar';

// let MAX_SECONDS = 120;


// function percentFromSecondsLeft (secondsLeft, secondsTotal = 30) {
//   const diffPercent = secondsLeft/secondsTotal * 100;
      
//   return diffPercent > 0 ? diffPercent : 0;
// }

// function secondsDiff(date1, date2) {
//   const diffTime = date1 - date2;
//   return diffTime / 1000;
// }

// export default function GameProgressBar () {

//     // expirationDate = new Date(),
//     // secondsTotal = 30,
//     // now = () => new Date(),

//   const [secondsLeft, setSecondsLeft] = useState(secondsDiff(expirationDate, now()));

//   useEffect(() => {
//     setTimeout(() => {
//       setSecondsLeft(secondsDiff(expirationDate, now()))
//     },100)
//   })

//   return <ProgressBar
//     value={percentFromSecondsLeft(secondsLeft, secondsTotal)}
//     showLabel
//     getProgressLabel={_ => secondsLeft > 0 ? `valid for ${Math.floor(secondsLeft)}s`: 'Expired'}
//     />;
// };