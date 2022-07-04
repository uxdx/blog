import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header elevation-12">
                <span className="header-logo">
                    <Link to="/">
                        Harusari
                    </Link>
                </span>
            </header>
        </>
    );
}

export default Header;