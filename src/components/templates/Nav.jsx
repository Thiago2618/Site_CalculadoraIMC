import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
import NavLink from 'react-bootstrap/esm/NavLink';

export default props =>
    <Navbar expand="lg" className="navcolor navbar fixed-top" >
        <Container className=''>
            <Navbar.Brand href="#home" className='text-uppercase'>Calculadora IMC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto navcon p-2">
                    <NavLink href="#home" className='text-mute'>Home</NavLink>
                    <NavLink href="#calc" className='text-mute'>Caluladora</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>