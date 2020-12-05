import * as React from "react";
import NavigationBar from './NavigationBar';
import { Table } from "baseui/table";
import {Display2} from 'baseui/typography';
import {Card} from "baseui/card";

export default function PersonalBest (){
    const header = 'Personal Best Scores (Top 3)';
    return(
    <div>
        <NavigationBar />
        <Card>
        <Display2 marginBottom="scale500" alignContent="center">{header}</Display2>
        <Table
            columns={["User", "Date Scored", "Score"]}
            data={[
            [
            "Juliet Meyers",
            "July 12, 2020",
            1220
            ],
            [
            "Juliet Meyers",
            "March 1, 2020",
            900
            ],
            [
            "Juliet Meyers",
            "Nov. 2, 2020",
            850
            ],
        ]}
        />
        </Card>
    </div>
    );    
}