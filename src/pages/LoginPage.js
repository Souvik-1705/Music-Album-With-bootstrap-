// pages/LoginPage.js
import React, { useRef, useState, useContext } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/AuthContext';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeZKmUH69ry139zSe8-iGfCEjTC1813o4`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || 'Authentication Failed!');
      }

      // Save token in context and localStorage
      authCtx.login(data.idToken);
      localStorage.setItem('token', data.idToken);

      // Redirect to products page
      navigate('/store');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: '400px', marginTop: '50px' }}>
      <Card.Body>
        <h2 className="text-center mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={submitHandler}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required ref={emailRef} />
          </Form.Group>
          <Form.Group id="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required ref={passwordRef} />
          </Form.Group>
          <Button className="w-100 mt-4" type="submit">
            Log In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginPage;
