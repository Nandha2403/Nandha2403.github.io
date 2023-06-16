import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import ToolsUsing from "./Components/ToolsUsing/ToolsUsing";
import Projects from "./Components/Projects/Projects";
import {useContext} from "react"
import { themeContext } from "./Context";
import Contact from "./Components/Contact/Contact";

function App() {
  const theme = useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="App" style={{
      background:darkMode? 'black':'',
      color:darkMode? 'white':''
    }}>
      
      <Navbar />
      <Intro />
      <Services />
      <About /> 
      <Skills />
      <ToolsUsing />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
