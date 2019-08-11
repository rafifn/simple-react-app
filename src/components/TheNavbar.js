import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TheNavbar extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    )
  }
}

export default TheNavbar;