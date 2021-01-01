import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';




export default class EventBoard extends React.Component {
    render() {
        return (
            
            
                <Container>
                    <Row>
                       
                        {
                            this.props.eventArray.map(
                                event => (
                                    <Col md="4" >
                                        <Card bg='light' > 
                                            <Card.Header>{event.title}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <div>{event.party}</div>
                                                    <div>{event.province}</div>
                                                    <div>{event.date}</div>
                                                    <div>{event.description}</div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            )
                        }
                        
                    </Row>
                </Container>
           
        );
    };
}
