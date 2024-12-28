import React from "react";
import { GoogleMap } from "./lib/GoogleMap";

function App() {
  return (
    <div className="App">
      <h1>REACT-GOOGLE-MAP</h1>
      <div style={{ width: "100vw", height: "100vh" }}>
        <GoogleMap
          apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY || ""}
          center={{ lat: 37.350246, lng: 126.925494 }}
          zoom={10}
          markers={[
            { lat: 37.350246, lng: 126.925494, title: "Marker 1" },
            { lat: 37.360246, lng: 126.935494, title: "Marker 2" },
          ]}
          mapId="your-map-id"
        />
      </div>
    </div>
  );
}

export default App;
