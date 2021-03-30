import React from "react"
import Menu from "./MenuComponent.js";
import DishDetail from "./DishDetailComponent";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { addComment, fetchDishes } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())}                                                            //now 'fetchDishes' is available for the main component
});

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    //lifecycle method: call the following after the current component mounts(Main)
    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}         //calling the Loading component: we are going to pass this prop to 'DishDetailComponent'
                    dishesErrMess={this.props.dishes.errMess}           //when Loading dishes fails
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]} 
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]} 
                />
            )
        }

        const DishWithId = ({ match }) => {
            return(
                <DishDetail 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}         //calling the Loading component: we gonna pass this prop to 'DishDetailComponent'
                    errMess={this.props.dishes.errMess}           //when Loading dishes fails
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                />
            );
        }

        return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                <Redirect to="/home"  />
            </Switch>
            <Footer />
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
