import React, { useState, useEffect } from "react";
import "./homepage.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Homepage = () => {
    const [isLoginForm, setIsLoginForm] = useState(false);
    const [isRegisterForm, setIsRegisterForm] = useState(false);

    useEffect(() => {
        if (isLoginForm || isRegisterForm) {
            const filter = document.querySelector(".filter");
            filter.addEventListener("click", () => {
                setIsLoginForm(false);
                setIsRegisterForm(false);
            });
            return () => {
                filter.removeEventListener("click", () => {
                    setIsLoginForm(false);
                    setIsRegisterForm(false);
                });
            };
        }
    }, [isLoginForm, isRegisterForm]);

    return (
        <div className="homepage">
            <div className="homepage__header">
                <div className="homepage__header__top">
                    <img src="/logo/homepage-logo.svg" alt="Logo"/>
                    <h1>Micro Brew</h1>
                    <h3>... Empty, Brew, Enjoy, Repeat ! ...</h3>
                </div>
                <div className="interface">
                    <button
                        className="btn btn-login"
                        onClick={() => setIsLoginForm(true)}
                        >
                        LOGIN
                    </button>
                    <button
                        className="btn btn-register"
                        onClick={() => setIsRegisterForm(true)}
                        >
                        REGISTER
                    </button>
                </div>
            </div>
            {(isLoginForm || isRegisterForm) && <div className="filter"></div>}
            {isLoginForm && <LoginForm />}
            {isRegisterForm && <RegisterForm />}
        </div>
    );
};

export default Homepage;
