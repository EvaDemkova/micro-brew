import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Logout from "./Logout";

import "./styles/header.scss";

const Header = () => {
    const { user } = useGlobalContext();
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/dashboard/${user.id}`}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/feed">Feed</Link>
                </li>
                <li>
                    <Link to="/map">Map</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Logout />
                </li>
            </ul>
        </nav>
    );
};

export default Header;
