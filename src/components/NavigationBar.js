
import React, { useContext } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
import { CartContext } from '../features/CartProvider'; 
import { FaShoppingCart } from 'react-icons/fa';

const NavigationBar = () => {
  const authCtx = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); 

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/store">
          <Navbar.Brand>MyStore</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="/store"  style={{ color: 'white', marginLeft: '20px', textDecoration: 'none', fontSize: '18px' }}>Store</Link>
            <Link to="/about" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none', fontSize: '18px' }}>About</Link>
            {!authCtx.isLoggedIn && <Link to="/login" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none', fontSize: '18px' }}>Login</Link>}

            {authCtx.isLoggedIn && <Link to="/contact" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none', fontSize: '18px' }}>Contact</Link>}
            
            
            <Link to="/cart" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <FaShoppingCart style={{ fontSize: '24px' }} />
              <i className="fa fa-shopping-cart" style={{ fontSize: '24px', color: 'white' }}></i>
              <Badge pill variant="danger" style={{ marginLeft: '5px' }}>
                {cartItemCount > 0 ? cartItemCount : '0'}
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

