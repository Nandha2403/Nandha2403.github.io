import React, { useContext } from "react";
import "./Services.css";
import HearEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";

import Resume from "./NandhaResume.pdf";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          MERN Stack Development <br />( Frontend & Backend )
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
          
        >
          <Card
            emoji={HearEmoji}
            heading={"Design"}
            detail={
              "Chakra UI, Material UI, Styled-Components, Bootstrap & more"
            }
            id={"Skills"}
          />
        </motion.div>
        <motion.div 
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Development"}
            detail={
              "HTML, CSS, JavaScript, React, Redux, NodeJs, ExpressJs, MongoDB, Mongoose"
            }
            id={"Skills"}
          />
        </motion.div>
        <motion.div  
         initial={{ top: "19rem", left: "25rem" }}
         whileInView={{ left: "13rem" }}
         transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Tools | USE"}
            detail={"VS Code, Git, Postman, Github, NPM, Yarn"}
            id={"Tools"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
