import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends React.Component {
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
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
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
        return (
            <div className="row offset-1">
                <div className="col-12 col-md-4 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1 offset-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        )
    }
}
export default DishDetail;