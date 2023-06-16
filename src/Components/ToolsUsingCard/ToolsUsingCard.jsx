import React,{useContext} from 'react'
import "./ToolsUsingCard.css"
import { themeContext } from '../../Context'

const ToolsUsingCard = ({FrameImg,heading}) => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className='toolsCard'>
         <img src={FrameImg} alt="FrameImg" />
        <span  style={{
        // background:darkMode? 'black':'',
        color: darkMode ? "white" : "var(--black)",
      }}>{heading}</span>
    </div>
  )
}

export default ToolsUsingCard