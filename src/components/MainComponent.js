import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent.js';
import DishDetail from './DishDetailComponent';
import DISHES from '../shared/dishes';

class Main extends Component {

  constructor(props){

    super(props);

    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dish){
    this.setState({selectedDish : dish});
}

    render(){
    return (
    <div>
    {/* <div className="App"> */}
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} handleClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
  );}
}

export default Main;
