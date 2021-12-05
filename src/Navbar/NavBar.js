import React from 'react'
  
//import {Container, Nav,NavDropdown,Navbar} from 'react-bootstrap' //aka trayendo toda la libreria de  react-bootstrap /'Muy pesado'
import Navbar from 'react-bootstrap/Navbar'  //de es forma solo estoy trayendo un componente a la vez de  la libreria /RECOMENDABLE 'Mas liviano'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
//import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
    return (
        
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Link to="/">
  <Navbar.Brand>
    ECOMMERCE
 </Navbar.Brand>
 </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/categoria/Zapatillas">
      <Nav.Link href="#features">ZAPATILLAS</Nav.Link>
      </Link>

      <Link to="/categoria/Gorros">
      <Nav.Link href="#pricing">GORRAS</Nav.Link>
      </Link>
       

       <Link to="/categoria/Polos">
       <Nav.Link href="#pricing">POLOS</Nav.Link>
       </Link>
     
      
      {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>*/}
    </Nav>
    <Nav>
      
      <Link to="/cart">

      <CartWidget/>
      </Link>
          
    
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        
    )
}

export default NavBar
