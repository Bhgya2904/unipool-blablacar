import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Assuming you have a CSS file for styling
const Footer = () => {
  return (
    <footer className="app-footer py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About RideShare</h5>
            <p>
              India's leading ride-sharing platform connecting drivers with empty 
              seats to passengers looking for a ride.
            </p>
          </Col>
          
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#how-it-works" className="text-white">How it works</a></li>
              <li><a href="#safety" className="text-white">Safety</a></li>
              <li><a href="#trust" className="text-white">Trust</a></li>
            </ul>
          </Col>
          
          <Col md={4} className="mb-3">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#facebook" className="text-white me-3"><FaFacebook size={24} /></a>
              <a href="#twitter" className="text-white me-3"><FaTwitter size={24} /></a>
              <a href="#instagram" className="text-white"><FaInstagram size={24} /></a>
            </div>
            <p className="mt-2">support@rideshare.in</p>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} RideShare. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;