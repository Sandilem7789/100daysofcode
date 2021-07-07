import { Link } from "react-router-dom";
import Button from "./Button";

const About = () => {
    return (
        <div className="about">
            <h4>Version 1.2.0</h4>
            <p>This is a web app I learned to create <br/>
             from Travesty media 
             <br />Now I am Just making it mine</p>
            <Link to="/">
                <Button color="blue" text="Go Back" />
            </Link>
        </div>
    )
}

export default About
