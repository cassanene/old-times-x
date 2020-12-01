import * as React from "react";
import NavigationBar from '../NavigationBar';
import {Button} from "baseui/button";
import {Card} from "baseui/card";
import Routes from "../Route";
import {Select, TYPE} from 'baseui/select';
import { Notification, KIND} from "baseui/notification";
import {H1} from 'baseui/typography';
import {
    Label1,
    Label2,
    Label3,
    Label4,
    Paragraph1,
    Paragraph2,
    Paragraph3,
    Paragraph4,
  } from 'baseui/typography';

export default function Game (){
    const [value, setValue] = React.useState([""]);
    const [error, setError] = React.useState(false);

    const label = "Choose a game mode";
    const single = "Single Player Mode";
    const gameDescription = "There are two modes to the single player game: easy mode and hard mode. Easy mode has less problems and smaller multiplicands/multipliers. Hard mode has more problms and larger multiplicands/multipliers. Note: Non-logged in users can not play the hard mode.";

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
    <H1>{single}</H1>
    <Paragraph1>{gameDescription}</Paragraph1>
    <Card> 
        <Label1>{label}</Label1>
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
        <Button onClick={handleClick}>
            Play {value[0].id}
        </Button>
    </Card>
    
</div>
    );    
}

