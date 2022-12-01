import "./Header.css";

function Header() {
    return (
        <>
            <div className="header">
                <a href="#default" className="logo">
                    Tea Time
                </a>
                <div className="headerRight">
                    <a className="active" href="#home">
                        Home
                    </a>
                    <a href="#about">Your order</a>
                </div>
            </div>
        </>
    );
}

export default Header;