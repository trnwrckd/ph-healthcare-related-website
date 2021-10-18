import './About.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import React from 'react';

// because the marker wasn't appearing otherwise
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

const About = () => {
    const coordinate = { lat: 22.3639, lng: 91.84071 };

    return (
        <div className="container-fluid about">
            <div className="container py-2">
                <div className="row row-cols-1 row-cols-md-2 py-3">
                    <div>
                        <h1>About</h1>
                        paragraph
                    </div>
                    <div>
                        <MapContainer center={coordinate} zoom={16} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={coordinate}>
                                <Popup>
                                    Our Headquarters.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;