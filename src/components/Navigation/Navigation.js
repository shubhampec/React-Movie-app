import React,{Component}from 'react';
import Searchbar from '../Search/Searchbar';
import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
class navigation extends Component {

    render(){
        return(
        <div className={classes.Navigation}>
        <Searchbar />
        <NavLink to= "/">
        <i className= "fa fa-home" style={{fontSize:"200%",margin:"10px",color:"grey"}}></i>
       
        </NavLink>
        </div>

        );
    }
}
export default navigation;