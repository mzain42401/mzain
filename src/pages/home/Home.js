import React from "react";
import "./home.css";
import image from "../../images/me.png";
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import Typewriter from "typewriter-effect";




// import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="homeContainer">
        <div className="homeCenterDiv">
          <div className="homeContentDiv">
            <h1>
              Hi, I'm Zain
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <div className="typewriter">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Freelancer","UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <p>
              A passionate Front-end Developer 🚀 having an experience
              of building Web and Mobile applications with JavaScript / Reactjs
              / Nextjs and some other cool libraries and
              frameworks.
            </p>

            <button className="homeContactBtn">CONTACT ME</button>
          </div>

          <div className="homeImageDiv">
            <div className="myimage">

            <img src={image} alt="My pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
