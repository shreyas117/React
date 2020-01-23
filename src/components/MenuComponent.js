import React from 'react';
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish , handleClick }){
    return (
        <Card onClick = {() => handleClick(dish.id)}>
          <CardImg width="50%" height="50%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
    );
}

    function Menu(props){
    
        const menu = props.dishes.map((dish) => {
            return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} handleClick = {props.handleClick} />
            </div>
        );
            });
    
    return (
    <div className="container">
        <div className="row">
                {menu}                    
        </div>
    </div>

);
    }


export default Menu;