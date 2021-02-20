import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';
import MiEscuelaConmigo from '../../assets/MiEscuelaConmigo.png';
import MyPortfolio from '../../assets/Portfolio2020.png';
import Movienator from '../../assets/Movienator.jpeg';
import WayNene from '../../assets/WayNene.jpeg';
import Caintra from '../../assets/Caintra.png';
import 'react-medium-image-zoom/dist/styles.css';
import Zoom from 'react-medium-image-zoom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt as Link } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    let projects = [
        {title: 'CAINTRA', image: Caintra, description: 'Currently developing solutions for complex requirements with cutting edge technologies using Serverless, AWS and React.', company:'Blue People', link: ''},
        {title: 'Mi Escuela Conmigo', image: MiEscuelaConmigo, description: 'I have created fully functional and complex components, estimated requirements and provided all my effort and compromise with this project', company:'Blue People', link: 'https://miescuelaconmigo.uienl.edu.mx/'},
        {title: 'My Portfolio', image: MyPortfolio, description: `My 2020's Portfolio. I've had a lot of fun writing my portfolio's code, I've fixed a lot of bugs, learned about CSS Media Queries and got a great Flexbox understanding. I now feel cappable of work in bigger web applications whether Front or Backend.`, company:'Personal', link: 'https://github.com/fernando-pineda/my-portfolio'},
        {title: 'WayNené', image: WayNene, description: `A project that I've made as a college assignmennt. Scan a QR code and it will provide information about the place you're visiting. `, company:'Personal', link: 'https://github.com/fernando-pineda/qr-waynene'},
        {title: 'Movienator', image: Movienator, description: 'Search, watch trailers, save and share your opinion with your friends! You can also watch trailers in the discover section. I made this application using React Native, Expo, AsyncStorage and so on', company:'Personal', link: 'https://github.com/fernando-pineda/movie-db'},
    ];

    function renderProjectsCards () {
        return projects.map((element) => {
            return(
                <Card className="project-card">
                    <Container style={{marginLeft: '3%'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p className="project-title">{element.title}</p>
                            <a href={element.link} target="_blank"> <Icon icon={Link} className="link-icon"/> </a>
                        </div>
                        <p className="project-company">{element.company}</p>
                        <Zoom>
                            <Card.Img className="project-image" src={element.image}/>
                        </Zoom>
                        <Card.Body>
                            <p className="project-description">{element.description}</p>
                            
                        </Card.Body>
                    </Container>
                    
                </Card>
                );

        });
    }

    return(
        <Row id="projects" className="projects">
            <Container>
                <Row style={{marginTop: '10%'}}>
                    <Col>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <h4>Projects</h4><a style={{marginTop: '5px', marginLeft: '5px'}} href="#experience">My Experience</a>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginTop: '5%'}}>
                    <Col>
                        <Container className="cards-grid">
                            {renderProjectsCards()}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Row>
        
    )
}