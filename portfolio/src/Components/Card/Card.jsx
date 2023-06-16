import React from "react";
import "./Card.css";
import { Link } from "react-scroll";

const Card = ({ emoji, heading, detail, id }) => {
  return (
    <div className="Card">
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link spy={true} to={id} smooth={true} activeClass="activeClass">
        <button className="c-button">CHECK MORE</button>
      </Link>
    </div>
  );
};

export default Card;
