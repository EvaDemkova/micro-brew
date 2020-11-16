import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ id: "", name: "" });

    const fetchUser = response => {
        setUser({ id: response.data.id, name: response.data.name });
    };

    return (
        <AppContext.Provider value={{ user, fetchUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
