import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NoPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className='my-auto text-center'>
                <h2>Nothing to see here.</h2>
                <p>
                    <Button variant='secondary' href='/'>Go Home</Button>
                </p>
            </Container>
        );
    }
}