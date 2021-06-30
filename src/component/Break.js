import {FaArrowDown,FaArrowUp } from "react-icons/fa";
import classes from './Break.module.css'
const Break = () =>{
    return (
        <div className={classes.Break}>
        <div className={classes.Container}>
        <h2>Break Length</h2>
        {/* <FaGithub color="white" size="30px" style={{padding:'3'}} onClick={handleURL('https://github.com/isacc-coder')} /> */}
        <FaArrowUp className={classes.up} size="40px" />
         <h2>5</h2>
        <FaArrowDown className={classes.down} size="40px"/>
       </div>

    </div>
    )
}
export default Break;