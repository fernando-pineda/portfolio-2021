import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Experience.css';
import Devicon from 'devicon';
import BluePeople  from '../../assets/BluePeople.jpeg';

export default function Experience() {
    
    let skills = [
        {title: 'JavaScript', titleIcon: 'javascript-plain colored', type: 'FrontEnd, Backend', description: 'Experienced with JavaScript and its frameworks. Used in real life and personal projects.', icons: ['nodejs-plain-wordmark colored', 'express-original-wordmark','react-original-wordmark colored', 'vuejs-plain-wordmark colored', 'jquery-plain-wordmark colored', 'bootstrap-plain-wordmark colored'], level: 'Intermediate'},
        {title: 'PHP', titleIcon: 'php-plain colored', type: 'Backend', description: `Developed a LMS re-using Chamilo, which is built mostly in vanilla PHP`, icons: ['laravel-plain colored'], level: 'Intermediate'},
        {title: 'Databases', titleIcon: 'mysql-plain colored', type: 'Backend', description: 'Experienced using mostly MySQL. Used Firebase, Postgres and Mongo in personal projects', icons: ["mysql-plain-wordmark", "postgresql-plain-wordmark colored", "mongodb-plain-wordmark colored"], level: 'Intermediate'},
        {title: 'Ubuntu', titleIcon: 'ubuntu-plain-wordmark colored', type: 'Operative System', description: 'Working with Linux as my main O.S has been an amazing experience', icons: ['ssh-original-wordmark', 'vim-plain'], level: 'Intermediate'},
        {title: 'AWS', titleIcon: 'amazonwebservices-original colored', type: 'Cloud Platform', description: 'Experienced in deploying EC2 instances, Cognito User Pools, Lambda Functions, Serverless and DyamoDB', icons: [], level: 'Intermediate'},
        {title: 'Web Design', titleIcon: 'illustrator-line colored', type: 'UX / UI', description: 'Wireframing, persona and design using Figma, Illustrator and Adobe Xd to elaborate mocks', icons: [], level: 'Begginer'},
    ];

    let experience = [
        {title: 'Blue People', picture: BluePeople ,date: 'Sep 20 - Today', description: 'Delivering high quality, readable and reusable code following the best practices. Currently working with Serverless, React and AWS.', position: 'Full Stack Software Developer' }
    ];


    const renderSkillsCards = () => {
        return skills.map((element, index) => {
            return (
                <Card class="card-skill">
                    <Card.Body class="card-separator">
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <i className={`devicon-${element.titleIcon} icon-title`}></i>
                            <p className="skill-title">{element.title}</p>
                        </div>
                        <p className="skill-type">{element.type}</p>
                        <p className="skill-description">{element.description}</p>
                        <p className="skill-level">{element.level}</p>
                        <div className="icons-grid">
                            {element.icons.map((icon) => {
                                return <i key={icon} className={`devicon-${icon} icon`}></i>
                            })}
                        </div>
                    </Card.Body>
                </Card>
            );
        });
    }

    const renderExperienceCards = () => {
        return experience.map((element, index) => {
            return(
                    <Container className="experience-card">
                        <Row style={{marginTop: '10px'}}>
                            <Col md={2}>
                                <Image src={element.picture} className="company-picture" rounded />
                            </Col>
                            <Col md={10}>
                                <Container style={{display: 'flex', flexDirection: 'row', margin: 0, padding: 0}}>
                                    <h4 style={{marginBottom: 0}}>{element.title}</h4>
                                    <p className="experience-date">{element.date}</p>
                                </Container>
                                <p className="experience-position">{element.position}</p>    
                                <p className="experience-description">{element.description}</p>
                            </Col>
                        </Row>
                    </Container>
            );
        });
    }

    return(
        <Row id="experience" className="experience">
            <Container>
                <Row style={{marginTop: '5%'}}>
                    <Col>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <h4>Experience</h4><a style={{marginTop: '5px', marginLeft: '5px'}} href="#about">About Me</a>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginTop: '5%'}}>
                    <Col>
                        <Container>
                            {renderExperienceCards()}
                        </Container>
                        <Container className="cards">
                            {renderSkillsCards()}
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container className="anchor-education">
                            <a href="#education">Education</a>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}