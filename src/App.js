import { Container } from 'react-bootstrap';
import FloatingButton from './components/FloatingButton/FloatingButton.js';
import FloatingMailTo from './components/FloatingMailTo/FloatingMailTo.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Experience from './components/Experience/Experience.js';
import Education from './components/Education/Education.js';
import Projects from './components/Projects/Projects.js';
import Fade from 'react-reveal/Fade';
import './App.css';
import React from 'react';

function App() {

 
  return (
    
    <Container>

        <Fade left>
          <Main />
        </Fade>
        <Fade bottom>
          <About />
        </Fade>

        <Fade bottom>
          <Experience />
        </Fade>

        <Fade bottom>
          <Education />
        </Fade>

        <Fade bottom>
          <Projects />
        </Fade>

        <FloatingButton id={"#"}/>
        <FloatingMailTo mail={"fernando.pineda2199@gmail.com"}/>

    </Container>
  );
}

export default App;
