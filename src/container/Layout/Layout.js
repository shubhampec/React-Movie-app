import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Movielist from '../../components/Movielist/Movielist';
import axios from 'axios';
import Pagination from "react-js-pagination";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler"
import classes from './Layout.module.css'

class  layout extends Component{
    state={
        listdata:{},
        loading : true,
        activepage:1,
        error : null,
        totalItemsCount:''
        
    }

    compareValues = (key, order = 'asc') =>{
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }

    loadData = () => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming',{
        params: {
            api_key: '3a4e364b2b2ec5badbc70a16037d000e',
            page: this.state.activepage
        }
    }).then(
            response=>{
               response.data.results.sort(this.compareValues('release_date', 'desc'));
                this.setState({listdata : response.data.results })
                this.setState({totalItemsCount : response.data.total_results })
                this.setState({loading : false})
            }
        ).catch(error =>{
            this.setState({error : error})
            
        })
    }
    componentDidMount(){
        this.loadData();
    
    }
   handlePageChange = async (pageNumber)=> {
        await this.setState({activepage: pageNumber});
        this.loadData();
      }
    render(){
        let movielist = null;
        
        if (this.state.loading === false){

            movielist =[<Movielist  pagetitle={this.state.pagetitle} list = {this.state.listdata} {...this.props}/>,<div className={classes.spacer}>
            
            <Pagination
            activePage={this.state.activepage}
            itemsCountPerPage={20}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={2}
            itemClass="page-item"
              linkClass="page-link"
            onChange={(this.handlePageChange.bind(this))}
          >
            </Pagination>
            </div>]

        }
    
    return(<Aux>

        {movielist}
        </Aux>)
}
}

export default withErrorHandler(layout,axios);