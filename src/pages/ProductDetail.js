/// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

// Import the same products from Store
const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    type: 'music',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
     
    ],
    reviews: ['Excellent quality!', 'Loved the color scheme.']
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    type: 'music',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
     
    ],
    reviews: ['Very classy!', 'Would buy again.']
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    type: 'music',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
     
    ],
    reviews: ['Vibrant and attractive!']
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    type: 'music',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
    ],
    reviews: ['Cool tone, good vibe.']
  },
  {
    id: 5,
    title: 'T-Shirt',
    price: 19.99,
    type: 'merch',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Shirt.png'
    ],
    reviews: ['Nice fit!', 'Soft fabric, comfortable.']
  },
  {
    id: 6,
    title: 'Coffee Cup',
    price: 6.99,
    type: 'merch',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Cofee.png'
    ],
    reviews: ['Perfect for mornings!', 'Holds heat well.']
  }
];

function ProductDetail() {
  const { id } = useParams();
  const product = productsArr.find(item => item.id === parseInt(id));

  if (!product) {
    return <Container><h3>Product not found.</h3></Container>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Image src={product.imageUrl} fluid className="main-image" />
          <Row className="mt-3">
            {product.images.map((img, index) => (
              <Col key={index} xs={3}>
                <Image src={img} thumbnail />
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={6}>
          <h2>{product.title}</h2>
          <h4>${product.price}</h4>
          <p><strong>Type:</strong> {product.type}</p>

          <div className="mt-4">
            <h5>Reviews:</h5>
            {product.reviews.map((review, index) => (
              <Card key={index} className="mb-2 p-2">
                {review}
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
