import React, { useContext } from 'react'
import { Col, Container, Row ,Card, Button} from 'react-bootstrap'
import { CartContext } from '../features/CartProvider'

function Cart() {
    const{cart,dispatch}=useContext(CartContext);
    const totalPrice=cart.reduce((acc,item)=>acc+item.price*item.quantity,0);
  return (
    <Container className='store'>
        <h2 className='text-center mb-4'>🛒 Cart Items</h2>
        <Row>
            {cart.length===0 ?
            (<Col>
            <p>Your Cart is Empty!!</p>
            </Col>) :
            (cart.map((item)=>(
                <Col sm={12} md={6} lg={4} className='mb-4'>
                <Card>
                    <Card.Img variant='top' src={item.imageUrl} alt="cart-photo"/>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>Price: ${item.price}</Card.Text>
                        <Card.Text>Quantity: {item.quantity}</Card.Text>
                        <Button variant='danger' onClick={()=>dispatch({type:'Remove',product:item})}>Remove</Button>
                    </Card.Body>
                </Card>
                </Col>
            )))
            }
        </Row>
        {cart.length>0 && (
            <Row className='justify-content-end mt-4'>
                <Col md={4}>
                <Card bg='light'>
                    <Card.Body>
                        <Card.Title>Total Price</Card.Title>
                        <h4>${totalPrice.toFixed(2)}</h4>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        )}
        
    </Container>
  )
}

export default Cart