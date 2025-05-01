import React from 'react';
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


function Contact() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
          ...prev,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch('https://react-https-2a419-default-rtdb.firebaseio.com//contacts.json', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          }
        });
    
        if (response.ok) {
          alert("Thank you for contacting us!");
          setUserData({ name: '', email: '', phone: '' });
        } else {
          alert("Something went wrong. Please try again.");
        }
      };
  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
    <h2>Contact Us</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Your phone number"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  )
}

export default Contact;