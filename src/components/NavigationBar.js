import React, { useContext } from 'react';
import {Navbar,Nav,Container, Badge} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../features/CartProvider';

function NavigationBar() {
    const{cart}=useContext(CartContext);
    const cartCount=cart.reduce((acc,item)=>acc+item.quantity,0);
  return (
    <Navbar bg='dark' variant='dark' expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">The Generics</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/store">Store</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                    <FaShoppingCart size={20}/>
                    <Badge bg='success' className='ms-1'>{cartCount}</Badge>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavigationBar;