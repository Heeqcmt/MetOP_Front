import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';


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

export default class EventBoard extends React.Component {
    render() {
        return (
            
            
                <Container>
                    <Row>
                       <CardGroup>
                        {
                            testEventArray.map(
                                event => (
                                    <Col md="4">
                                        <Card bg='light' border="dark"> 
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
                        </CardGroup>
                    </Row>
                </Container>
           
        );
    };
}
