import * as React from "react";
import NavigationBar from '../../NavigationBar';

import { Button, SIZE, SHAPE } from "baseui/button"
import { Table } from "baseui/table";
import {
    Display1,
} from 'baseui/typography';
import { Card } from "baseui/card";
import Routes from "../../Route";

export default function Scores() {
    const header = 'Score Page';

    function handleClick(e) {
        window.location = e.target.id;;
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
                    columns={["User", "Correct", "Time", "Score"]}
                    data={[
                        [
                            "Juliet Meyers",
                            "7/10",
                            "0:30",
                            1220
                        ],
                    ]}
                />
                <div>
                    <Button id="/singleplayer/play" onClick={(e) => handleClick(e)}>Play Again</Button>
                    <Button id="/leaderboards" onClick={(e) => handleClick(e)}>Leaderboards</Button>
                </div>
            </Card>
        </div>
    );
}

