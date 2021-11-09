
import React, { useEffect } from "react";
import logoPath from '../assets/horizontal-logo.svg';
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

const Header = (props) => {

  useEffect(() => {

  }, [])

  return (
    <div style={style.container}>
      <Col>
        <div style={style.logoWrapper}>
          <Link to="/home" style={{ color: "#E50914", fontFamily: "bebas neue" }}>
            <img src={logoPath} alt={"logo"} />
          </Link>
        </div>
      </Col>
      <Col md="auto">
        <div>
          <Form className="d-flex">
            <Form.Group className="me-2" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button className="ml-4" variant="primary" type="submit">
              Submit
            </Button>
          </Form></div>
      </Col>
    </div>
  )
}

const style = {
  container: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    background: '#ffffff',
    padding: '8px 16px',
    boxShadow: '0px 8px 80px rgba(0, 0, 0, 0.06)',
    zIndex: '4'
  },
}

export default Header