import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import {useContext} from "react"
import { themeContext } from "../../Context";


const Navbar = () => {
    const theme = useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="n-wrapper" id="Navbar" style={{
        background:darkMode? 'black':'',
        color:darkMode? 'white':''
      }}>
      <div className="n-left">
        <div className="n-name">{"<Nandha />"}</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="About"
              smooth={true}
              activeClass="activeClass"
            >
              <li>About</li>
            </Link>
            <Link
              spy={true}
              to="Skills"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Skills</li>
            </Link>
            <Link
              spy={true}
              to="Projects"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Projects</li>
            </Link>
            <li>Resume</li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
