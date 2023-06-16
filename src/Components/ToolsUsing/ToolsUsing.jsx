import React from "react";
import "./ToolsUsing.css";
import ToolsUsingCard from "../ToolsUsingCard/ToolsUsingCard";
import VScode from "../../img/VScode.png";
import Vercel from "../../img/Vercel.png";
import Git from "../../img/Git.png";
import NPM from "../../img/NPM.png";
import yarn from "../../img/Yarn.png";
import GitHub from "../../img/githubBlue.png";
import Canva from "../../img/Canva.png";
import Netlify from "../../img/Netlify.png";
import Replit from "../../img/Replit.png";
import CodePen from "../../img/Codepen.png";
import CodeSandBox from "../../img/Codesandbox.png";
import Notion from "../../img/Notion.png";
import PostMan from "../../img/PostMan.png";

const ToolsUsing = () => {
  return (
    <div className="Tools" id="Tools">
      <div className="t-title">
        <span>Tools</span>
        <span> | </span>
        <span>Use</span>
      </div>
      <div className="ToolsCard1">
        <div>
          <ToolsUsingCard FrameImg={VScode} heading={"VS Code"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={Git} heading={"Git"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={PostMan} heading={"Postman"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={NPM} heading={"NPM"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={yarn} heading={"Yarn"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={GitHub} heading={"GitHub"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={Canva} heading={"Canva"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={Netlify} heading={"Netlify"} />
        </div>
      </div>
      <div className="ToolsCard2Cont">
        <div className="ToolsCard2">
        <div>
          <ToolsUsingCard FrameImg={Vercel} heading={"Vercel"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={Replit} heading={"Replit"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={CodeSandBox} heading={"CodeSandBox"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={CodePen} heading={"CodePen"} />
        </div>
        <div>
          <ToolsUsingCard FrameImg={Notion} heading={"Notion"} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsUsing;
