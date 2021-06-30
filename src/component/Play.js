import classes from './Play.module.css'
import {FaPlay,FaPause,FaRedo} from "react-icons/fa";
const Play = () =>{
    return (
        <div className={classes.Play}>
        <div className={classes.Container}></div>
           <FaPlay size="40px"/>
           <FaPause size="40px"/>
           <FaRedo size="40px"/>
        
    </div>
    )
}
export default Play;