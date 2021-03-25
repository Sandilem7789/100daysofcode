import React from 'react';
import { 
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Label,
    Col,
    Row
} from "reactstrap";

import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

console.log("Tis is a step in the direction that iwanna take");
class Contact extends React.Component {
    constructor(props){
        super(props);
        //if a field's 'touched' attribute is false 
        //then we wont need to validate it
        
    }
        
    handleSubmit(values){
        console.log(`Current State is: ${JSON.stringify(values)}`);
        alert(`Current State is: ${JSON.stringify(values)}`);
    }
    

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb className="cool-text col-12">
                        <BreadcrumbItem>
                            <Link to="/home">
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 cool-text">
                        <h2>
                            Contact Us
                        </h2><hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2 className="cool-text">Send us Your Feedback</h2>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>
                                    First Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        className="form-control"
                                        id="firstname" 
                                        name="firstname"
                                        placeholder="First Name"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>
                                    Last Name
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        className="form-control" 
                                        id="lastname" 
                                        name="lastname"
                                        placeholder="Last Name"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>
                                    Contact Tel.
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        className="form-control" 
                                        id="telnum" 
                                        name="telnum"
                                        placeholder="Tel. Number"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>
                                    Email
                                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        className="form-control"
                                        id="email" 
                                        name="email"
                                        placeholder="email"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                className="form-check-input"
                                                model=".agree"
                                                name="agree"
                                            /> {" "}
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="mesage" md={2}>
                                    Your Feedback
                                </Label>
                                <Col md={10}>
                                    <Control.textarea 
                                        model=".message"
                                        id="message" 
                                        name="message"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button 
                                        type="submit"
                                        color="primary"
                                    >
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>                           
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;