import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./Homepage/Homepage";
import Dashboard from "./MainApp/Dashboard";
import Feed from "./MainApp/Feed";
import Map from "./MainApp/Map";
import Profile from "./MainApp/Profile";
import Header from "./MainApp/Header";
import ErrorPage from "./MainApp/ErrorPage";
import Alert from "./MainApp/components/Alert";

function App() {
    return (
        <Router>
            <Alert />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/dashboard/:id">
                    <Header />
                    <Dashboard />
                </Route>
                <Route path="/feed">
                    <Header />
                    <Feed />
                </Route>
                <Route path="/map">
                    <Header />
                    <Map />
                </Route>
                <Route path="/profile">
                    <Header />
                    <Profile />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
