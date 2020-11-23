import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./Homepage/Homepage";
import Dashboard from "./MainApp/Dashboard";
import Feed from "./MainApp/Feed";
import Map from "./MainApp/Map";
import Profile from "./MainApp/Profile";
import Header from "./MainApp/components/Header";
import ErrorPage from "./MainApp/ErrorPage";
import Alert from "./MainApp/components/Alert";
import { useGlobalContext } from "./context";
import { DashboardProvider } from "./MainApp/dashboardContext";

function App() {
    const { alert } = useGlobalContext();
    return (
        <Router>
            {alert.isAlert && <Alert />}
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/dashboard/:id">
                    <Header />
                    <DashboardProvider>
                        <Dashboard />
                    </DashboardProvider>
                </Route>
                <Route path="/feed">
                    <Header />
                    <DashboardProvider>
                        <Feed />
                    </DashboardProvider>
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
