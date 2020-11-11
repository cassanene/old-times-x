import * as React from 'react';
import {Card, StyledBody} from "baseui/card";
import { Input } from "baseui/input";

function Problem (){
    return (
        <div>
        <Card
            overrides={{Root: {style: {width: '100px'}}}}
            title="2*2"
        >
        {/* <StyledBody>
            2 * 2
        </StyledBody>   */}
        <Input
            // value={value}
            // onChange={e => setValue(e.target.value)}
            // placeholder="Controlled Input"
            // clearOnEscape
            />
        </Card>

        </div>
        

    )
}
export default Problem;