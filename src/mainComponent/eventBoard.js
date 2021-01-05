import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';

//shows individual events in an event board
//gets the array of the events from main.js

export default class EventBoard extends React.Component {
    render() {
        return (
            
            
                <Container fluid>
                    <Row>
                       
                        {
                            this.props.eventArray.map(
                                event => (
                                    <Col md="4" >
                                        <a style={{cursor:'pointer'}} onClick={()=>window.open(event.Info.link,"_blank")}>
                                        <Card bg='light' style={{flex:2}}> 
                                            <Card.Header bg='dark'>{event.Info.title}</Card.Header>
                                            <Card.Body >
                                                <Card.Text>
                                                    <div>{event.Info.party}</div>
                                                    <div>{event.province}</div>
                                                    <div>{event.Info.date}</div>
                                                </Card.Text>
                            
                                            </Card.Body>
                                        </Card>
                                        </a>
                                    </Col>

                                )
                            )
                        }
        
                    </Row>
                </Container>
           
        );
    };
}
