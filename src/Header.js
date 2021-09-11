import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleauthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="headersearchIcon" />
      </div>

      {/* for nav header option */}
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleauthentication} className="header_option">
            <span className="header_optiolineone">Hello Guest</span>
            <span className="header_optiolinetwo">
              {" "}
              {user ? "SignOut" : "SignIn"}{" "}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optiolineone">Return</span>
          <span className="header_optiolinetwo">& Order</span>
        </div>

        <div className="header_option">
          <span className="header_optiolineone">Your</span>
          <span className="header_optiolinetwo">Prime</span>
        </div>

        <Link to="./checkout">
          <div className="header_optiobasket">
            <ShoppingBasketIcon />
            <span className="header_optiolinetwo header_basketcount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
