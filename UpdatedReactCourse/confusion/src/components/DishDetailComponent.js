import React from 'react';
import {
    Card, CardImg,
    CardText, CardBody,
    CardTitle, Breadcrumb,
    BreadcrumbItem, Button,
    Label, Col, Row, Modal, ModalHeader,
    ModalBody
} from 'reactstrap';

import { Control, LocalForm, Errors } from "react-redux-form";

import { Link } from "react-router-dom";

const required = (val) => val && val.length;    //checks whether the value is greater than 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isCommentModalOpen: false
        }
        this.toggleComment = this.toggleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleComment() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }
    handleSubmit(values) {
        alert(`Current State is: ${JSON.stringify(values)}`);
    }

    render() {
        return (
            <React.Fragment>
                <Button 
                    outline 
                    color="primary"
                    onClick={this.toggleComment}
                >
                    <span className="fa fa-pencil fa-lg"> </span>{" "}
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleComment}>
                    <ModalHeader toggle={this.toggleComment}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>
                                    Rating
                                </Label>
                                <Col md={12}>
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        className="form-control block"
                                        
                                    >
                                        <option value="1">1</option>
                                        <option values="2">2</option>
                                        <option values="3">3</option>
                                        <option values="4">4</option>
                                        <option values="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row>
                                <Label htmlFor="yourName" md={12}>
                                    Your Name
                                </Label>
                                <Col>
                                    <Control.text
                                        model=".yourName"
                                        className="form-control"
                                        id="yourName"
                                        placeholder="Your Name"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".yourName"
                                        show="touched"
                                        messages={{
                                            required: "Required! ",
                                            minLength: "Must be greater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                        }}
                                    />
                                </Col>
                            </Row>    
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>
                                    Comment
                                </Label>
                                <Col md={12}>
                                    <Control.textarea 
                                        model=".comment"
                                        id="comment" 
                                        name="comment"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:0}}>
                                    <Button 
                                        type="submit"
                                        color="primary"
                                    >
                                        Comment
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        )
    }
}

    
function RenderDish({dish}) {
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

const RenderComments = ({comments}) => {
    if (comments != null) {
        return (
            <div>
                <h2 className="comments">Comments</h2>
                <ul className="list-unstyled comments-list">
                    {comments.map((item) => (
                        <div key={item.id}>
                            <li>{item.comment}</li>
                            <li key={item.author}>-- 
                                {item.author}, 
                                {item.date} 
                                <br/><br/>
                            </li>
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

const DishDetail = (props) => {
    console.log("dishDetail render Invoked");
    return (
        <div className="container">
            {/*Breadcrumbs should have got its own component in my view*/}
            <div className="row">
                <Breadcrumb className="cool-text col-12">
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                    <div className="col-12 cool-text">
                        <h2>{props.dish.name}</h2><hr />
                    </div>
                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                    <CommentForm />
                </div>
                
            </div>
        </div>
        
    )
}


export default DishDetail;