# Google Map React Component

A lightweight React component for rendering Google Maps with custom markers. This component is designed for use with **Next.js** or any React application and is simple to configure.

---

## 📦 Installation

To install the component, run the following command:

```bash
npm install @zzang535/react-google-map
```

```bash
yarn add @zzang535/react-google-map
```

## 🚀 Usage

Basic example:

```bash
'use client'; // For Next.js client-side components

import { GoogleMap, type GoogleMapProps } from "@zzang535/react-google-map";

export default function Home() {
  const mapProps: GoogleMapProps = {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    center: {
      lat: 37.480392,
      lng: 126.998787,
    },
    zoom: 16,
    markers: [
      {
        lat: 37.480392,
        lng: 126.998787,
      },
    ],
    mapId: "map-id",
  };

  return (
    <div style={{ height: "100vh", width: "100vw", border: "10px solid pink" }}>
      <GoogleMap {...mapProps} />
    </div>
  );
}
```
