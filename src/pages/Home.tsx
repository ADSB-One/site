import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
          <Container fluid className='text-center mx-auto h-100' style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('https://www.thedrive.com/content/2022/01/Planes-At-Gates-Airport.jpg')"}}>
              <Row className='justify-content-md-center overflow-auto'>
                {/* <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center text-white'> */}
                <Col className='text-center text-white'>
                  <h1 className='display-1 mb-3'>ADSB One</h1>
                    <p className='lead mb-5 display-6'>A one-stop shop for all aero-related information and an aggregator
                    for aero feed data to reduce feeder bandwidth usage, infrastructure duplication, and costs across sites with similar 
                    functions.</p>
                    <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                      <Button variant='light' size='lg' className='px-3 gap-3' href='/about'>Learn More</Button>
                      <Button variant='light' size='lg' className='px-3' href='/getting-started'>Getting Started</Button>
                      <Button variant='light' size='lg' className='px-3' href='/partners'>Partners</Button>
                    </div>
                </Col>
              </Row>
          </Container>
        );
    }
}