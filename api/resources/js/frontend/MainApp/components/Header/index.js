import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";
import useWindowWidth from "../useWindowWidth";

import "./header.scss";
import { useGlobalContext } from "../../../context";

const Header = () => {
    const { user } = useGlobalContext();
    const { pathname } = useLocation();
    const width = useWindowWidth();

    console.log(width)

    if (width <= 700) {
        return (
            <header>
            <div className="logo">
                <img src="/logo/toast.svg" alt="" />
                <h3>Micro Brew</h3>
            </div>
            {/* <nav>
                <ul>
                    <li className={/dashboard/.test(pathname) ? "active" : ""}>
                        <Link to={`/dashboard/${user.id}`}>Dashboard</Link>
                    </li>
                    <li className={pathname == "/feed" ? "active" : ""}>
                        <Link to="/feed">Feed</Link>
                    </li>
                    <li className={pathname == "/map" ? "active" : ""}>
                        <Link to="/map">Map</Link>
                    </li>
                    <li className={pathname == "/profile" ? "active" : ""}>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav> */}

            <Logout />
        </header>
        )
    } else {
        return (
            <header>
                <div className="logo">
                    <img src="/logo/toast.svg" alt="" />
                    <h3>Micro Brew</h3>
                </div>
                <nav>
                    <ul>
                        <li className={/dashboard/.test(pathname) ? "active" : ""}>
                            <Link to={`/dashboard/${user.id}`}>Dashboard</Link>
                        </li>
                        <li className={pathname == "/feed" ? "active" : ""}>
                            <Link to="/feed">Feed</Link>
                        </li>
                        <li className={pathname == "/map" ? "active" : ""}>
                            <Link to="/map">Map</Link>
                        </li>
                        <li className={pathname == "/profile" ? "active" : ""}>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
    
                <Logout />
            </header>
        );
    }

};

export default Header;
