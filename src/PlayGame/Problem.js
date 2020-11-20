import * as React from 'react';
import {useState} from "react";
import {Card, StyledBody} from "baseui/card";
import { Input } from "baseui/input";

function Problem ({problems}){
    const [value, setValue] = useState();
    const [error, setError] = useState(true);
    let num1 = problems[0];
    let num2 = problems[1];

    function checkValue(input){
        var regExp = /[a-zA-Z]/g;
        if (regExp.test(input)){
            console.log("hello")
            setError(true);
            // authenticator for the letters in the input
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
            onChange={e => checkValue(e.target.value)}
            // {...error}
            />
        </Card>
        </div>
    )
}
export default Problem;