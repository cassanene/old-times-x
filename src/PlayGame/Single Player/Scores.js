import * as React from "react";
import NavigationBar from '../../NavigationBar';

import { Button} from "baseui/button"
import { Table } from "baseui/table";
import {
    Display1,
    Paragraph1,
    Paragraph2,
} from 'baseui/typography';
import { Card } from "baseui/card";
import Routes from "../../Route";

export default function Scores() {
    const header = 'Completed!';

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
                <Paragraph1></Paragraph1>
                <Table
                    columns={["Problem", "Result"]}
                    data={[
                        [
                            "2 x 2",
                            "Correct"
                        ],
                        [
                            "7 x 1",
                            "Incorrect"
                        ],
                        [
                            "4 x 5",
                            "Correct"
                        ],
                        [
                            "8 x 7",
                            "Correct"
                        ],
                        [
                            "0 x 3",
                            "Incorrect"
                        ],
                        [
                            "2 x 3",
                            "Correct"
                        ],
                        [
                            "4 x 1",
                            "Correct"
                        ],
                        [
                            "8 x 9",
                            "Incorrect"
                        ],
                        [
                            "5 x 2",
                            "Correct"
                        ],
                        [
                            "9 x 1",
                            "Correct"
                        ],
                    ]}
                />
                <div>
                    <Paragraph2></Paragraph2>
                    <Button id="/game" onClick={(e) => handleClick(e)}>Play Again</Button>
                    <Button id="/leaderboards" onClick={(e) => handleClick(e)}>Leaderboards</Button>
                </div>
            </Card>
        </div >
    );
}

