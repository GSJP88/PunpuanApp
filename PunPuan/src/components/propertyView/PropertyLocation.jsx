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

const PropertyLocation = ({ property }) => {
  const defaultPosition = [17.950350, 102.621348];

  // location จาก backend อาจมาเป็น string หรือ array
  const [position, setPosition] = useState(defaultPosition);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    if (!property) return;
    let loc = null;

    // location อาจมาเป็น string: "17.95,102.62" หรือ array: [17.95,102.62]
    if (property.Location_Link) {
      // พยายามแปลงจาก Location_Link เป็น lat,lng
      const locStr = property.Location_Link;
      // ถ้าเป็น URL ของ google maps แบบ https://maps.app.goo.gl/xxxx เราไม่สามารถแปลงเป็นพิกัดง่ายๆ
      // แต่ถ้าเป็น "lat,lng" เช่น "17.95,102.62" ให้แปลงได้
      const match = locStr.match(/(\d+\.\d+),\s*(\d+\.\d+)/);
      if (match) {
        loc = [parseFloat(match[1]), parseFloat(match[2])];
      }
    } else if (property.location && Array.isArray(property.location)) {
      loc = property.location;
    }

    if (loc) {
      setPosition(loc);
      setLocationName(property.Property_Name || "Property Location");
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
