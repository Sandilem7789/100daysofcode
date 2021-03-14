import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends React.Component {
    componentDidMount(){
        console.log("Dish Detail componentDidMount() Invoked!");
    }

    componentDidUpdate() {
        console.log("Dish Detail componentDidUpdate() invoked");
    }

    constructor(props) {
        super(props);
        this.state = {}
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle className="nav-text">{dish.name}</CardTitle>
                        <CardText className="dish-description">{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return(<></>);
    }
    renderComments(dish) {
        if (dish != null) {
            return (
                <div>
                    <h2 className="comments">Comments</h2>
                    <ul className="list-unstyled comments-list">
                        {dish.comments.map((item) => (
                            <div key={item.id}>
                                <li>{item.comment}</li>
                                <li key={item.author}>-- {item.author} , {item.date} <br/><br/> </li>
                            </div>
                        ))}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <></>
            )
        }
    }

    render() {
        console.log("dishDetail render Invoked");
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
            
        )
    }
}
export default DishDetail;