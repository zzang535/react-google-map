// GoogleMap.tsx
'use client'; // Next.js에서 클라이언트 사이드 실행

import React, { useEffect, useRef } from 'react';

export type GoogleMapProps = {
    apiKey: string; // Google Maps API 키
    center: { lat: number; lng: number }; // 지도 중심 좌표
    zoom?: number; // 줌 레벨 (기본값: 10)
    markers?: { lat: number; lng: number; title?: string }[]; // 마커 좌표 리스트
    mapId?: string; // Google Map ID (옵션)
};

const GoogleMap: React.FC<GoogleMapProps> = ({
    apiKey,
    center,
    zoom = 10,
    markers = [],
    mapId = '',
}) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<google.maps.Map | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !mapRef.current) return;

        // Google Maps 스크립트 추가
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const initMap = () => {
        if (!mapRef.current || typeof google === 'undefined') return;

        // 지도 초기화
        mapInstance.current = new google.maps.Map(mapRef.current, {
            center,
            zoom,
            mapId,
            disableDefaultUI: true,
        });

        // 마커 추가
        markers.forEach((marker) => {
            new google.maps.Marker({
                position: { lat: marker.lat, lng: marker.lng },
                map: mapInstance.current!,
                title: marker.title || '',
            });
        });
    };

    return (
        <div
            ref={mapRef}
            style={{
                width: '100%',
                height: '500px',
            }}
        />
    );
};

export default GoogleMap;
