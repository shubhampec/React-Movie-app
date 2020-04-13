import React, { Component } from 'react';
import classes from '../../Movielist/Movielist.module.css'
import Pagination from "react-js-pagination";


class Loadsearch extends Component{
    descriptionHandler(id,title,desc,votecount,poster_path){
        this.props.history.push({
            pathname:"/description/"+ id,
            state:{title:title,desc:desc,average:votecount,poster_path:poster_path}         
        })    
       }

   
    
 render(){
    
    let data=this.props.location.state.results;
    //let data = this.props
    var newArr = data.map(obj => {        
        let image=null;
        if(obj.poster_path==null){
            image="https://1zmwq81820r61pswmu19upqf-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/dummy.png";
        } 
        else{      
         image = "https://image.tmdb.org/t/p/w94_and_h141_bestv2/" + obj.poster_path;
        }
        let description = obj.overview.slice(0, 70);
        return (

        <div key = {obj.id} className="col-sm-6 col-md-4 col-lg-2">
        <div className = {classes.movie}>
        <img  src= {image} alt="" onClick={()=>this.descriptionHandler(obj.id,obj.title,obj.overview,obj.vote_average,obj.poster_path)}/>
          <div className = {classes.characters}>
          <div className = {classes.title}><strong>{obj.title}</strong></div>
          <div className = {classes.title}>{obj.vote_average}</div>
          </div>
          <div className = {classes.overview}>{description}......</div>
          
       </div>
        </div>
        );
      });
      
      
    return(
       
    <div className="row">
   {newArr}
   <div className={classes.spacer}>
     <Pagination
        activePage={this.props.location.state.activepage}
        itemsCountPerPage={20}
        totalItemsCount={this.props.location.state.totalItemsCount}
        pageRangeDisplayed={2}
        itemClass="page-item"
          linkClass="page-link"
        onChange={this.props.location.handleChange.bind(this)} />  
        </div>
  
  </div>
  );
}
}

export default Loadsearch;