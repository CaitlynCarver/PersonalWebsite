import React from 'react';
import '../App.scss';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Home() {
    return (
        <div className="A2">
            <div className="jumbo">
                <div class="neon-wrapper">
                    <div class="neon-text">Caitlyn   C</div>
                </div>
                <div className="spacy">
                    <p className="lead">Young professional with a passion for data, coding, and puzzles</p>
                </div>
                <div className="spacy">
                    <Button color="primary" size="lg" href="#con">
                        Contact
                    </Button>
                    <Button color="primary" size="lg" href="#pro">
                        Projects
                    </Button>
                    <Button color="primary" size="lg" href="#resume">
                        Resume
                    </Button>
                    <Link to="../Components/Canterbury">
                        <Button color="primary" size="lg" href="#Canterbury">
                            Canterbury Puzzle
                        </Button>
                    </Link>
                </div>
                <div className="spacy">
                    <div className="Iconspace">
                        <a href={"https://github.com/CaitlynCarver"}>
                            <FaGithub size={30} style={{ color: "#af9a7d" }}/> 
                        </a>
                        <a href={"https://www.linkedin.com/in/caitlyn-carver-618379104/"}>
                            <FaLinkedinIn size={30} style={{ color: "#af9a7d" }}/>
                        </a>
                        <a href={"https://github.com/Mentaltrain"}>
                            <FaGithub size={30} style={{ color: "#af9a7d" }}/>
                        </a>
                    </div>
                </div>
            </div>
            
            <div id="resume"></div>

            <div class="row">
                <div class="neon-text3">Resume-is <br></br>a-must</div>
                <div class="tech-skills2">
                    <h2>Technical Skills</h2>
                    <ul>
                        <li className="bullets"> Languages:  Java, Python, R, JavaScript, D3, HTML, CSS, SQL, MongoDB, C, Fortran </li>
                        <li className="bullets"> Tools/Frameworks:  React.js, TensorFlow, Node.js, Pandas, Spark, Numpy, MLFlow, REST APIs </li>
                        <li className="bullets"> Database:  MongoDB, Postgres, mySQl, sql type based databases </li>
                        <li className="bullets"> Cloud Tools:  Firebase, AWS-EC2 (Cloud Computing) </li>
                        <li className="bullets"> Design:  UX, UI </li>
                        <li className="bullets"> Other:  Matlab, Vim, Visual Studio, GitHub, CKAN, Git, Command Shell </li>
                        <li className="bullets"> Operating Systems:  Windows, Kali Linux, IOS </li>
                        <li className="bullets"> General PC:  Word, Microsoft Excel, PowerPoint, Photoshop, Music Software, Video Editing Software</li>
                    </ul>
                </div>
            </div>
            <div class="tech-skills" >
                <div id="newlist">
                <h2>Experence</h2>
                <h3>July 2021 – August 2021     OrdrAI	Ann Arbor, MI</h3>
                <h3>Chat Bot/Machine Learning Intern (paid, full-time)</h3>
                <ul className='ul2'>
                    <li className="bullets">Helped develop text to order chat bot for customer as a third party platform</li>
                    <li className="bullets">Aka anaylsis for customer intake text and coded automated processes for creation of Aka’s</li>
                    <li className="bullets">Used revention and olo API deveploment to aws backend databases and Data mulipulation </li>
                    <li className="bullets">Worked mostly in python with scripting with Automated processes overall</li>
                </ul>

                <br></br>
                <h3>Dec 2020 – Current     Krasnow Institute GMU	Fairfax, VA</h3>
                <h3>Software Engineer and Data Scientist (paid, part-time)</h3>
                <ul>
                    <li className="bullets">Internship supporting the Research Neuroscience Laboratory, with grant opportunities</li>
                    <li className="bullets">Developing human spatial navigation tracking app for early-onset Alzheimers</li>
                    <li className="bullets">Environment/Software:  Native React, Expo, Node. Js for backend connections to model</li>
                    <li className="bullets">Tensorflow with RNN Modeling for finding common pathing (Real Time)(AI, NLP), with over TB of data processing</li>
                    <li className="bullets">Argo Cluster, High Performace compute cluster (super computer) with George Mason’s Office of Research Computing</li>
                    <li className="bullets">Work as Lead for the team while using agile software development and Version Control for Code </li>
                </ul>
                <br></br>

                <h3>July 2020 – Dec 2020   Ninja Analytics, Inc.	Leesburg, VA</h3>
                <h3>Data Science Intern (Paid, full-time summer; part-time fall)</h3>
                <ul>
                    <li className="bullets">Utilized Python to scrape 100s of documents/data sets from the web</li>
                    <li className="bullets">Loaded data to Open-Source metadata tool (CKAN)</li>
                    <li className="bullets">Implemented multiple approaches to wrangling datasets from open-source government storage websites</li>
                    <li className="bullets">Created CKAN development website in AWS</li>
                    <li className="bullets">Spent time troubleshooting Tableau integration functionality into CKAN</li>
                    <li className="bullets">Environment/Software:  AWS, Linux, AWS EC2, Python, CKAN, Tableau</li>
                </ul>
                <br></br>

                <h3>June 2019 – Aug 2020    ManTech International	Herndon, VA</h3>
                <h3>Data Science Intern (Paid, full-time)</h3>
                <ul>
                    <li className="bullets">Worked on AWS EC2 instance to create a prototype data analytics platform with distributed computing</li>
                    <li className="bullets">Participated in architecture design and all aspects of the software development lifecycle</li>
                    <li className="bullets">Structured big data manipulation with and cleanup with Pandas</li>
                    <li className="bullets">Performed NLTK’s Sentiment analysis to classify data</li>
                    <li className="bullets">Used NumPy to place data into multiple data structures</li>
                    <li className="bullets">Worked with open-source APIs (such as Lexicon NRC) to analyze behavioral patterns</li>
                </ul>
                <br></br>
                </div>
            </div>

            <h4>Projects and Code</h4>
            <div className="Projects" id="pro">
                    <div class="project-buttons">
                        <div className="col">
                            <a href={"https://github.com/OrdrInc/olo"} target="_blank" rel="noopener noreferrer">
                                <Button color="primary2" size="lg">OrdrInc Internship 2021</Button>{' '}
                            </a>
                        </div>
                        <div className="col">
                            <a href={"https://github.com/CaitlynCarver/RememberRoute"} target="_blank" rel="noopener noreferrer">
                                <Button color="primary2" size="lg">Research Project 2020</Button>{' '}
                            </a>
                        </div>
                        <div className="col">
                            <a href={"https://mentaltrain.github.io/"} target="_blank" rel="noopener noreferrer">
                                <Button color="primary2" size="lg">Mantech Internship 2019</Button>{' '}
                            </a>
                        </div>
                </div>
            </div>

            <div className="ContactSec" id="con">
                <div className="column">
                    <div class="neon-wrapper1">
                        <div class="neon-text1">Contact</div>
                    </div>
                    <br></br>
                    <br></br>
                    <p className="pwhite">Email: Caitlyn.carver6@gmail.com</p>
                    <p className="pwhite">Email: Ccarver4@gmu.edu</p>
                    <p>Drosoula Kountouris</p>
                </div>
                <div className="column">
                    <div href="https://www.buymeacoffee.com/CaitlynC" class="neon-wrapper1">
                        <div href="https://www.buymeacoffee.com/CaitlynC" class="neon-text1">Coffee</div>
                    </div>
                    <br></br>
                    <br></br>
                    <p className="pwhite">Hey if you aren't going to hire me,</p>
                    <p className='pwhite'>at least buy me a coffee with the icon on the right bottom corner</p>
                </div>
            </div>

        </div>

    );
}

export default Home;