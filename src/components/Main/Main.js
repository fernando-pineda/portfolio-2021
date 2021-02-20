import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Me from '../../assets/Me.jpeg';
import Typed from 'react-typed';
import './Main.css';

export default function Main(){

    return(
    <Row className="main main-margin">
        <Col md={4}>
          <Container>
            <Image src={Me} className="profile-picture" rounded />
          </Container>
        </Col>

        <Col md={8}>
          <Container className="info-container">
            <h1 className="info-name">Fernando Pineda</h1>
            <h4 className="info-iam">I am <Typed strings={['a Software Developer', 'a gamer', 'a friend', 'a great teammate', 'passionate']} typeSpeed={40} backSpeed={50} loop /></h4>
            <a href="#about">About Me</a>

            <Container style={{display: 'flex', flexDirection: 'row'}}>
              <Container style={{marginLeft: '40%'}}>
                <a href="https://github.com/fernando-pineda" className="devicon-github-original-wordmark icon"></a>
                <a href="https://www.linkedin.com/in/fernandopinedadom%C3%ADnguez/" className="devicon-linkedin-plain icon"></a>
              </Container>
            </Container>
          </Container>
        </Col>
      </Row>
    );
}