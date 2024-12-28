export type GoogleMapProps = {
  apiKey: string; // Google Maps API 키
  center: { lat: number; lng: number }; // 지도 중심 좌표
  zoom?: number; // 줌 레벨 (기본값: 10)
  markers?: { lat: number; lng: number; title?: string }[]; // 마커 좌표 리스트
  mapId?: string; // Google Map ID (옵션)
};
