import * as React from "react";
import NavigationBar from '../NavigationBar';
import {Button, SIZE, SHAPE } from "baseui/button"
import { Table } from "baseui/table";
import {
    Display1,
  } from 'baseui/typography';
import {Card} from "baseui/card";
import Routes from "../Route";

export default function SingleSet (){

    return(
        <div>
        <NavigationBar />
        <Button>
            Single
        </Button>
        </div>
        
    )
}