import React from 'react'
import Form from 'react-bootstrap/Form'

import { Container,Row,Col } from 'react-bootstrap'



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