import React , {Component} from 'react';
import classes from './Description.module.css'


class Description extends Component {

    render (){
       
       let title=this.props.location.state.title;
       let desc=this.props.location.state.desc;
       let vote_average=this.props.location.state.average;
       let poster_path = this.props.location.state.poster_path;

       let image = "https://image.tmdb.org/t/p/w94_and_h141_bestv2/" + poster_path;
        return(
            
            
            <div className={classes.Navi}>
    		<img src = {image} alt="imag"/>
            <div className="media-body">
            <h4 className="text-left">{title +"  "+"("+vote_average+")"}</h4>
          <p className="text-left">Year | Length | Director</p>
          <p className="text-left">Cast: Actor 1, Actor 2,.. </p>
          <p className="text-left">Description :{desc}</p>
        
            
            </div>           
            </div>
        )
    }
   

    
}

export default Description;