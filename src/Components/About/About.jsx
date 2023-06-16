import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
    <div className='about' id='About'>
        <div className='a-left'>
          <div className="a-title">
            <span style={{fontSize: "2rem",
  marginLeft: "13rem"}}>A B O U T</span>
          </div>
          
            <span>Hii there  I'm <img width="5%" src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" alt="handShake" /><span style={{color:"var(--rogerBlue)",fontSize: "1.5rem"}}>NANDHA RAGHU</span> <img width="5%" src="https://user-images.githubusercontent.com/97526754/173172254-697ba77e-bed8-4ffc-b1d1-2c20ede245b0.gif"  /> </span>
            <span>I am a Full Stack Developer, passionate about building digital products that improve the everyday experience for people.</span>
            <span>I am a quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.</span>
        </div>
        <div className='a-right'>
            <img width="100%" src="https://avatars.githubusercontent.com/u/115460581?s=400&u=0fc23df6b55fd81e95a6541fed0eadd3c2484cd9&v=4" alt="Img" />
        </div>
    </div>
    <h1>
    <a  href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Ubuntu&weight=500&pause=1000&color=007FFF&center=true&vCenter=true&width=435&lines=Hi%2C+I+am+Nandha.;I+am+a+Developer.;I+Love+Coding.;I+Love+Problem+Solving.;I+Love+to+Develop.;MERN+Developer." alt="Typing SVG" /></a>
    </h1>
    </div>
  )
}

export default About