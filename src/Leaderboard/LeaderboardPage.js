import * as React from "react";
import NavigationBar from '../NavigationBar';
import { Button, SIZE, SHAPE } from "baseui/button"
import { Table } from "baseui/table";
import {
    Display1,
} from 'baseui/typography';
import { Card } from "baseui/card";
import Routes from "../Route";

export default function Leaderboard() {
    const header = 'Global Leaderboard';

    function handleClick() {
        window.location = "/personalbests";
        return (
            <Routes />
        )
    }
    return (
        <div>
            <NavigationBar />
            <Card>
                <Display1 marginBottom="scale500" alignContent="center">{header}</Display1>
                <Table
                    columns={["User", "Score"]}
                    data={[
                        [
                            "Juliet Meyers",
                            1220
                        ],
                        [
                            "Bobby Smith",
                            900
                        ],
                        [
                            "Beyonce Knowles",
                            850
                        ],
                        [
                            "Popeye",
                            700
                        ],
                        [
                            "Lebron James",
                            700
                        ],
                    ]}
                />
                <div>
                    <table>
                        <th colspan="4">
                            <Button onClick={handleClick}
                                size={SIZE.compact}
                                shape={SHAPE.pill}
                            >Personal Bests</Button>
                        </th>
                    </table>
                </div>
            </Card>
        </div>
    );
}

