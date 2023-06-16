import React from "react";
import { Button } from "@chakra-ui/react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="title">CONTACT</div>
      <div className="contact_cont">
        <div style={{marginLeft:'9rem',marginTop:"80px"}}>
          <img
            width={"60%"}
            src="https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966"
            alt="img"
          />
        </div>
        <div  style={{width:"50%"}}>
          <div style={{marginTop:"7rem"}}>
            <p>Phone : +91 9566375755</p>
          </div>
          <div>
            <p>Email : <a style={{color:"#242D49"}} href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nandhuvj451@gmail.com" target="blank">nandhuvj451@gmail.com</a></p>
          </div>
          <div>
            <p>Linkedin : <a style={{color:"#242D49"}} href="https://www.linkedin.com/in/nandha-raghu-743389224/" target="blank">Nandha Raghu</a></p>
          </div>
          <div>
            <p>GitHub : <a style={{color:"#242D49"}} href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=nandhuvj451@gmail.com" target="blank">Nandha2403</a></p>
          </div>
        </div>
      </div>
      <div className="tnk">
        <h3>Thank you</h3>
      </div>
      <div className="ending">
        <p>Design and Developed by Nandha Raghu</p>
        
      </div>
    </div>
  );
};

export default Contact;
