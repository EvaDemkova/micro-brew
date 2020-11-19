import React, { useState, useContext } from "react";

const DashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
    const [isFormUpdating, setIsFormUpdating] = useState(false);
    const formIsModifying = () => {
        setIsFormUpdating(true);
    };
    const formIsNotModifying = () => {
        setIsFormUpdating(false);
    };

    const [isBeerpostForm, setIsBeerpostForm] = useState(false);
    const openBeerpostForm = () => {
        setIsBeerpostForm(true);
    };
    const closeBeerpostForm = () => {
        setIsBeerpostForm(false);
    };

    return (
        <DashboardContext.Provider
            value={{
                isFormUpdating,
                formIsModifying,
                formIsNotModifying,
                isBeerpostForm,
                openBeerpostForm,
                closeBeerpostForm
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
