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

import React from 'react';
import { GoogleMap } from '@zzang535/react-google-map';

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
        center={{ lat: 37.350246, lng: 126.925494 }}
        zoom={10}
        markers={[
          { lat: 37.350246, lng: 126.925494, title: 'Marker 1' },
          { lat: 37.360246, lng: 126.935494, title: 'Marker 2' },
        ]}
        mapId="your-map-id"
      />
    </div>
  );
}
```
