import * as React from "react";
import NavigationBar from '../NavigationBar';
import {Button, SIZE, SHAPE } from "baseui/button";
import { Table } from "baseui/table";

export default function MultiplayerChoice (){

    return(
        <div>
        <NavigationBar />
        <Table 
        columns={["Game Invites", "Players", "Play"]}
        data={[["Johnny Boy", "n/a"], ["Friend Min", "Sim Cole"]]}
        />
        </div>
    )
}