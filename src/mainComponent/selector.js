import React from 'react'
import Form from 'react-bootstrap/Form'

import { Container,Row,Col } from 'react-bootstrap'

//sample data
const testEventArray = [
    {
        title:"Liberal party event 1",
        id:0,
        location:"online",
        province:"ontario",
        party:"liberal",
        link:"sample link",
        date:"sampel date",
    },
    {
        title:"Conservative party event 1",
        id:1,
        location:"online",
        province:"ontario",
        party:"conservative",
        link:"sample link",
        date:"sampel date",
    },
    {
        title:"NDP event 1",
        id:2,
        location:"online",
        province:"ontario",
        party:"NDP",
        link:"sample link",
        date:"sampel date",
    }

];

const provinceArray = [
    "Ontario",
    "British Columbia"
];

const partyArray = [
    "Liberal",
    "Conservative",
    "NDP"
];


export default class Selector extends React.Component
{
    render()
    {
        return(
        <Container fluid>
           <Row>
               <Col>
                    <Form>
                        <Form.Group controlId="provinceSelect">
                            <Form.Label> Provinces</Form.Label>
                            <Form.Control as='select'>
                                {provinceArray.map(province => (
                                    <option>{province}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
               </Col>
               <Col>
               <Form>
                        <Form.Group controlId="partySelect">
                            <Form.Label> Party</Form.Label>
                            <Form.Control as='select'>
                                {partyArray.map(party => (
                                    <option>{party}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
               </Col>
          
          </Row>
        </Container>
        );
        
    };
};