import React, { useContext } from "react";
import "./SkillsCard.css";
import { themeContext } from "../../Context";

const SkillsCard = ({ FrameImg, heading }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="skillsCard">
      <img src={FrameImg} alt="FrameImg" />
      <span  style={{
        // background:darkMode? 'black':'',
        color: darkMode ? "white" : "var(--black)",
      }}>{heading}</span>
    </div>
  );
};

export default SkillsCard;
