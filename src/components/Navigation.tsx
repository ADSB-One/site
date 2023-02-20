import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Navigation extends React.Component {



    render() {
        return (
            <Navbar expand='md' bg='dark' variant='dark' className='justify-content-center'>
                <Container fluid>
                    <Navbar.Brand href='/' className='w-50 me-auto'>ADSB One</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' as='ul' className='w-100'>
                        <Nav className='w-100 justify-content-center'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='https://globe.adsb.one'>Globe</Nav.Link>
                            <Nav.Link href='https://acars.adsb.one'>ACARS</Nav.Link>
                            <Nav.Link href='/getting-started'>Getting Started</Nav.Link>
                            <NavDropdown title='Coverage' id='nav-dropdown-coverage' menuVariant='dark'>
                                <Nav.Link href='/feeder-status'>Feeder Status</Nav.Link>
                                <Nav.Link href='/mlat-map'>MLAT Map</Nav.Link>
                            </NavDropdown>
                            <NavDropdown title='Data' id='nav-dropdown-data' menuVariant='dark'>
                                <Nav.Link href='https://hist.adsb.one'>Historical</Nav.Link>
                                <Nav.Link href='https://github.com/ADSB-One/api/blob/main/README.md'>API</Nav.Link>
                            </NavDropdown>
                            <NavDropdown title='About' id='nav-dropdown-about' menuVariant='dark'>
                                <Nav.Link href='/about'>About</Nav.Link>
                                <Nav.Link href='/partners'>Partners</Nav.Link>
                                <Nav.Link href='/terms-and-conditions'>Terms & Conditions</Nav.Link>
                                <Nav.Link href='/privacy-policy'>Privacy Policy</Nav.Link>
                            </NavDropdown>
                        </Nav>
                        <Container className='d-flex w-100 justify-content-end'>
                            
                        </Container>
                        {/* <Form className='d-flex w-100 justify-content-end'>
                            <Form.Control
                                type='search'
                                placeholder='Mode S hex or registration'
                                className='mx-1'
                                aria-label='Search'
                            />
                            <Button variant='outline-success' className='mx-1'>Search</Button>
                            <Button variant='outline-secondary disabled'>Login</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}