// import * as React from "react";
// import NavigationBar from '../../NavigationBar';
// import {Button} from "baseui/button";
// import {Grid, Cell} from 'baseui/layout-grid';
// import {useStyletron} from 'baseui';
// import Problem from "../Problem";
// import StartPrompt from "../../StartModal";

// export default function SingleSet (){
//     const [startTime, setStartTime] = React.useState(0);

//     const Outer = ({children}) => {
//         const [css, theme] = useStyletron();
//         return (
//           <div
//             className={css({
//               background: theme.colors.accent100,
//             })}
//           >
//             {children}
//           </div>
//         );
//       };
    

//     function handleSubmit(){
//         let endTime;
//         endTime = new Date();
//         let timeDiff = endTime - startTime;
//         timeDiff /= 1000;
//         var seconds = Math.round(timeDiff);
//         console.log("seconds: ", seconds);
//     }

//     function createProblems(number){
//         let i;
//         for (i = 0; i < 3; i++){
//             return(
//                 <Cell>
//                 <Problem />
//                 </Cell>
//             )
//             }
//     }

//     return(
//         <div>
//         <NavigationBar />
//         {/* May not go here may go for the entire grid */}
//         <StartPrompt start={[startTime,setStartTime]} />
//         {/* <Outer> */}
//         <Grid>
//             <Cell>
//                 <Problem />
//             </Cell>
//             <Cell>
//                 <Problem/>
//             </Cell>
//             </Grid>
//         {/* </Outer> */}
//         <Button onClick={handleSubmit}> Submit Answers</Button>
//         </div>
        
//     )
// }