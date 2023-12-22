import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="bg-dark ">
      <Container>
        <Navbar.Brand href="#home" className='fw-bolder fs-3 text-success'><i class="fa-brands fa-stack-overflow fa-bounce"></i> PROJECT FAIR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#features" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Contact</Nav.Link>
            
          </Nav>

        </Navbar.Collapse>
        <div>
            <button className='btn btn-outline-success ms-3'>LOG IN</button>
        </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header