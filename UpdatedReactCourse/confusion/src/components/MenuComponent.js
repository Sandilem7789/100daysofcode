import React from 'react';
import { 
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle  
} from "reactstrap";

import DishDetailComponent from "./DishDetailComponent";

class Menu extends React.Component {
    constructor(props){
        //supply props to a super class
        super(props);

        this.state = {
            selectedDish: null
        }
    }


    onDishSelect (dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <div className="col">
                    <div className="col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>
                                    {dish.name}
                                </CardTitle>
                                <CardText>
                                    {dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                <div>
                    {dish.comments.comment}
                </div>
            </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle tag="h2">
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                        
                    </Card>
                </div>
            )
        });
        console.log("Menu Components Render is invoked");
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}

export default Menu