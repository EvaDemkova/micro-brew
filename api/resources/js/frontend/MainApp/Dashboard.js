import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ListBeerpost from "./components/ListBeerpost";
import ProfileCard from "./components/ProfileCard";
import BeerpostForm from "./components/BeerpostForm/BeerpostForm";
import "./styles/dashboard.scss";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { useDashboardContext } from "./dashboardContext";
import Loader from "./Loader";
import Statistics from './components/Statistics';

const Dashboard = () => {
    const {
        isBeerpostForm,
        openBeerpostForm,
        formIsNotUpdating
    } = useDashboardContext();
    const { user } = useGlobalContext();
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [isBeerpostForm]);

    return (
        <div className="dashboard">
            <ProfileCard id={id} />
            <ListBeerpost url={`/api/beerposts/users/${id}`} />
            {user.id == id && (
                <BsFillPlusCircleFill
                    className="plus-btn"
                    onClick={() => {
                        openBeerpostForm();
                        formIsNotUpdating();
                    }}
                />
            )}
            {isBeerpostForm && <BeerpostForm />}
            <Statistics url={`/api/beerposts/users/${id}`} />
        </div>
    );
};

export default Dashboard;
