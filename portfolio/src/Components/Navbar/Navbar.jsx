import React, { useRef } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
import { useContext } from "react";
import { themeContext } from "../../Context";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      className="n-wrapper"
      id="Navbar"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="n-left">
        <div className="n-name">{"<Nandha/>"}</div>
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
            <Link spy={true} to="About" smooth={true} activeClass="activeClass">
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
            <a style={{textDecoration:"none",color:"#242D49"}}
              href="https://drive.google.com/drive/u/0/folders/1kMqkAC-1C-KkwUgO1sVoVlSV-tu8YCmT"
              target="blank"
            >
              <li>Resume</li>
            </a>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contact</button>
        </Link>
        <div className="responce">
          <RxHamburgerMenu onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent mt={"20%"} height={"50vh"} bg={"white"}>
              <DrawerCloseButton />
              <DrawerBody>
                <div className="D-list">
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
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
