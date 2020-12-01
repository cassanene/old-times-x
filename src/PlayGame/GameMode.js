import * as React from "react";
import NavigationBar from '../NavigationBar';
import {Button} from "baseui/button";
import {Card} from "baseui/card";
import Routes from "../Route";
import {Select, TYPE} from 'baseui/select';
import { Notification, KIND} from "baseui/notification";

export default function Game (){
    const [value, setValue] = React.useState([""]);
    const [error, setError] = React.useState(false);

    function handleClick (){
        if (value == ""){
            setError(true);
        }
        else{
            window.location = value[0].route;
        return(
            <Routes />
        )
        }
        // setError(false);
        
    }
    return(
<div> 
    <NavigationBar />
    {
        error && (
            <Notification kind={KIND.negative}>
             {() => "Select a game to continue."}
           </Notification>
        )
    }
    <Card> 
        <Select
        options={[
        {id: 'Easy Mode', route: "/singleplayer/play/easy"},
        {id: 'Hard Mode', route: "/singleplayer/play/hard"},
        ]}
        labelKey="id"
        valueKey="route"
        placeholder="Choose a game mode"
        maxDropdownHeight="300px"
        onChange={({value}) => setValue(value)}
        value={value}
        />
    </Card>
    <Button onClick={handleClick}>
        Play {value[0].id}
    </Button>
</div>
    );    
}

