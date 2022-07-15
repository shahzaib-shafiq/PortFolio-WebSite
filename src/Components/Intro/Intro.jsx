import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  // context


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hi I am</span>
          <span>Shahzaib Shafiq</span>
          <span>
            Frontend Developer with Moderate  Experience In Web Design
            and Development, 
            Producting  Quality work
          </span>
        </div>
        
        <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire Me</button>
          </Link>
       
        {/* social icons */}
        <div className="i-icons">     
          
          
          
          <a href="https://github.com/shahzaibshafiq100?tab=repositories"><img src={Github} alt="" /></a>
          <a href="https://www.upwork.com/freelancers/~0135fe4da12a9f56d2"><img src={Upwork} alt="" /></a>
          <a href="https://www.linkedin.com/in/shahzaib-shafiq-6a0ab9125/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.fiverr.com/shahzaibshafiq8?up_rollout=true"><img src={Fiver} alt="" /></a>

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />

        <img src={boy} alt="" />
    <motion.img
    initial={{ left: "-45%" }}
    whileInView={{ left: "-24%" }}
    transition={transition}
    
    src={glassesimoji}  alt="" />
        {/* animation */}
    
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
