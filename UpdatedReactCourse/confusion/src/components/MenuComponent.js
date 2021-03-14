import React from 'react';
import { 
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle  
} from "reactstrap";

import DishDetail from "./DishDetailComponent"

class Menu extends React.Component {
    renderDish(dish) {
        if(dish != null) {
            return(
                <div>
                    <DishDetail selectedDish={this.state.selectedDish}/>
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
        console.log("menu component render invoked");
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle tag="h2" className="dish-title">
                                {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
            </div>
        )
    }
}

export default Menu