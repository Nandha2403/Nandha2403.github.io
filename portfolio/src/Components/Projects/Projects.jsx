import React, { useContext } from "react";
import { themeContext } from "../../Context";


import "./Projects.css";

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Projects" id="Projects">
      <div className="p-title">
        <span>P R O J E C T S</span>
      </div>
      {/* rct211 */}
      <div className="p-cards">
        <div className="p-left">
          <div className="project-title">
            <h3>CROCSWORLD</h3>
          </div>
          <div className="project_img">
            <img
              width={"100%"}
              src="https://user-images.githubusercontent.com/115460581/243563942-5765db31-65eb-4e8b-b49e-ecd5a99138e2.png"
              alt=""
            />
          </div>
          <div className="p-buttons">
            <a href="https://starlit-sprite-58fbc1.netlify.app/" target="blank">
              <button className="button">LIVE</button>
            </a>
            <a href="https://github.com/Nandha2403/CrocsWorld" target="blank">
              <button className="button">GitHub Repo</button>
            </a>
          </div>
          <div className="p-TechStack">
          <p style={{color: darkMode ? "white" : "",}}> <span style={{color:"#0A7FFB"}}>TechStack :</span> REACT | REDUX | JSON SERVER | CHAKRA UI </p>
          </div>
        </div>
        <div className="p-right">
          <div className="project-intro">
            <h3>Crocs World is a E-commerce website that sells a wide range of footware products having unique and attrative design at very low prices.</h3>
          </div>
          <div className="project-features-heading">
          <h3>Features</h3>
          </div>
          <div className="project-features">
            <ul>
              <li>Login & Signup</li>
              <li>Cart & Payment</li>
              <li>Single Product Page</li>
              <li>Sorting & Searching</li>
              <li>Filtering</li>
              <li>Pagination</li>
              <li>Responsiveness</li>
            </ul>
          </div>
          <div className="project-group">
            <p>An individual project built in 5 days.</p>
          </div>
        </div>
      </div>
      {/* fsd */}
      <div className="p-cards">
        <div className="p-left">
        <div className="project-title">
            <h3>GADGETHUNT</h3>
          </div>
          <div className="project_img">
            <img
              width={"100%"}
              src="https://user-images.githubusercontent.com/115460581/246142773-559618a2-b1dc-487f-a99c-9a10e267329d.png"
              alt=""
            />
          </div>
          <div className="p-buttons">
            <a
              href="https://statuesque-kringle-865375.netlify.app/"
              target="blank"
            >
              <button className="button">LIVE</button>
            </a>
            <a href="https://github.com/Nandha2403/Gadget-Hunt" target="blank">
              <button className="button">GitHub Repo</button>
            </a>
          </div>
          <div className="p-TechStack">
            <p style={{color: darkMode ? "white" : "",}}> <span style={{color:"#0A7FFB"}}>TechStack :</span> REACT | REDUX | MONGODB | EXPRESS | NODEJS | CHAKRA UI | MANTAINE UI</p>
          </div>
        </div>
        <div className="p-right">
          <div className="project-intro">
            <h3>GadgetHunt is a clone of an Indian online store that specializes in selling a wide range of designer mobile phone cases, laptop sleeves, and other tech accessories</h3>
          </div>
          <div className="project-features-heading">
          <h3>Features</h3>
          </div>
          <div className="project-features">
            <ul>
              <li>Login & Signup (Including Admin)</li>
              <li>Cart & Payment</li>
              <li>Single Product Page</li>
              <li>Sorting & Searching</li>
              <li>JWT Authentication</li>
              <li>Admin Side</li>
              <li>Password Hashing</li>
              <li>Responsiveness</li>
            </ul>
          </div>
          <div className="project-group">
            <p>An individual project built in 5 days.</p>
          </div>
        </div>
      </div>
      {/* js201 */}
      <div className="p-cards">
        <div className="p-left">
        <div className="project-title">
            <h3>QUICKDEALS</h3>
          </div>
          <div className="project_img">
            <img
              width={"100%"}
              src="https://github.com/Nandha2403/nostalgic-nut-6532/assets/115460581/ae7ffcc1-f256-4d48-b71e-e7676cec0957"
              alt=""
            />

          </div>
          <div className="p-buttons">
            <a
              href="https://rainbow-jalebi-aa6412.netlify.app/"
              target="blank"
            >
              <button className="button">LIVE</button>
            </a>
            <a
              href="https://github.com/Nandha2403/nostalgic-nut-6532"
              target="blank"
            >
              <button className="button">GitHub Repo</button>
            </a>
          </div>
          <div className="p-TechStack">
            <p style={{color: darkMode ? "white" : "",}}> <span style={{color:"#0A7FFB"}}>TechStack :</span> HTML | CSS | JAVASCRIPT | JSON</p>
          </div>
        </div>
        <div className="p-right">
          <div className="project-intro">
            <h3>QuickDeals is an Indian e-commerce website sells different kinds of products</h3>
          </div>
          <div className="project-features-heading">
          <h3>Features</h3>
          </div>
          <div className="project-features">
            <ul>
              <li>Login & Signup</li>
              <li>Cart & Payment</li>
              <li>Sorting & Searching</li>
              <li>Filtering</li>
              <li>Pagination</li>
              <li>Admin Side</li>
            </ul>
            <div className="project-Res">
            Areas of responsibility
            </div>
            <div>
              <ul>
                <li>Lead the Team and Manage the Project</li>
                <li>Developed Homepage and Productspage</li>
                <li>Developed Backend using JSON</li>
              </ul>
            </div>
          </div>
          <div className="project-group">
            <p>A collaborative project built by 4 Developers within 5 days.</p>
          </div>
        </div>
      </div>
      {/* unt-1 */}
      <div className="p-cards">
        <div className="p-left">
        <div className="project-title">
            <h3>WOW SHOPCLUES</h3>
          </div>
          <div className="project_img">
            <img
              width={"100%"}
              src="https://github.com/Nandha2403/nostalgic-nut-6532/assets/115460581/e82050da-97de-45d6-a10e-78dfb776eb79"
              alt=""
            />
          </div>
          <div className="p-buttons">
            <a href="https://melodious-cajeta-f84ab7.netlify.app/" target="blank">
              <button className="button">LIVE</button>
            </a>
            <a href="https://github.com/Nandha2403/vogue-pocket-8479" target="blank">
              <button className="button">GitHub Repo</button>
            </a>
          </div>
          <div className="p-TechStack">
            <p style={{color: darkMode ? "white" : "",}}> <span style={{color:"#0A7FFB"}}>TechStack :</span> HTML | CSS | JAVASCRIPT</p>
          </div>
        </div>
        <div className="p-right">
          <div className="project-intro">
            <h3>Wow ShopClues is an Indian e-commerce website sells different kinds of products</h3>
          </div>
          <div className="project-features-heading">
          <h3>Features</h3>
          </div>
          <div className="project-features">
            <ul>
              <li>Login & Signup</li>
              <li>Cart</li>
              <li>Sorting</li>
              <li>Filtering</li>
              <li>Payment</li>
            </ul>
          </div>
          <div className="project-group">
            <p>An individual project built in 5 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
