import React from "react";
import Selector from "./mainComponent/selector";
import EventBoard from "./mainComponent/eventBoard";
//sample data
const testEventArray = [
    {
        title: "Liberal party event 1",
        id: 0,
        location: "online",
        province: "Ontario",
        party: "Liberal",
        link: "sample link",
        date: "sampel date",
        description: "sample description",
    },
    {
        title: "Conservative party event 1",
        id: 1,
        location: "online",
        province: "Ontario",
        party: "Conservative",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "NDP event 1",
        id: 2,
        location: "online",
        province: "Ontario",
        party: "NDP",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "Liberal party event 1",
        id: 0,
        location: "online",
        province: "Ontario",
        party: "Liberal",
        link: "sample link",
        date: "sampel date",
        description: "sample description",
    },
    {
        title: "Conservative party event 1",
        id: 1,
        location: "online",
        province: "Ontario",
        party: "Conservative",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "NDP event 1",
        id: 2,
        location: "online",
        province: "Ontario",
        party: "NDP",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "Liberal party event 1",
        id: 0,
        location: "online",
        province: "Ontario",
        party: "Liberal",
        link: "sample link",
        date: "sampel date",
        description: "sample description",
    },
    {
        title: "Conservative party event 1",
        id: 1,
        location: "online",
        province: "Ontario",
        party: "Conservative",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "NDP event 1",
        id: 2,
        location: "online",
        province: "Ontario",
        party: "NDP",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "Liberal party event 1",
        id: 0,
        location: "online",
        province: "British Columbia",
        party: "Liberal",
        link: "sample link",
        date: "sampel date",
        description: "sample description",
    },
    {
        title: "Conservative party event 1",
        id: 1,
        location: "online",
        province: "British Columbia",
        party: "Conservative",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    },
    {
        title: "NDP event 1",
        id: 2,
        location: "online",
        province: "British Columbia",
        party: "NDP",
        link: "sample link",
        date: "sampel date",
        description: "sample description",

    }

];


const provinceArray = [
    "All",
    "Ontario",
    "British Columbia"
];

const partyArray = [
    "All",
    "Liberal",
    "Conservative",
    "NDP"
];

export default class Main extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            selectedParty: 'All',
            selectedProvince: 'All'
        };
        this.filteredEvents = testEventArray
        this.handlePartyChange = this.handlePartyChange.bind(this);
        this.handleProvinceChange = this.handleProvinceChange.bind(this);
    }

    handlePartyChange(e){
        this.setState({selectedParty: e.target.value});
        
        
    }
    handleProvinceChange(e){
        this.setState({selectedProvince: e.target.value});
    
    }
    
    
    render()
    {


        if(this.state.selectedParty == 'All' && this.state.selectedProvince == 'All'){
            this.filteredEvents = testEventArray;
        }
        else if (this.state.selectedParty != 'All' && this.state.selectedProvince == 'All')
        {
            this.filteredEvents = testEventArray.filter(testEvent => testEvent.party.includes(this.state.selectedParty));
        }
        else if (this.state.selectedProvince != 'All' && this.state.selectedParty == 'All')
        {
            this.filteredEvents = testEventArray.filter(testEvent => testEvent.province.includes(this.state.selectedProvince));
        }
        else
        {
            this.filteredEvents = testEventArray.filter(testEvent => testEvent.province.includes(this.state.selectedProvince) && testEvent.party.includes(this.state.selectedParty));
        }
        
        return(
            <>
            < Selector partyArray ={partyArray} provinceArray = {provinceArray}  {...this.props} onPartyChange = {this.handlePartyChange} onProvinceChange ={this.handleProvinceChange}/>
            < EventBoard eventArray ={this.filteredEvents}/>
            <h4>province seleceted : {this.state.selectedProvince} </h4>
            <h4>party selected: {this.state.selectedParty}</h4>
            </>
        );
    };
};
