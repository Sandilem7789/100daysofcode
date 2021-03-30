import React from 'react';
import {
    Card, CardImg, 
    CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import { Loading } from "./LoadingComponent";


function RenderCard({item, isLoading, errMess}) {
    if(isLoading) {
        return(
            <Loading />
        );
    }
    else if(errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else{
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle className="nav-text" tag="h3">{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle className="dish-description" tag="h3">{item.designation}</CardSubtitle> : null }
                    <CardText className="comments" tag="h4">{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.dish}
                        isLoading={props.dishesLoading}             //dishesLoading is passed from 'MainComponent'
                        errMess={props.dishesErrMess}               //dishesErrMess is from 'MainComponent too'
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;