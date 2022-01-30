import React from 'react';
import { Navbar, NavItem, Container, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Navigation(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/creator">Creator</Nav.Link> 
                        <Nav.Link href="/supplier">Supplier</Nav.Link> 
                        <Nav.Link href="/warehouse">Warehouse</Nav.Link> 
                        <Nav.Link href="/logistics">Logistics</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;