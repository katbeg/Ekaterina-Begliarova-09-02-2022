import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

export default function Header(){
    return(
        <div className="header">
            <img src="" alt="" className="header__logo"/>
            <nav className="header__menu">
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
            </nav>
        </div>

    );
}