import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    renderDish(dish){
        if(dish == null){
            return(
                <div>THIS WILL BE REPLACEDD!!</div>
            );
        }
        return(
            <Card>
            <CardImg top width="40%" height="40%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }

    render(){
        const selectedDish = this.props.dish;

        return(
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(selectedDish)}
            </div>
        );
    }
}

export default DishDetail;