import React from "react"
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect (dishId) {
        this.setState({selectedDish: dishId});
        console.log("Dish Select Works")
        console.log(dishId)
        
    }

    render() {
        return (
        <div>
            <Header />
            <Menu 
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
            />
            {/*Select all dishes where the dish id matches the selected dish*/}

            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            <Footer />
        </div>
        );
    }
}

export default Main;
