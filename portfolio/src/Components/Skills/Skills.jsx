import React from 'react'
import "./Skills.css"
import SkillsCard from '../SkillsCard/SkillsCard'
import HtmlLogo from "../../img/HTML.png"
import CssLogo from "../../img/Css.png"
import JSLogo from "../../img/Javascript.png"
import ReactLogo from "../../img/React.png"
import ReduxLogo from "../../img/Redux.png"
import NodeJsLogo from "../../img/NodeJs.png"
import ExpreesJsLogo from "../../img/ExpressJs.png"
import MogoDbLogo from "../../img/MongoDB.png"
import JsonServerLogo from "../../img/Json-Server.png"
import ChakraUi from "../../img/Chakra.png"
import MaterialUi from "../../img/MaterialUi.png"
import StyledComponents from "../../img/Styled-Component.png"

const Skills = () => {
  return (
    <div className='Skills' id='Skills'>
        <div className='S-title'>
        <span>{" < "}</span>
        <span>S K I L L S</span>
        <span>{" /> "}</span>
        </div>
        <div className='s-cards1'>
          <div>
          <SkillsCard FrameImg={HtmlLogo } heading={"HTML"}/>
          </div>
          <div>
          <SkillsCard FrameImg={CssLogo } heading={"CSS"}/>
          </div>
          <div>
          <SkillsCard FrameImg={JSLogo } heading={"Javascript"}/>
          </div>
          <div>
          <SkillsCard FrameImg={ReactLogo } heading={"React"}/>
          </div>
          <div>
          <SkillsCard FrameImg={ReduxLogo } heading={"Redux"}/>
          </div>
          <div>
          <SkillsCard FrameImg={NodeJsLogo } heading={"Node JS"}/>
          </div>
          <div>
          <SkillsCard FrameImg={ExpreesJsLogo } heading={"Exprees JS"}/>
          </div>
          <div>
          <SkillsCard FrameImg={MogoDbLogo } heading={"Mongo DB"}/>
          </div>
        </div>
        <div className='s-cards2-cont'>
          <div className="s-cards2">
          <div>
          <SkillsCard FrameImg={JsonServerLogo } heading={"JSON-Server"}/>
          </div>
          <div>
          <SkillsCard FrameImg={ChakraUi } heading={"Chakra-UI"}/>
          </div>
          <div>
          <SkillsCard FrameImg={MaterialUi } heading={"Material-UI"}/>
          </div>
          <div>
          <SkillsCard FrameImg={StyledComponents } heading={"Styled-Components"}/>
          </div>
        </div>
          </div>
        
        
    </div>
  )
}

export default Skills