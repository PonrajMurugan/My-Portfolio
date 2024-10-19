import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './port.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from '@iconify/react';
import image from '../Images/ponraj.jpg';
import image1 from '../Images/1724512686269.jpg';
import image2 from '../Images/1724556458399.jpg';
import project from '../Images/Screenshot 2024-10-19 110315.png';
import project2 from '../Images/Screenshot 2024-10-19 112629.png';
import project3 from '../Images/Screenshot 2024-10-19 112816.png';
import project4 from '../Images/Screenshot 2024-10-19 113022.png';


AOS.init();

const Portfolio = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mainfont">
        <div className="container">
          <a className="navbar-brand" href="/"><p className='' style={{fontWeight:"700"}}>Ponraj</p></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" id="solo" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">Skill</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pro">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <section className="banner banfont" id="home">
        <section className="container">
          <section className="row">
            <div className="col-12 col-sm-6">
              <div className="navCont">
                <h1 data-aos="zoom-in" data-aos-duration="500">It's me <span className="saran">Ponraj Murugan</span></h1>
                <h2 data-aos="zoom-in" data-aos-duration="2000">Front-End-Developer</h2>
                <div className="solo">
                  <a className="git" data-aos="zoom-in" data-aos-duration="2000" href="https://www.linkedin.com/in/ponraj-m-996a162a6" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ion:logo-linkedin" className="navLogo" /> LinkedIn
                  </a>
                  <Icon data-aos="zoom-in" data-aos-duration="2000" className="navLogo down" icon="" />
                  <a className="git navLogo" data-aos="zoom-in" data-aos-duration="2000" href="https://github.com/PonrajMurugan" target="_blank" rel="noopener noreferrer">
                    <Icon icon="logos:github-octocat" /> GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="navImg">
                <img src={image} alt="Ponraj"  />
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* About Section */}
      <section className="about aboutfont" id="about">
        <section className="container">
          <section data-aos="fade-down" data-aos-duration="1000">
            <div className="abt">
              <h2>About</h2>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div data-aos="flip-up" data-aos-duration="1000" className="abtBorder">
                  <img className="borImg" src={image1} alt="Ponraj" width="" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div data-aos="flip-down" data-aos-duration="1000" className="abtSty mt-5">
                  <p><span>Birthday :</span> 03:02:2000 </p>
                  <p><span>Place :</span> Poolangulam </p>
                  <p><span>Phone :</span> +91 8681857753</p>
                  <p><span>Age :</span> 23 </p>
                  <p><span>Degree :</span> Electronics Engineering (88%)</p>
                  <p><span>Email :</span> Ponraj@outlook.com</p>

                  <p><span>Course :</span> Front End Developer</p>
                 

                

                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* Skills Section */}
      <section className="about talent skillfont" id="skill">
        <section className="container">
          <section data-aos="fade-down" data-aos-duration="1000">
            <div className="abt">
              <h2>Skills</h2>
            </div>
            <div className="bar" data-aos="flip-left" data-aos-duration="1000">
              <div className="row">
                <div className="col-md-6">
                  <h2><Icon icon="vscode-icons:file-type-html" /> HTML </h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                  </div><br />
                  <h2><Icon icon="logos:javascript"/> JAVA SCRIPT </h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
                  </div><br />
                  <h2><Icon icon="vscode-icons:file-type-reactjs" /> REACT JS</h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
                  </div><br />
                </div>
                <div className="col-md-6">
                  <h2><Icon icon="vscode-icons:file-type-css" /> CSS </h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
                  </div><br />
                  <h2><Icon icon="logos:bootstrap" /> BOOTSTRAP </h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}></div>
                  </div><br />
                  <h2><Icon icon="material-symbols:keyboard-alt-outline-rounded" /> TYPE WRITING </h2>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{ width: '99%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* Projects Section */}
      <section className="about talent projectfont" id="pro">
        <section className="container">
          <section data-aos="fade-down" data-aos-duration="1000">
            <div className="abt">
              <h2>Projects</h2>
            </div>
            <div className="row">
              {/* Project 1 */}
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 dflex ">
                <div className="portImg" style={{marginRight:"25px"}}>
                  <img src={project} alt="Project 1" />
                  <h5 style={{color:"black" , paddingTop:"10px"}}>E-commerce Site</h5>
                  {/* <p style={{color:"black"}}>React Js</p> */}
                  {/* <div className="portCont">
                    <h5>Ecommerce Site</h5>
                    <p>React Js</p>
                  </div> */}
                </div>

                <div className="portImg" style={{marginRight:"25px"}}>
                  <img src={project2} alt="Project 1" />
                  <h5 style={{color:"black" , paddingTop:"10px"}}>Books Store -(API) Mongodb</h5>
                  {/* <p style={{color:"black"}}>React Js</p> */}
                  {/* <div className="portCont">
                    <h5>Ecommerce Site</h5>
                    <p>React Js</p>
                  </div> */}
                </div>

                <div className="portImg" style={{marginRight:"25px"}}>
                  <img src={project3} alt="Project 1" />
                  <h5 style={{color:"black" , paddingTop:"10px"}}>Bootstrap Site - Static</h5>
                  {/* <p style={{color:"black"}}>React Js</p> */}
                  {/* <div className="portCont">
                    <h5>Ecommerce Site</h5>
                    <p>React Js</p>
                  </div> */}
                </div>

                <div className="portImg" style={{marginRight:"25px"}}>
                  <img src={project4} alt="Project 1" />
                  <h5 style={{color:"black" , paddingTop:"10px"}}>React-Redux (API-Get & Post)</h5>
                  {/* <p style={{color:"black"}}>React Js</p> */}
                  {/* <div className="portCont">
                    <h5>Ecommerce Site</h5>
                    <p>React Js</p>
                  </div> */}
                </div>

              </div>
            </div>
          </section>
        </section>
      </section>

      {/* Contact Section */}
      <section className="contactOut contactfont" id="contact">
      <section className="container">
        <section className="contactIn" data-aos="fade-down" data-aos-duration="1000">
          <div className="contHead">
            <h2>Contact</h2>
          </div>
          <div className="row">
            {/* Address Section */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div data-aos="zoom-out-down" data-aos-duration="1000" className="cont">
                <Icon className="contIcon" icon="material-symbols:location-on-outline-rounded" />
                <h3>Address</h3>
                <p>3/267 d Nellaiyappapuram Road Poolangulam</p>
              </div>
            </div>
            {/* Email Section */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <div data-aos="zoom-out-down" data-aos-duration="2000" className="cont">
                <Icon className="contIcon" icon="material-symbols:mail-outline-sharp" />
                <h3>Email Us</h3>
                <p>Ponraj@outlook.com</p>
                <a className="deco" href="mailto:ponrajmurugan3787@outlook.com">MAIL</a>
              </div>
            </div>
            {/* Phone Section */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 call">
              <div data-aos="zoom-out-down" data-aos-duration="3000" className="cont">
                <Icon className="contIcon" icon="ic:baseline-call" />
                <h3>Call Us</h3>
                <p>+91 8681857753</p>
                <a className="deco" href="tel:8681857753"> CALL </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>


    <section className='sectionCopy contactfonts'>

      <div style={{textAlign:"center", fontWeight:"700"}}>
        <p> © Copyright @ Ponraj-Murugan 2024 </p>
      </div>

    </section>

    </div>
  );
};

export default Portfolio;
