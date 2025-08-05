import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../Styles/locationMap.css";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const extractLatLonFromUrl = (url) => {
  // Example: https://www.google.com/maps/place/53.4084,-2.9916
  const regex = /@?(-?\d{1,3}\.\d+),\s*(-?\d{1,3}\.\d+)/;
  const match = url.match(regex);
  if (match) {
    return [parseFloat(match[1]), parseFloat(match[2])];
  }
  return null;
};

const LocationMap = ({ mapsUrl = "https://www.google.com/maps/place/17.950350, 102.621348" }) => {
  const [position, setPosition] = useState([17.950350, 102.621348]);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    const coords = extractLatLonFromUrl(mapsUrl);
    if (coords) {
      setPosition(coords);
      setLocationName(`Lat: ${coords[0]}, Lon: ${coords[1]}`);
    } else {
      setLocationName("Invalid location URL");
    }
  }, [mapsUrl]);

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
          <Popup>{locationName || "Location"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
