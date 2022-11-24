import "./Header.css";

// External Libraries
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <a href="#default" className="logo">
                    Tea Time
                </a>
                <div className="headerRight">
                    {/*<a className="active" href="#home">
                        Home
                    </a>
                    <a href="#about">Your order</a>*/}
                    <Link to="/">Show Temp</Link>
                    <Link to="exampledataview">Art Drinkology</Link>
                </div>
            </div>
        </>
    );
}

export default Header;