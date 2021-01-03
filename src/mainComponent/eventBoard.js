import React from 'react';

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
                                            <Card.Header>{event.Info.title}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    <div>{event.Info.party}</div>
                                                    <div>{event.province}</div>
                                                    <div>{event.Info.date}</div>
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
