import React, { useContext, useState } from 'react'
import { Row,Col, Container, Button, Card, Alert} from 'react-bootstrap';
import { CartContext } from '../features/CartProvider';

function Store() {
    const[showAlert,setShowAlert]=useState(false);
    const productsArr = [
        {
          id: 1,
          title: 'Colors',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
          id: 2,
          title: 'Black and white Colors',
          price: 50,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        { 
          id: 3,
          title: 'Yellow and Black Colors',
          price: 70,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
          id: 4,
          title: 'Blue Color',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        },
      ];

      
      const merchArr = [
        {
          id: 1,
          title: 'T-Shirt',
          price: 19.99,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
        },
        {
          id: 2,
          title: 'Coffee Cup',
          price: 6.99,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
        },
      ];

      const{dispatch}=useContext(CartContext);

      const handleAddToCart=(product)=>{
        dispatch({
            type: 'Add',
            product
        })
        setShowAlert(true);
        setTimeout(()=>setShowAlert(false),2000)
      }

  return (
    <Container className='album'>
        {showAlert && (
            <Alert variant='success'>
                Product is Added to Cart!
            </Alert>
        )}

        <h2>MUSIC</h2>
        {productsArr.map((product)=>(
            <Row>
                <Col md={3} className='product-card'>
                <Card>
                    <Card.Img variant='top' src={product.imageUrl}/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Button onClick={()=>handleAddToCart(product)}>Add To Cart</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row> 
        ))}

<h2 className='store-title'>MERCH</h2>
        <Row className='merch-list'>
            {merchArr.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3} className='mb-4'>
                    <Card>
                        <Card.Img variant="top" src={product.imageUrl} alt="merch-image" />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>${product.price}</Card.Text>
                            <Button 
                                variant="primary" 
                                onClick={() => dispatch({ type: "Add", product })}
                            >
                                Add to Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Store