// GoogleMap.tsx
"use client"; // Next.js에서 클라이언트 사이드 실행
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
export var GoogleMap = function (_a) {
    var apiKey = _a.apiKey, _b = _a.center, center = _b === void 0 ? {
        lat: 37.350246,
        lng: 126.925494,
    } : _b, _c = _a.zoom, zoom = _c === void 0 ? 10 : _c, _d = _a.markers, markers = _d === void 0 ? [
        {
            lat: 37.350246,
            lng: 126.925494,
        },
    ] : _d, _e = _a.mapId, mapId = _e === void 0 ? "default-map-id" : _e;
    var mapRef = useRef(null);
    var mapInstance = useRef(null);
    useEffect(function () {
        if (typeof window === "undefined" || !mapRef.current)
            return;
        // Google Maps 스크립트 추가
        var script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey);
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);
        return function () {
            document.head.removeChild(script);
        };
    }, []);
    var initMap = function () {
        if (!mapRef.current || typeof google === "undefined")
            return;
        // 지도 초기화
        mapInstance.current = new google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom,
            mapId: mapId,
            disableDefaultUI: true,
        });
        // 마커 추가
        markers.forEach(function (marker) {
            new google.maps.Marker({
                position: { lat: marker.lat, lng: marker.lng },
                map: mapInstance.current,
                title: marker.title || "",
            });
        });
    };
    return (_jsx("div", { ref: mapRef, style: {
            width: "100%",
            height: "100%",
        } }));
};
