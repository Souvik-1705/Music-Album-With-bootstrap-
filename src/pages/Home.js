import React from 'react';
import { Button, Container ,Row,Col, Card} from 'react-bootstrap';

function Home() {
    const tours = [
        { date: "JUL 16", location: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
        { date: "JUL 19", location: "TORONTO, ON", venue: "BUDWEISER STAGE" },
        { date: "JUL 22", location: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
        { date: "JUL 29", location: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
        { date: "AUG 2", location: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
        { date: "AUG 7", location: "CONCORD, CA", venue: "CONCORD PAVILION" },
      ];

  return (
    <Container className='text-center mt-5'>
        <h1>The Generics</h1>
        <div>
            <Button variant='outline-primary' size='lg' className='mt-3'>Get Our Album</Button>
        </div>
        <div>
        <Button variant='outline-light' size='lg' className='mt-2'> ►</Button>
        </div>

        <Row>
            {tours.map((tour)=>(
                <Col md="6" lg="4" className='mb-4'>
                    <Card className='h-100 text-center'>
                        <Card.Body>
                            <Card.Title>{tour.date}</Card.Title>
                            <Card.Text>
                                <strong>{tour.location}</strong>
                                <small>{tour.venue}</small>
                            </Card.Text>
                            <Button variant='primary'>Buy Tickets</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

        <footer className='mt-5' py-3 bg-dark text-white>
            <Container>
                <Row className='text-center'>
                    <Col> <h3>The Generics</h3></Col>
                </Row>
            </Container>  
        </footer>
    </Container>
  )
}

export default Home