import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../Images/newlogo.png";
import youth from "../Images/youth.png";
import teen from "../Images/teen.png";
import adult from "../Images/adult.png";
import logout from "../Images/logout.png";

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/books">
          <img src={logo} alt="Vibrary Logo" width={175} height={175} background-color="black"/>
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/youth">
        <img src={youth} alt="Youth" width={125} height={125} background-color="black"/>
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/teen">
        <img src={teen} alt="Teen" width={125} height={125} background-color="black"/>
        </Link>
      </li>
      <li className="navbar__item active">
        <Link className="navbar__link" to="/youngadult">
        <img src={adult} alt="adult" width={125} height={125} background-color="black"/>
        </Link>
      </li>
      <li className="navbar__item active">
        <Link
          className="navbar__link"
          to="/login"
          onClick={() => {
            localStorage.removeItem("vibrary_user");
            props.setAuthorizedUser(0);
          }}
        >
          <img src={logout} alt="logout" width={125} height={125} background-color="black"/>
        </Link>
      </li>
    </ul>
  );
};
