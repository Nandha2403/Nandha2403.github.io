import React,{useContext} from "react";
import Github from "../../img/githubBlue.png";
import Linkedin from "../../img/LinkedinBlue.png";
import Email from "../../img/EmailBlue.png";
import "./Intro.css";
import { themeContext } from "../../Context";

const Intro = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode?"white":''}}>Hey! I Am</span>
          <span>Nandha Raghu</span>
          <span>
            Full Stack Web Developer with proficient Skilled in both Frontend
            and Backend Development for producing the Quality work
          </span>
        </div>
        <div className="i-left-buttons-cont">
          <button className="button i-button">Resume</button>
          <button className="button i-button">Hire me</button>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Nandha2403" target="_blank">
          <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/nandha-raghu-743389224/" target="_blank">
          <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nandhuvj451@gmail.com" target="_blank">
          <img src={Email} alt="Email" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img
          src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966"
          alt="Img"
        />
      </div>
    </div>
  );
};

export default Intro;
