import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ListBeerpost from "./components/ListBeerpost";
import ProfileCard from "./components/ProfileCard";
import BeerpostForm from "./components/BeerpostForm/BeerpostForm";
import "./styles/dashboard.scss";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { useDashboardContext } from "./dashboardContext";

const Dashboard = () => {
    const {
        isBeerpostForm,
        openBeerpostForm,
        formIsNotModifying
    } = useDashboardContext();
    const { user } = useGlobalContext();
    const { id } = useParams();

    return (
        <div className="dashboard">
            <ProfileCard id={id} />
            <ListBeerpost url={`/api/beerposts/users/${id}`} />
            {user.id == id && (
                <BsFillPlusCircleFill
                    className="plus-btn"
                    onClick={() => {
                        openBeerpostForm();
                        formIsNotModifying();
                    }}
                />
            )}
            {isBeerpostForm && <BeerpostForm />}
        </div>
    );
};

export default Dashboard;
