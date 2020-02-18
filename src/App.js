import React from 'react';
import './App.css';
import { HashRouter, Router } from 'react-router-dom';
import Nav from './Components/NavbarPage'
import { Button} from 'reactstrap';
import res from './resume.png';
import face from './face1.png';
import coffee from './coffee.png';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function App() {
  var element = document.getElementById("con");
  const handleClick = () =>
          element.scrollIntoView({
          behavior: 'smooth'
  });
  return (
    <div className="App">
      <HashRouter>
      <Nav></Nav>
      <div className="jumbo">
            <div class="neon-wrapper">
                <div class="neon-text">"DC"<br></br>Scientist</div>
            </div>
            <br></br>
            <p className="lead">When you put a Data and Computer Scientist together</p>
            <br></br>
            <Button color="primary" size="lg" href="#con" >Contact</Button>{' '}
            <Button color="primary" size="lg" href="#pro" >Projects</Button>{' '}
            <Button color="primary" size="lg" href="#resume" >Resume</Button>{' '}
            
      </div>
      
      <div class="row" id="resume">
          <div class="column">
            <img alt="resume" src={res} ></img>
          </div>
          <div class="column">
            <div class="neon-text">Resume-is <br></br>a-must</div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 id="pro" >Data Science Projects:</h2>
            <br></br>
            <Button color="primary2" size="lg" disabled>AI: in production</Button>{' '}
            <br></br>
            <br></br>
            <Button color="primary2" size="lg" href="https://mason.gmu.edu/~ccarver4/">CDS Model Website</Button>{' '}
            <br></br>
            <br></br>
            <Button color="primary2" size="lg" href="https://mentaltrain.github.io/" >Internship 2019</Button>{' '}
          </div>
          
      </div>

      <div className="ContactSec" id="con">
        <div className="col">
          <img alt="face" src={face} className="roundimg"></img>
        </div>
        <div className="col">
            <div class="neon-wrapper1">
                <div class="neon-text1">Contact</div>
            </div>
            <br></br>
            <br></br>
            <p>Email: Caitlyn.carver6@gmail.com</p>
            <p>Email: Ccarver4@gmu.edu</p>
        </div>
        <div className="col">
            <div href="https://www.buymeacoffee.com/CaitlynC" class="neon-wrapper1">
                <div href="https://www.buymeacoffee.com/CaitlynC" class="neon-text1">Coffee</div>
            </div>
            <br></br>
            <br></br>
            <p>Hey if you aren't going to hire me, at least buy me a coffee</p>
            <FaAngleDown style={{ color: "white", fontSize: "50px"}}></FaAngleDown>
            <br></br>

            <a href="https://www.buymeacoffee.com/CaitlynC">
              <img alt="coffee" src={coffee} className="roundimg2" ></img>
            </a>
        </div>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
