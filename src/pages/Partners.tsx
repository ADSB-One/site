import * as React from 'react';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';

export default class Partners extends React.Component {

    render() {
        return (
            <Container fluid className='h-100'>
                <Container className='py-3 text-center'>
                    <Row className='py-lg-4'>
                        <Col className='col-lg-6 col-md-8 mx-auto'>
                            <h1 className='fw-light'>Partners</h1>
                            <p className='lead text-muted'>
                                ADSB One partners have access to data at higher poll rates.<br/>Contact for more information.
                            </p>
                            
                            <a className='btn btn-outline-primary my-2' href='mailto: partners@adsb.one'>Contact</a>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='row-cols-1 row-cols-sm-2 row-cols-md-4 g-3'>
                        <Col>
                            <Card className='shadow-sm'>
                                <Card.Img src='https://avatars.githubusercontent.com/u/57520635'/>
                                <Card.Body>
                                    <Card.Title>Airframes.io</Card.Title>
                                    <Card.Text>aircraft-related aggregation service that receives ACARS, VDL, HFDL, and SATCOM data from volunteers around the world.</Card.Text>
                                    <ButtonGroup>
                                        <Button variant='outline-secondary' href='https://airframes.io'>Home</Button>
                                        <Button variant='outline-secondary' href='https://github.com/airframesio'>GitHub</Button>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}