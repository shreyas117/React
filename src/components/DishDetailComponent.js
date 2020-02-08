import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}){
    if(dish == null){
        return(
            <div></div>
        );
    }
    return(
        <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
        <Card>
        <CardImg top width="40%" height="40%" src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    </div>
    );
}


function DishDetail({dish}){

    const selectedDish = dish;

    return(
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish = {selectedDish} />
        </div>
    );

}

export default DishDetail;