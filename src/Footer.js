import React from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import './index.css'

export default function Footer() {
    
        return (
            <footer>
                <Jumbotron>
                    <Container>
                        <h2>
                            Thank you for checking out my site
                        </h2>

                        <pre>
                            This is one of series of projects which aim to showcase my ability to learn and code.
                            This site showcases the fullstack capability of me.
                            Technologies used:
                                                Frontend -- reactjs
                                                Event Scrapping -- python and beautiful soup
                                                Database -- python, boto3 and dynamodb
                                                API -- api gateway, lambda and javascript
                            All learnt on my own with help from documentations and google.
                        </pre>

                        <p>
                            <Button variant='primary' onClick={()=>window.open("https://github.com/Heeqcmt","_blank")}> Check out my github</Button>
                        </p>
                    </Container>

                </Jumbotron>
            </footer>
        );

        }
