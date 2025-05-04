import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css"; 

function MapSection() {
  useEffect(() => {
    if (document.getElementById("map")?._leaflet_id != null) return;

    const map = L.map("map").setView([20.5937, 78.9629], 5.5);



    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return (
    <div className="map-container">
      <div className="map-text">
        <h2>Explore Your Journey</h2>
        <p>Visualize your route, plan better, travel smarter ✨</p>
      </div>
      <div className="map-box">
        <div id="map" className="map-element"></div>
      </div>
    </div>
  );
}

export default MapSection;



