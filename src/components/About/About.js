import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';
import Friends1 from '../../assets/Friends1.jpeg';
import Family1 from '../../assets/Family1.jpeg';
import Friends2  from  '../../assets/Friends2.jpeg';

export default function About() {

    let images = [{img: Friends1, desc: 'My brother, friends and I at the basketball court' }, {img: Friends2, desc: 'School friends, the best part of college' }, {img: Family1, desc: 'My family is the most important thing in my life' }];

    const generateImagesGrid = () => {
        return images.map((element, index) => {
            return (<Card className="card-animated" key={index}>
                        <Card.Img variant="top" src={element.img} />   
                        <small className="images-desc">{element.desc}</small>
                    </Card> );
        });
    }

    return(
        <Row id="about" className="about">
            <Container>
                <Row>
                    <Col style={{marginTop: '10%'}}>
                        <h4>About Me</h4>
                    </Col>
                </Row>

                <Row style={{marginTop: '5%'}}>
                    <Col>
                        <Container className="cards">
                            {generateImagesGrid()}       
                            <Card>
                                <Card.Body>
                                    <p className="about-me">I describe myself as a highly motivated and passionate Software Developer who loves his career and often gets inspired by others. Dedicated, careful and high attentive to details, always learning and available to offer my help. I love spending my spare time with my family and friends, reading books or learning about new technologies.</p>  
                                    <a href="#experience">My Experience</a>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Container>
            
        </Row>
    )
}