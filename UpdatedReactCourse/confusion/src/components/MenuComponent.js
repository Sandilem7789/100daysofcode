import React from 'react';
import { 
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem 
} from "reactstrap";

import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";    //This allows CLIENT-SERVER Communication

function RenderMenuItem({ dish, onClick }){
    return(
        <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle tag="h2" className="dish-title">
                        {dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}/>
            </div>
        )
    });

    if(props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>
                        {props.dishes.errMess}
                    </h4>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb className="cool-text col-12">
                        <BreadcrumbItem>
                            <Link to="/home">
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 cool-text">
                        <h2>
                            Menu
                        </h2><hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }    
}

export default Menu;