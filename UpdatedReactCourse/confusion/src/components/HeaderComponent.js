import React from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends React.Component {
    render() {
        return(
            <>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/" className="nav-text">
                            Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>
                                    Ristorante Con Funsion
                                </h1>
                                <p>
                                    We take inspiraion from the Worlds best cuisines, 
                                    and create a unique fusion experience, Our lipsmakign 
                                    creations wil tickle your culinery senses!
                                </p>
                            </div>

                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header