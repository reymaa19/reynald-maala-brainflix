import { useState } from "react";
import "./Header.scss";
import Avatar from "../Avatar/Avatar.jsx";
import CtaButton from "../CtaButton/CtaButton.jsx";

const Header = () => {
  const [search, setSearch] = useState("");
  const changeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <header className="header">
      <div className="header__logo" />
      <div className="header__wrapper">
        <input
          className="header__search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={changeHandler}
        />
        <Avatar withImage={true} />
      </div>
      <CtaButton content="UPLOAD" />
      <Avatar withImage={true} variant={"header-right"} />
    </header>
  );
};

export default Header;
