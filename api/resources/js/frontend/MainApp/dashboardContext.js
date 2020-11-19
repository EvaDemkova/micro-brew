import React, { useState, useContext } from "react";

const DashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
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
                setBeerpostToModify
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
