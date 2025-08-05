import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../Styles/locationMap.css";
import propertyData from "../../data/properties";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const PropertyLocation = () => {
  const { id } = useParams(); // Get ID from URL
  const property = propertyData.find((p) => p.id === parseInt(id));
  const defaultPosition = [17.950350, 102.621348];

  const [position, setPosition] = useState(defaultPosition);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    if (property && Array.isArray(property.location)) {
      setPosition(property.location);
      setLocationName(property.name || `Lat: ${property.location[0]}, Lon: ${property.location[1]}`);
    } else {
      setLocationName("Location not available");
    }
  }, [property]);

  return (
    <div className="map-wrapper">
      <h2>Location</h2>
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%", borderRadius: "12px" }}
        zoomControl={false}
      >
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&copy; <a href="https://osm.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>{locationName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PropertyLocation;
