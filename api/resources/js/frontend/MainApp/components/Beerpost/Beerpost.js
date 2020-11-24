import React, { useState } from "react";
import { IoMdBeer } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import "./beerpost.scss";
import BeerpostExtend from "./BeerpostExtend";
import LikeBtn from "../LikeBtn";
import { ebcToColor } from "./ebcToColor";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGlobalContext } from "../../../context";
import { useDashboardContext } from "../../dashboardContext";
import BeerpostCarousel from "./BeerpostCarousel";
import { FormControlLabel, Switch, withStyles } from "@material-ui/core";

const ColoredSwitch = withStyles({
    switchBase: {
        color: "#C5A289",
        "&$checked": {
            color: "#8B4513"
        },
        "&$checked + $track": {
            backgroundColor: "#8B4513"
        }
    },
    checked: {},
    track: {}
})(Switch);

const Beerpost = ({ data }) => {
    const {
        id,
        updated_at,
        beer_name,
        type,
        description,
        ebc,
        status,
        likes,
        beerpost_photos
    } = data;
    const [isExtended, setIsExtended] = useState(false);
    const { user } = useGlobalContext();
    const {
        openBeerpostForm,
        formIsUpdating,
        setBeerpostToModify
    } = useDashboardContext();

    return (
        <div className="beerpost">
            <div className="beerpost__preview">
                <div className="left-menu">
                    <div className="user-info">
                        <img src={`${data.user.profile_photo}`} alt="" />
                        <p>
                            <Link to={`/dashboard/${data.user.id}`}>
                                {data.user.name}
                            </Link>
                        </p>
                    </div>
                    <div className="updated-time">
                        <p>
                            Posted : <span>{moment(updated_at).fromNow()}</span>
                        </p>
                    </div>
                    <div className="stats">
                        <LikeBtn likes={likes} beerpost_id={id} />
                        <div className="comments-stats">
                            <BiMessageDetail className="comment-icon" />
                            {data.comments.length}
                        </div>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="header">
                        <div className="logo">
                            <IoMdBeer style={{ color: ebcToColor(ebc) }} />
                        </div>
                        <div className="title">
                            <h3>{beer_name}</h3>
                            <p>{description}</p>
                        </div>
                        {data.user.id == user.id && (
                            <MdEdit
                                className="edit-icon"
                                onClick={() => {
                                    openBeerpostForm();
                                    formIsUpdating();
                                    setBeerpostToModify(data);
                                }}
                            />
                        )}
                    </div>
                    <div className="status">
                        <h4>
                            Status:{" "}
                            <span style={{ color: "#8B4513" }}>{status}</span>
                        </h4>
                    </div>
                    <div className="type">
                        <h4>
                            Type:{" "}
                            <span
                                style={
                                    type === "ale"
                                        ? { color: "#f28e1c" }
                                        : { color: "#fec63d" }
                                }
                            >
                                {type}
                            </span>
                        </h4>
                    </div>
                    <div className="switch-btn">
                        <FormControlLabel
                            control={
                                <ColoredSwitch
                                    checked={isExtended}
                                    onChange={() => setIsExtended(!isExtended)}
                                    name="checkedB"
                                    //color="primary"
                                />
                            }
                            label=""
                        />
                    </div>
                </div>
                <div className="beerpost__photos">
                    {beerpost_photos.length !== 0 ? (
                        <BeerpostCarousel photos={beerpost_photos} />
                    ) : (
                        <div className="beerpost__photos__na"></div>
                    )}
                </div>
            </div>

            {isExtended && <BeerpostExtend data={data} />}
        </div>
    );
};

export default Beerpost;
