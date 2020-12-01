import * as React from "react";
import NavigationBar from './NavigationBar';
import { Button } from "baseui/button"
import './Home.css';
import Routes from "./Route";


function handleClick(e) {
    window.location = e.target.id;;
    return (
        <Routes />
    )
}

export default function Home() {
    return (
        <div>
            <NavigationBar />

            <table>
                <tr>
                    <th colspan="4">Meet the Creators</th>
                </tr>
                <tr>

                    <td><img src="/Alexis.jpg" alt="" /></td>
                    <td><img src="/Asim.jpg" alt="" /></td>
                    <td><img src="/Cassey.jpg" alt="" /></td>
                    <td><img src="/David.jpg" alt="" /></td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Alexis</th>
                    <th>Asim</th>
                    <th>Cassey</th>
                    <th>David</th>
                </tr>
            </table>
            <table>
                <th colspan="4"><Button id="/game" onClick={(e) => handleClick(e)}>Play Game</Button></th>
            </table>
        </div>
    );
}

