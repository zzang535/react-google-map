import React from 'react';
export type GoogleMapProps = {
    apiKey: string;
    center: {
        lat: number;
        lng: number;
    };
    zoom?: number;
    markers?: {
        lat: number;
        lng: number;
        title?: string;
    }[];
    mapId?: string;
};
export declare const GoogleMap: React.FC<GoogleMapProps>;
