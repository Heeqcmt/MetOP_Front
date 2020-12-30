import React from "react";
import Selector from "./mainComponent/selector";
import EventBoard from "./mainComponent/eventBoard";
export default class Main extends React.Component{
    
        render()
        {
            return(
                <>
                < Selector />
                < EventBoard />
                </>
            );
        };
    };
