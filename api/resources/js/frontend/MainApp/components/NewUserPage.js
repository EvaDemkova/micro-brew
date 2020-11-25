import React from "react";
import './styles/newUserPage.scss';

const NewUserPage = () => {

    if (window.location.pathname === '/feed') {
        return (
            <div className="newUserPage">
                <h1>Welcome to the <span>MicroBrew</span> community !</h1>

                <h4>Few tips to make your profile more active:</h4>
                <p>
                    <span>Follow</span> some brewers, we propose you a list of them on the right.
                </p>
                <p>You can also find more brewers on the <span>Map</span></p>
                <p>
                    <span>Update your profile</span> to add a profile picture and your location
                </p>
                <p>Create your first recipe in your <span>Dashboard</span></p>
            </div>
        )
    } else {
        return (
            <div className="newUserPage">
                <h2>Create your first <span>Beerpost</span></h2>
            </div>
        )
    }
};

export default NewUserPage;
