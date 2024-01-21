import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [disp, setDisp] = useState(false);
  return (
    <>
      <header>
        <div className="containerr">
          <div className="left-sect">
            <span>Tasty</span>
          </div>
          <ul>
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/add">
              {" "}
              <li>Add</li>
            </Link>
            <Link to="/basket">
              {" "}
              <li>Basket</li>
            </Link>
            <Link to="/wishlist">
              {" "}
              <li>Wishlist</li>
            </Link>
            <li>Menu</li>
            <li>Specials</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div
            className="mobile-menu-bar"
            onClick={() => {
              setDisp(!disp);
            }}
          >
            <MenuIcon style={{ color: "white", fontSize: "30px" }} />
            <span> MENU</span>
          </div>
        </div>
        <div
          className="mobile-nav"
          style={{ display: disp ? "block" : "none" }}
        >
          <ul>
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/add">
              {" "}
              <li>Add</li>
            </Link>
            <Link to="/basket">
              {" "}
              <li>Basket</li>
            </Link>
            <Link to="/wishlist">
              {" "}
              <li>Wishlist</li>
            </Link>
            <li>Menu</li>
            <li>Specials</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
