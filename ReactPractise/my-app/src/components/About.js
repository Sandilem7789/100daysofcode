import { Link } from "react-router-dom";
import AddButton from "./AddButton";

const About = () => {
    return (
        <div className="about">
            <h4>Version 1.2.0</h4>
            <p>This is a web app I learned to create <br/>
             from Travesty media 
             <br />Now I am Just making it mine</p>
            <Link className="linkText" to="/">
                <AddButton color="blue" text="Go Back" />
            </Link>
        </div>
    )
}

export default About
