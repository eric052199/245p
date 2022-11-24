import "./sidebar.css";

// External Libraries
import { Link } from "react-router-dom";

function sidebar() {
    return (
        <>
            {/*<div class="sidenav">
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#catering">Catering</a>
                <a href="#contact">Contact</a>
             </div>*/}
            <div className="sidenav">
                <Link to="/">Show Temp</Link>
                <Link to="exampledataview">Art Drinkology</Link>
            </div>
        </>
    );
}

export default sidebar;