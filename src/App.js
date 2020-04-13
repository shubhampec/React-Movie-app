import React, { Component } from 'react';

import './App.css';
import {Route} from 'react-router-dom';
import Layout from '../src/container/Layout/Layout';
import Description from '../src/components/Description/Description'
import Navigation from '../src/components/Navigation/Navigation'
import Loadsearch from '../src/components/Search/LoadSearch/LoadSearch'
class  App extends Component {
  
  render(){
  return (
    <div className="App">
    <Navigation/>
      <Route path="/" exact component={Layout} />
      <Route path="/description/:id" component={Description}/>
      <Route path="/search" component={Loadsearch}/>
     
    </div>
  );
}}

export default App;
