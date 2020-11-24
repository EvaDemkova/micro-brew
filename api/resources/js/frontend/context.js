import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ id: "", name: "" });
    const [alert, setAlert] = useState({
        isAlert: false,
        type: "info",
        message: "Alerte rouge"
    });

    const createAlert = (type, message) => {
        setAlert({ isAlert: true, type: type, message: message });
    };
    const resetAlert = () => {
        setAlert({ isAlert: false, type: "", message: "" });
    };

    const fetchUser = response => {
        setUser({
            id: response.data.id,
            name: response.data.name,
            lat: response.data.lat,
            lng: response.data.lng,
            photo: response.data.profile_photo
        });
    };
    const setCoordinates = (lat, lng) => {
        setUser({
            ...user,
            lat: lat,
            lng: lng
        });
    };

    return (
        <AppContext.Provider
            value={{
                user,
                fetchUser,
                alert,
                createAlert,
                resetAlert,
                setCoordinates
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
