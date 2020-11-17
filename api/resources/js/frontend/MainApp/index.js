import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import Feed from "./Feed";
import Map from "./Map";
import Profile from "./Profile";
import Header from "./Header";
import App from "../App";

function MainApp() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/dashboard/:id">
                    <Dashboard />
                </Route>
                <Route path="/feed">
                    <Feed />
                </Route>
                <Route path="/map">
                    <Map />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
}

export default MainApp;
