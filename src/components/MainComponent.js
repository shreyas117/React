import React, { Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent.js';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import DISHES from '../shared/dishes';
import PROMOTIONS from '../shared/promotions';
import LEADERS from '../shared/leaders';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { Switch , Route , Redirect } from 'react-router-dom'; 

class Main extends Component {

  constructor(props){

    super(props);

    this.state = {
      dishes : DISHES,
      promotions : PROMOTIONS,
      leaders : LEADERS
      // selectedDish : null
    };
  }

//   onDishSelect(dish){
//     this.setState({selectedDish : dish});
// }


    render(){

    const HomePage = () => {
      return (
        <div>
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
               promo={this.state.promotions.filter((promo) => promo.featured)[0]} 
               lead={this.state.leaders.filter((lead) => lead.featured)[0]}/>
        </div>
      );
    }
    return(
      <React.Fragment>
      <Header />
      <Switch>
        <Route path = "/home" component={HomePage} />
        <Route exact path = "/menu" component={() => <Menu dishes = {this.state.dishes} />  } />
        <Redirect to = "/home" /> 
      </Switch>
      {/* <Menu dishes={this.state.dishes} handleClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
      <Footer />
      </React.Fragment>
  );}
}

export default Main;
