import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}



function Home(props){
    return(
        <div className="container">
            <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                </div> 
            <div className="row align-items-start">   
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promo} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.lead} />
                </div>
            </div>
        </div>
    );
}

export default Home;