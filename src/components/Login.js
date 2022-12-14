import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';
export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const handleCreateId = () => {
    onIdSubmit(uuidV4());
  };
  return (
    <>
      <Container
        className="align-items-center d-flex"
        style={{ height: '100vh' }}
      >
        <Form onSubmit={handleSubmit} className="w-100">
          <Form.Group>
            <Form.Label> Enter Your Id</Form.Label>
            <Form.Control type="text" ref={idRef}></Form.Control>
          </Form.Group>
          <Button type="submit" className="m-3">
            Login
          </Button>
          <Button onClick={handleCreateId} variant="secondary">
            Create New Id
          </Button>
        </Form>
      </Container>
    </>
  );
}
