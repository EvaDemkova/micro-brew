import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const SimpleMap = () => {
    const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyB-pSa870-NrS2xwdl0Lc2GvPFmPJcAGLQ"
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker
                    lat={11.0168}
                    lng={76.9558}
                    name="My Marker"
                    color="blue"
                />
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
};

export default SimpleMap;
