import classes from "./Header.module.css";
import React from "react";

import headerImg from "../../assets/games-banner.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Fake GameStop</h1>
        <HeaderCartButton/>
      </header>
      <div>
        <img
          src={headerImg}
          alt="A video games banner"
          className={classes["main-image"]}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
