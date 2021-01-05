import React from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';

export default function Header() {
    
        return (
            <header>
                <Jumbotron>
                    <Container>
                        <h1>
                            Meet the Ontario Parites
                        </h1>
                        <p>
                            One place for all the events posted by Ontario Parties.
                        </p>
                    </Container>

                </Jumbotron>
            </header>
        );

        }
