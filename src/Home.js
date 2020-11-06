import * as React from "react";
import NavigationBar from './NavigationBar';
import {Button} from "baseui/button"

export default function Home (){
    return(
    <div>
        <NavigationBar />
        <Button>Home</Button>
     </div>
    );    
}

