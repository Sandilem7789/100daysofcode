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

import { postComment, fetchDishes, fetchComments, fetchPromos } from "../redux/ActionCreators";

//d61:react-redux-form
import { actions } from "react-redux-form";     //actions to do form operations no need to create actions from scratch

//d65: react animations
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},                                                               //now 'fetchDishes' is available for the main component
    resetFeedback: () => {dispatch(actions.reset("feedback"))},                                                  //reset is an action from react-redux-form, all this is done on a form called feedback
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())}
});

class Main extends React.Component {
    constructor(props){
        super(props);
    }

    //lifecycle methods: call the following after the current component mounts(Main)
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}         //calling the Loading component: we are going to pass this prop to 'DishDetailComponent'
                    dishesErrMess={this.props.dishes.errMess}           //when Loading dishes fails
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}         //calling the Loading component: we are going to pass this prop to 'DishDetailComponent'
                    promosErrMess={this.props.promotions.errMess}           //when Loading dishes fails 
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]} 
                />
            )
        }

        //sending to dishDetailComponent
        const DishWithId = ({ match }) => {
            return(
                <DishDetail 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}         //calling the Loading component: we gonna pass this prop to 'DishDetailComponent'
                    errMess={this.props.dishes.errMess}           //when Loading dishes fails
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            );
        }

        return (
        <div>
            <Header />
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
                        <Route path="/menu/:dishId" component={DishWithId} />
                        <Route exact path="/contactus" component={() => <Contact resetFeedbackform={this.props.resetFeedback} />} />
                        <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                        <Redirect to="/home"  />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));