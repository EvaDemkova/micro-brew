import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ListBeerpost from "./components/ListBeerpost";
import ProfileCard from "./components/ProfileCard";
import BeerpostForm from "./components/BeerpostForm/BeerpostForm";
import "./styles/dashboard.scss";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";

const Dashboard = () => {
    const [isBeerpostForm, setIsBeerpostForm] = useState(false);
    const { user } = useGlobalContext();
    const { id } = useParams();

    if (isBeerpostForm === false) {
        return (
            <div className="dashboard">
                <ProfileCard id={id} />
                <ListBeerpost url={`/api/beerposts/users/${id}`} />
                {user.id == id && (
                    <BsFillPlusCircleFill
                        className="plus-btn"
                        onClick={() => setIsBeerpostForm(true)}
                    />
                )}
            </div>
        );
    }

    if (isBeerpostForm) {
        return (
            <BeerpostForm
                isBeerpostForm={isBeerpostForm}
                setIsBeerpostForm={setIsBeerpostForm}
            />
        );
    }
};

export default Dashboard;
