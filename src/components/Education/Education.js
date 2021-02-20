import React from 'react';
import {Row, Col, Container, Image} from 'react-bootstrap';
import './Education.css';
import College from '../../assets/College.png';
import EFset from '../../assets/EFset.jpeg';
import Udemy from '../../assets/Udemy.png';
import OOPT from '../../assets/OOPT_Certificate.pdf';

export default function Education () {

    let education = [
        {title: 'Universidad Tecnológica Metropolitana', picture: College, date: 'Aug 19 - Today', type: 'Certificate of Studies',  major: 'Virtual Environments and Digital Businesses Technician', link: 'javascript:void(0)'},
        {title: 'UTM OOPT Proof ', picture: College, date: 'Feb 21', type: 'Certificate of Standard English',  major: 'C1 Proficient', link: OOPT, download: true},
        {title: 'EF SET Certificate', picture: EFset, date: 'Jan 21', type: 'Certificate of Standard English', major: '76/100 (C2 Proficient)', link: 'https://www.efset.org/cert/abE1Tr'},
        {title: 'User Experience Design Essentials', picture: Udemy, date: 'Jan 21', type: 'Course on Udemy', major: 'UX/UI', link: 'https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/'}
    ];

    const renderEducationCards = () => {
        return education.map((element, index) => {
            return(
                    <Container className="experience-card">
                        <Row style={{marginTop: '10px'}}>
                            <Col md={2}>
                                <Image src={element.picture} className="education-picture" rounded />
                            </Col>
                            <Col md={10}>
                                <Container style={{display: 'flex', flexDirection: 'row', margin: 0, padding: 0}}>
                                    <h4 style={{marginBottom: 0}}>{element.title}</h4>
                                    <p className="experience-date">{element.date}</p>
                                </Container>
                                <p className="experience-position">{element.major}</p>
                                {element.download ? 
                                    <a href={`${element.link}`} download className="experience-description">{element.type}</a>
                                :
                                    <a href={`${element.link}`} className="experience-description">{element.type}</a>
                                }
                                
                            </Col>
                        </Row>
                    </Container>
            );
        });
    }

    return(
        <Row id="education" className="education">
            <Container>
                <Row style={{marginTop: '5%'}}>
                    <Col>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <h4>Education</h4><a style={{marginTop: '5px', marginLeft: '5px'}} href="#experience">My Experience</a>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginTop: '5%'}}>
                    {renderEducationCards()}
                </Row>
                <Row>
                    <Col>
                        <Container className="anchor-experience">
                            <a href="#projects">Projects</a>
                        </Container>
                    </Col>
                </Row>
            </Container>
            
        </Row>
    );
}