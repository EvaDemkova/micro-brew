import React, { useState, useContext } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const DashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
    const { createAlert } = useGlobalContext();

    const [isFormUpdating, setIsFormUpdating] = useState(false);
    const formIsUpdating = () => {
        setIsFormUpdating(true);
    };
    const formIsNotUpdating = () => {
        setIsFormUpdating(false);
    };

    const [isBeerpostForm, setIsBeerpostForm] = useState(false);
    const openBeerpostForm = () => {
        setIsBeerpostForm(true);
    };
    const closeBeerpostForm = () => {
        setIsBeerpostForm(false);
    };

    const [BeerpostToModify, setBeerpostToModify] = useState([]);
    const [isBeerListRender, setIsBeerListRender] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const addFollow = async (id, name) => {
        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .post(`/api/users/add_follow`, {
                id_to_follow: id
            })
            .then(function(response) {
                createAlert("success", `You are now following ${name}`);
                setIsBeerListRender(true);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <DashboardContext.Provider
            value={{
                isFormUpdating,
                formIsUpdating,
                formIsNotUpdating,
                isBeerpostForm,
                openBeerpostForm,
                closeBeerpostForm,
                BeerpostToModify,
                setBeerpostToModify,
                isBeerListRender,
                setIsBeerListRender,
                isLoading,
                setIsLoading,
                addFollow
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => {
    return useContext(DashboardContext);
};

export { DashboardContext, DashboardProvider };
