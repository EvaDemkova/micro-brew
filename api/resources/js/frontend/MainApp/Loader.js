import { Autocomplete } from "@material-ui/lab";
import React from "react";
import Loader from "react-loader-spinner";

const style = {
    width: "100vw",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const LoaderComp = () => {
    return (
        <div style={style}>
            <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={10000} //10 secs
            />
        </div>
    );
};

export default LoaderComp;
