import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }
    renderComments(dish) {
        if (dish != null) {

            return (
                <ul className="list-unstyled">
                    {dish.comments.map((item) => (
                        <div>
                            <li key={item.id}>{item.comment}</li>
                            <li key={item.author}>--{item.author} , {Date(item.date)} </li>
                        </div>

                    ))}
                </ul>
            )

        }
        else {
            return (
                <h1>empty</h1>
            )
        }


    }

    render() {
        return (
            <>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>

                    {this.renderComments(this.props.dish)}

                </div>
            </>


        )
    }
}
export default DishDetail;