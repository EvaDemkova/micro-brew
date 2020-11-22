import React, { useState } from "react";
import { IoMdBeer } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./beerpost.scss";
import BeerpostExtend from "./BeerpostExtend";
import LikeBtn from "../LikeBtn";
import { ebcToColor } from "./ebcToColor";
import { Link } from "react-router-dom";
import moment from "moment";
import { useGlobalContext } from "../../../context";
import { useDashboardContext } from "../../dashboardContext";
import BeerpostCarousel from './BeerpostCarousel';

const Beerpost = ({ data }) => {
    const {
        id,
        updated_at,
        beer_name,
        type,
        abv,
        batch_volume,
        carbonation,
        description,
        ebc,
        gravity,
        ibu,
        og,
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

    const extendsBeerpost = () => {
        setIsExtended(!isExtended);
    };

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
                        Posted : {moment(updated_at).fromNow()}
                    </div>
                    <LikeBtn likes={likes} beerpost_id={id} />
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
                    <div className="status">Status {status}</div>
                    <div className="type">Type - {type}</div>
                    <div className="stats">
                        <ul>
                            <li>ABV - {abv}</li>
                            <li>OG - {og}</li>
                            <li>EBC - {ebc}</li>
                            <li>IBU - {ibu}</li>
                            <li>Carbonation - {carbonation}</li>
                            <li>Gravity -{gravity}</li>
                            <li>Batch Volume - {batch_volume}</li>
                        </ul>
                    </div>
                </div>
                <div className="beerpost__photos">
                    {
                        (beerpost_photos.length !== 0) ? <BeerpostCarousel photos={beerpost_photos} /> : 
                        <div className="beerpost__photos__na"></div>
                    } 
                </div>
                
            </div>
            <div className="arrow_down" onClick={extendsBeerpost}>
                {isExtended ? <FaArrowUp /> : <FaArrowDown />}
            </div>
            {isExtended && <BeerpostExtend data={data} />}
        </div>
    );
};

export default Beerpost;
