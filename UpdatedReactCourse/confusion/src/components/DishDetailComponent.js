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
        this.state = {
        }
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return(<></>);
    }
    renderComments(dish) {
        if (dish != null) {
            return (
                <ul className="list-unstyled">
                    {dish.comments.map((item) => (
                        <div>
                            <li key={item.id}>{item.comment}</li>
                            <li key={item.author}>-- {item.author} , {item.date} <br/><br/> </li>
                        </div>
                    ))}
                </ul>
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