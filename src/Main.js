import React from "react";
import Selector from "./mainComponent/selector";
import EventBoard from "./mainComponent/eventBoard";
//sample data
const testEventArray = [
    {
        title: "Liberal party event 1",
        id: 0,
        location: "online",
        province: "ontario",
        party: "liberal",
        link: "sample link",
        date: "sampel date",
        description: "sample description",
    },
    {
        title: "Conservative party event 1",
        id: 1,
        location: "online",
        province: "ontario",
        party: "conservative",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "NDP event 1",
        id: 2,
        location: "online",
        province: "ontario",
        party: "NDP",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "Liberal party event 1",
        id: 0,
        location: "online",
        province: "ontario",
        party: "liberal",
        link: "sample link",
        date: "sampel date",
        description: "sample description",
    },
    {
        title: "Conservative party event 1",
        id: 1,
        location: "online",
        province: "ontario",
        party: "conservative",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "NDP event 1",
        id: 2,
        location: "online",
        province: "ontario",
        party: "NDP",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "Liberal party event 1",
        id: 0,
        location: "online",
        province: "ontario",
        party: "liberal",
        link: "sample link",
        date: "sampel date",
        description: "sample description",
    },
    {
        title: "Conservative party event 1",
        id: 1,
        location: "online",
        province: "ontario",
        party: "conservative",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "NDP event 1",
        id: 2,
        location: "online",
        province: "ontario",
        party: "NDP",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    }

];
export default class Main extends React.Component{
    
        render()
        {
            return(
                <>
                < Selector />
                < EventBoard eventArray ={testEventArray}/>
                </>
            );
        };
    };
