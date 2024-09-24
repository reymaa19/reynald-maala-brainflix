import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const [search, setSearch] = useState("");

    const changeHandler = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    return (
        <header className="header">
            <Link className="header__link" to="/">
                <div className="header__logo" />
            </Link>
            <div className="header__wrapper">
                <input
                    className="header__search"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={changeHandler}
                />
                <div className="header__avatar header__avatar--hide" />
            </div>

            <Link className="header__button" to="/upload">
                UPLOAD
            </Link>
            <div className="header__avatar header__avatar--right" />
        </header>
    );
};

export default Header;
