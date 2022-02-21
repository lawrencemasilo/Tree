import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Join</span>
          <span className="header__optionLineTwo">Tree</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Login</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">hidhih</span>
        </div>

        <div className="header__optionCart">
          <ShoppingCartIcon />
          <span className="header__optionlineTwo header__cartCount">0</span>
        </div>
      </div>

      {/*<div className="header__navHori">
        <div className="header__navHoriOne">1</div>
        <div className="header__navHoriTwe">2</div>
        <div className="header__navHoriThree">3</div>
        <div className="header__navHoriFour">4</div>
        <div className="header__navHoriFive">5</div>
      </div>*/}
    </div>
  );
}

export default Header;
