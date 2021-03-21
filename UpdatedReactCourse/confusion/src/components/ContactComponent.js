import React from 'react';
import { 
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
    FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends React.Component {
    constructor(props){
        super(props);
        //if a field's 'touched' attribute is false 
        //then we wont need to validate it
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: "Tel.",
            message: "",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        console.log(`Current State is: ${JSON.stringify(this.state)}`);
        alert(`Current State is: ${JSON.stringify(this.state)}`);
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {
                ...this.state.touched,
                [field]: true
            }
        });
        console.log(evt);
    }

    validate(firstname, lastname, telnum, email){
        const errors = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
        }
        
        /*FRONT END VALIDATION*/
        //FIRST NAME
        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = "First name must have at least 3 characters";
        else if (this.state.touched.firstname && firstname > 15)
            errors.firstname = "First name must not be more than 15 characters";
        
        //LAST NAME
        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = "First name must have at least 3 characters";
        else if (this.state.touched.lastname && lastname > 15)
            errors.lastname = "First name must not be more than 15 characters";
    }

    render(){
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>
                                    First Name
                                </Label>
                                <Col md={10}>
                                    <Input 
                                        type="text"
                                        id="firstname" 
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>
                                    Last Name
                                </Label>
                                <Col md={10}>
                                    <Input 
                                        type="text"
                                        id="lastname" 
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>
                                    Contact Tel.
                                </Label>
                                <Col md={10}>
                                    <Input 
                                        type="tel"
                                        id="telnum" 
                                        name="telnum"
                                        placeholder="Tel. Number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>
                                    Email
                                </Label>
                                <Col md={10}>
                                    <Input 
                                        type="email"
                                        id="email" 
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input 
                                                type="checkbox" 
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}
                                            /> {" "}
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input 
                                        type="select" name="contactType" 
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange} 
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="mesage" md={2}>
                                    Your Feedback
                                </Label>
                                <Col md={10}>
                                    <Input 
                                        type="textarea"
                                        id="message" 
                                        name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:10, offset:2}}>
                                    <Button 
                                        type="submit"
                                        color="primary"
                                        onSubmit={this.handleSubmit}
                                    >
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>                           
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;