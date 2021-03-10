import React from 'react';
import { Media } from "reactstrap";

class Menu extends React.Component {
    constructor(props){
        //supply props to a super class
        super(props);

        this.state = {
            dishe: [
                
            ]
        }
    }
    render(){
        const menu;
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        )
    }
}

export default Menu
