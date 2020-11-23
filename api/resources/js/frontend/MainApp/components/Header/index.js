import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

import "./header.scss";
import { useGlobalContext } from "../../../context";

const Header = () => {
    const { user } = useGlobalContext();
    return (
        <header>
            <div className="logo">
                <img src="/logo/toast.svg" alt="" />
                <h3>Micro Brew</h3>
            </div>
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
                </ul>
            </nav>

            <Logout />
        </header>
    );
};

export default Header;
