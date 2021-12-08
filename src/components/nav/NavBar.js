import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/books">Books</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/youth">Youth</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/teen">Teen</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/youngadult">Young Adult</Link>
            </li>

        </ul>   
    )
}