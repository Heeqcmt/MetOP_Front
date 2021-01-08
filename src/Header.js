import React from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import logo from './logo/logo.png';
import './index.css'

export default function Header() {
    
        return (
            <header >
                <Jumbotron className="jumbo">
                    <Container>

                        <img className="logo"src={logo} ></img>
                        <h1>
                         Meet the Ontario Parties
                        </h1>
                        <p>
                        One place for all the events posted by Ontario Parties.
                        </p>
                    </Container>

                </Jumbotron>
            </header>
        );

        }
