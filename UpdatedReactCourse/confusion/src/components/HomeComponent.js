import React from 'react';
import {
    Card, CardImg, 
    CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
/*Day 65: React Animations*/
import { FadeTransform } from "react-animation-components";


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
            <FadeTransform in 
                transformProps={{
                    exitTransform: "scale(0.5) translateY(-50%)"
                }}
            >
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle className="nav-text" tag="h3">{item.name}</CardTitle>
                            {item.designation ? <CardSubtitle className="dish-description" tag="h3">{item.designation}</CardSubtitle> : null }
                        <CardText className="comments" tag="h4">{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
            
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
                    <RenderCard 
                        item={props.promotion}
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess} 
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.leader}
                        isLoading={props.leadersLoading}
                        errMess={props.leadersErrMess}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;