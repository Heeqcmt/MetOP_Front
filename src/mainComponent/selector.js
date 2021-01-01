import React from 'react'
import Form from 'react-bootstrap/Form'

import { Container,Row,Col } from 'react-bootstrap'



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
                            <Form.Control as='select' onChange={this.props.onProvinceChange}>
                                {this.props.provinceArray.map(province => (
                                    <option value={province}>{province}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
               </Col>
               <Col>
               <Form>
                        <Form.Group controlId="partySelect">
                            <Form.Label> Party</Form.Label>
                            <Form.Control as='select' onChange={this.props.onPartyChange}>
                                {this.props.partyArray.map(party => (
                                    <option value={party}>{party}</option>
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