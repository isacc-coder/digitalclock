
import classes from './Seation.module.css'
import {FaArrowDown,FaArrowUp } from "react-icons/fa";
const Seation = () =>{
    return (
        <div className={classes.Seation}>
        <div className={classes.Container}>
        
        <h2>Session Length</h2>
       
    
        <FaArrowUp className={classes.up} size="40px"/>
         <h2>25</h2>
        <FaArrowDown className={classes.down} size="40px"/>
        </div>
    </div>
    )
}
export default Seation;