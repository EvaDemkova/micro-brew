import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();
        await axios.post("/logout");
        history.push("/");
    };
    return (
        <div>
            <a href="#" onClick={handleSubmit}>
                Logout
            </a>
        </div>
    );
};

export default Logout;
