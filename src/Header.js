import React from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import logo from './logo/logo.png';
import './index.css'

export default function Header() {
    
        return (
            <header>
                <Jumbotron>
                    <Container>

                        
                        <h1>
                        <img className="logo"src={logo} ></img> Meet the Ontario Parties
                        </h1>
                        <pre>
                                            One place for all the events posted by Ontario Parties.
                        </pre>
                    </Container>

                </Jumbotron>
            </header>
        );

        }
