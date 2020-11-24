import React, { useState, useEffect } from "react";
import axios from "axios";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";
import InfoWindow from "./InfoWindow";
import { useGlobalContext } from "../../../context";
import Loader from "../Loader";
import "./simpleMap.scss";
import { Button, TextField } from "@material-ui/core";

const exampleMapStyles = [
    //     {
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#f5f5f5"
    //             }
    //         ]
    //     },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    //     {
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#616161"
    //             }
    //         ]
    //     },
    //     {
    //         elementType: "labels.text.stroke",
    //         stylers: [
    //             {
    //                 color: "#f5f5f5"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "administrative.land_parcel",
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#bdbdbd"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "poi",
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#eeeeee"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "poi",
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#757575"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "poi.park",
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#e5e5e5"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "poi.park",
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#9e9e9e"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "road",
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#ffffff"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "road.arterial",
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#757575"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "road.highway",
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#dadada"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "road.highway",
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#616161"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "road.local",
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#9e9e9e"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "transit.line",
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#e5e5e5"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "transit.station",
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#eeeeee"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "water",
    //         elementType: "geometry",
    //         stylers: [
    //             {
    //                 color: "#c9c9c9"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: "water",
    //         elementType: "labels.text.fill",
    //         stylers: [
    //             {
    //                 color: "#9e9e9e"
    //             }
    //         ]
    //     }
];

const SimpleMap = () => {
    const [center, setCenter] = useState({ lat: 50.073658, lng: 14.41854 });
    const [zoom, setZoom] = useState(12);
    const [users, setUsers] = useState();
    const [infosWindow, setInfosWindow] = useState({
        display: false,
        lat: "",
        lng: "",
        name: "",
        id: ""
    });
    const [searchValue, setSearchValue] = useState("");
    const [searchText, setSearchText] = useState("");
    const { user } = useGlobalContext();

    const fetchUsers = async () => {
        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .get(`/api/users/map`)
            .then(function(response) {
                setUsers(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    useEffect(() => {
        if (user.lat) {
            setCenter({ lat: user.lat, lng: user.lng });
        }
        fetchUsers();
    }, []);

    const handleClick = user => {
        console.log(user);
        setInfosWindow({
            display: true,
            lat: user.lat,
            lng: user.lng,
            name: user.name,
            id: user.id
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const regex = new RegExp(`${searchValue}`, "i");
        const result = users.friend_list
            .filter(({ name }) => name.match(regex))
            .concat(
                users.follow_list_proposal.filter(({ name }) =>
                    name.match(regex)
                )
            );

        if (result.length !== 0) {
            setCenter({ lat: result[0].lat, lng: result[0].lng });
            setInfosWindow({
                display: true,
                lat: result[0].lat,
                lng: result[0].lng,
                name: result[0].name,
                id: result[0].id
            });
        } else {
            setSearchText("No result found for this search");
        }
    };

    console.log(users);
    console.log(user);

    if (users) {
        return (
            <div className="simpleMap">
                <form className="form-search" onSubmit={handleSubmit}>
                    <TextField
                        id="standard-basic"
                        label="Type a name here"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />

                    <Button variant="contained" type="submit" style={{  
                                        backgroundColor: "#fec63d",  
                                        fontWeight: 'bold'
                                    }}>
                        SEARCH
                    </Button>
                    <p className="search-result">{searchText}</p>
                </form>
                <div style={{ height: "77vh", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.MIX_GOOGLE_API_KEY
                        }}
                        options={{
                            styles: exampleMapStyles
                        }}
                        center={center}
                        defaultZoom={zoom}
                    >
                        {infosWindow.display && (
                            <InfoWindow
                                lat={infosWindow.lat}
                                lng={infosWindow.lng}
                                name={infosWindow.name}
                                id={infosWindow.id}
                            />
                        )}

                        {users.follow_list_proposal.map(user => {
                            return (
                                <Marker
                                    key={user.id}
                                    lat={user.lat}
                                    lng={user.lng}
                                    user={user}
                                    name="My Marker"
                                    color="#c35817"
                                    handleClick={handleClick}
                                />
                            );
                        })}
                        {users.friend_list.map(user => {
                            return (
                                <Marker
                                    key={user.id}
                                    lat={user.lat}
                                    lng={user.lng}
                                    user={user}
                                    name="My Marker"
                                    color="#e8a317"
                                    handleClick={handleClick}
                                />
                            );
                        })}
                        <Marker
                            key={user.id}
                            lat={user.lat}
                            lng={user.lng}
                            user={user}
                            name="My Marker"
                            color="black"
                            handleClick={handleClick}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    } else {
        return <Loader />;
    }
};

export default SimpleMap;
