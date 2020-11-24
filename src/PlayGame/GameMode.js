import * as React from "react";
import NavigationBar from '../NavigationBar';
import {Button} from "baseui/button";
import {Card} from "baseui/card";
import Routes from "../Route";

export default function Game (){

    function handleClick (e){
        window.location = e.target.id;
        return(
            <Routes />
        )
    }
    return(
    <div>
        <NavigationBar />
        <Card>
            <Button id="/singleplayer/playhard" onClick={(e) => handleClick(e)} >Single Player Game: Hard</Button>
        </Card>
        <Card>
            <Button id="/singleplayer/playeasy" onClick={(e) => handleClick(e)} >Single Player Game: Easy</Button>
        </Card>
        <Card>
            <Button id="/multiplayer" onClick={(e) => handleClick(e)}>Mulitplayer Game</Button>
        </Card>
     </div>
    );    
}

