import { useRef, useState, useEffect } from "react";
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';

import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useForm, Controller } from "react-hook-form";

import Register from "./Register";

const Login = () => {
    const { login, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data); 
  return (
    <div>
    <Container>
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <Card className="px-4">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-center text-uppercase ">
                Login
              </h2>
              <div className="mb-3 mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="Username">
                    <Form.Label className="text-center">Username</Form.Label>
                    <Form.Control type="text" defaultValue="Enter Username" {...login("username", {required: true})} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Email">
                      <Form.Label className="text-center">Email</Form.Label>
                      <Form.Control type="text" defaultValue="Enter Username" {...register("email", {required: true})} />
                    </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" {...login("password", {required: true})} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-type Password" {...login("confirmPassword", {required: true})} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Log In
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Do you not have an account?{' '}
                    <a href="{Register}" className="text-primary fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default Login