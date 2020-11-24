import * as React from 'react';
import {useState} from "react";
import {Card, StyledBody} from "baseui/card";
import {Input,StyledRoot } from "baseui/input";
import {withStyle} from 'baseui';
function Problem ({problems}){
    const [value, setValue] = useState();
    const [error, setError] = useState(false);
    const [style, setStyle] = useState("");

    let num1 = problems[0];
    let num2 = problems[1];

    function checkValue(input){
        var regExp = /[a-zA-Z]/g;
        if (regExp.test(input)){

        }
    }     
    return (
        <div>
        <Card
            overrides={{Root: {style: {width: '100px'}}}}
        >
        <StyledBody>
           {num1} X {num2}
        </StyledBody>  
        <Input
            value={value}
            type="number"
            onChange={e => checkValue(e.target.value)}
            // overrides={{
            //         InputContainer: {
            //             style: ({$theme, $setError, $disabled, $error}) => ({
            //                 outline: $setError ? "black": "blue",
            //             })
            //         },
            //     }}
            />
        </Card>
        </div>
    )
}
export default Problem;