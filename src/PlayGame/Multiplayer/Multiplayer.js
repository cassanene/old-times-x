import * as React from "react";
import NavigationBar from '../../NavigationBar';
import {Table} from "baseui/table";
import {Select} from 'baseui/select';
import {StatefulTooltip} from 'baseui/tooltip';
import { Input } from "baseui/input";
import {Block} from "baseui/block";
import { Button } from "baseui/button";

export default function MultiplayerChoice (){
    const [emails, setEmails] = React.useState([]);
    

    return(
        <div>
        <NavigationBar />
        <Table 
        columns={["Game Invites", "Players", "Play"]}
        data={[["Johnny Boy", "n/a"], ["Friend Min", "Sim Cole"]]}
        />
        <div>
        <Table
        columns={["Invite Friends"]}
        />
       {/* Add a tool tip */}
        <Select 
            creatable
            multi
            value={emails}
            onChange={({value}) => setEmails(value)}
            valueKey="id"
        />
        <Button>Invite</Button>
        </div>
        </div>
    )
}