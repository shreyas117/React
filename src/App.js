import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';


class App extends Component {

  // constructor(props){

  //   super(props);
    
  //   this.state = {
  //   };
  // }

    render(){
    return (
    <div>
      <Main  />
    </div>
  );}
}

export default App;
