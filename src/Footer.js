import React from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import './index.css'

export default function Footer() {
    
        return (
            <footer>
                <Jumbotron className="jumbo">
                    <Container>
                        <h2>
                            Thank you for checking out my site
                        </h2>
                        <div>
                       
                            This is one of series of projects which aim to showcase my ability to learn and code.<br/>
                            This site showcases the fullstack capability of me.<br/>
                            Technologies used:<br/>
                            &emsp;&emsp;&emsp;&emsp;Frontend -- reactjs<br/>
                            &emsp;&emsp;&emsp;&emsp;Event Scrapping -- python and beautiful soup<br/>
                            &emsp;&emsp;&emsp;&emsp;Database -- python, boto3 and dynamodb<br/>
                            &emsp;&emsp;&emsp;&emsp;API -- api gateway, lambda and javascript<br/>
                            All learnt on my own with help from documentations and google.<br/>
                        
                        </div>

                        <p>
                            <Button variant='primary' onClick={()=>window.open("https://github.com/Heeqcmt","_blank")}> Check out my github</Button>
                        </p>
                    </Container>

                </Jumbotron>
            </footer>
        );

        }
