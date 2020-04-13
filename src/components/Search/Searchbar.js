import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Searchbar.module.css'

class Searchbar extends Component{

    state = {
        activepage : 1,
        listdatas : {},
        loading : true,
        query : '',
        totalItemsCount:''
    }

    changeHandler = async(event) => {
        event.preventDefault(); 
        if (event.target.value !== '') {
           await this.setState({query:event.target.value})
        this.loadData();
        }
      

    }

    handlePageChange=async (page)=> {

        await this.setState({activepage: page});
        this.loadData();
      }

     
    loadData = () => {

        axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
            api_key: '3a4e364b2b2ec5badbc70a16037d000e',
            query : this.state.query,
            page: this.state.activepage
            
        }
    }).then(
            response=>{
                this.setState({listdatas : response.data.results })
                this.setState({totalItemsCount : response.data.total_results })
                this.setState({loading : false })
            }
        ).catch(error =>{
            alert(error)
        })
    }
    render(){
 let lisdataslength = Object.keys(this.state.listdatas).length

    return(
    <div>
        <form>
        <i className="fa fa-search "></i>
            <input type="text"  placeholder="Search" onChange = {(event) =>this.changeHandler(event)}></input>
            </form>
            
            {lisdataslength > 0 ?
            
          <Redirect to={{
            pathname: '/search',
            handleChange: this.handlePageChange,
            state: { results: this.state.listdatas, activepage : this.state.activepage,totalItemsCount:this.state.totalItemsCount }
          }}/> : <Redirect to={{
            pathname: '/',
          }}/>
        }
            </div>
            );
}
}
export default withErrorHandler(Searchbar,axios);