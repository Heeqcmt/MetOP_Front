import React from "react";
import Selector from "./mainComponent/selector";
import EventBoard from "./mainComponent/eventBoard";
//sample data
// const testEventArray = [
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Liberal",
//             title: "some title"
//         }
//     },
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Conservative",
//             title: "some title"
//         }
//     },
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"NDP",
//             title: "some title"
//         }
//     },{
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Liberal",
//             title: "some title"
//         }
//     },
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Conservative",
//             title: "some title"
//         }
//     },
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"NDP",
//             title: "some title"
//         }
//     },
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Liberal",
//             title: "some title"
//         }
//     },
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Conservative",
//             title: "some title"
//         }
//     },
//     {
//         province:"Ontario",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"NDP",
//             title: "some title"
//         }
//     },
//     {
//         province:"British Columbia",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Liberal",
//             title: "some title"
//         }
//     },
//     {
//         province:"British Columbia",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"Conservative",
//             title: "some title"
//         }
//     },
//     {
//         province:"British Columbia",
//         id:0,
//         Info:{
//             date:"some date",
//             link:" some link",
//             location: "some location",
//             party:"NDP",
//             title: "some title"
//         }
//     },
    
    
// ];


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
            selectedProvince: 'All',
            loading: true,
            testEventArray: null
        };
        this.filteredEvents = null;
        this.handlePartyChange = this.handlePartyChange.bind(this);
        this.handleProvinceChange = this.handleProvinceChange.bind(this);
    }

    handlePartyChange(e){
        this.setState({selectedParty: e.target.value});
        
        
    }
    handleProvinceChange(e){
        this.setState({selectedProvince: e.target.value});
    
    }

    async componentDidMount()
    {
        const url = "https://hy2olkyzs9.execute-api.us-east-1.amazonaws.com/default";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({testEventArray: data});
        this.filteredEvents = this.state.testEventArray;
        this.setState({loading:false})
        
        
    }
    
    
    render()
    {


        if(this.state.loading)
        {
            return(
             
                <div>Loading events</div>
                
            )
        }
        else
        {
            if(this.state.selectedParty == 'All' && this.state.selectedProvince == 'All'){
                this.filteredEvents = this.state.testEventArray;
            }
            else if (this.state.selectedParty != 'All' && this.state.selectedProvince == 'All')
            {
                this.filteredEvents = this.state.testEventArray.filter(testEvent => testEvent.Info.party.includes(this.state.selectedParty));
            }
            else if (this.state.selectedProvince != 'All' && this.state.selectedParty == 'All')
            {
                this.filteredEvents = this.state.testEventArray.filter(testEvent => testEvent.province.includes(this.state.selectedProvince));
            }
            else
            {
                this.filteredEvents = this.state.testEventArray.filter(testEvent => testEvent.province.includes(this.state.selectedProvince) && testEvent.Info.party.includes(this.state.selectedParty));
            }
            
            return(
                
                <>
                < Selector partyArray ={partyArray} provinceArray = {provinceArray}  {...this.props} onPartyChange = {this.handlePartyChange} onProvinceChange ={this.handleProvinceChange}/>
                < EventBoard eventArray ={this.filteredEvents}/>
                <h4>province seleceted : {this.state.selectedProvince} </h4>
                <h4>party selected: {this.state.selectedParty}</h4>
                </>
              
            );
        }
    };
};
