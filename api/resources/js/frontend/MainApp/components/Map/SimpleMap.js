import React, { useState, useEffect } from "react";
import axios from "axios";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";
import InfoWindow from "./InfoWindow";

// const exampleMapStyles = [
//     {
//         elementType: "geometry",
//         stylers: [
//             {
//                 color: "#f5f5f5"
//             }
//         ]
//     },
//     {
//         elementType: "labels.icon",
//         stylers: [
//             {
//                 visibility: "off"
//             }
//         ]
//     },
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
// ];

const SimpleMap = () => {
    const [center, setCenter] = useState({ lat: 50.102872, lng: 14.450079 });
    const [zoom, setZoom] = useState(12);
    const [users, setUsers] = useState();

    const fetchUsers = async () => {
        await axios.get(`/sanctum/csrf-cookie`);
        await axios
            .get(`/api/users`)
            .then(function(response) {
                console.log(response);
                setUsers(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleClick = user => {
        console.log(user);
    };

    console.log(users);

    if (users) {
        return (
            <div style={{ height: "80vh", width: "80%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.MIX_GOOGLE_API_KEY
                    }}
                    // options={{
                    //     styles: exampleMapStyles
                    // }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <InfoWindow lat={50.102872} lng={14.450079} />

                    {users.map(user => {
                        return (
                            <Marker
                                key={user.id}
                                lat={user.lat}
                                lng={user.lng}
                                user={user}
                                name="My Marker"
                                color="black"
                                handleClick={handleClick}
                            />
                        );
                    })}

                    {/* <Marker
                    key="marker_1"
                    icon={{
                        url: "https://cdn.mindbowser.com/custom_marker_pin.svg",
                        anchor: new google.maps.Point(17, 46),
                        scaledSize: new google.maps.Size(37, 37)
                    }}
                    position={{
                        lat: 47.444,
                        lng: -122.176
                    }}
                /> */}
                </GoogleMapReact>
            </div>
        );
    } else {
        return <h1>...loading</h1>;
    }
};

export default SimpleMap;
