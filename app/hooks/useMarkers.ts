import { useEffect, useRef, RefObject } from 'react';
import { useRouter } from 'next/navigation';
import { type Location } from '@/app/model/Location';
import Link from 'next/link';

interface LocationInfo {
  lat: number;
  lng: number;
  info: string;
}

// Dummy locations and associated information
const dummyLocations: LocationInfo[] = [
  { lat: 37.5665, lng: 126.9780, info: 'Seoul' }, // Seoul
  { lat: 35.6890, lng: 126.9785, info: 'Tokyo' }, // Tokyo
  // Add more locations as needed
];

interface MapRef {
  map: naver.maps.Map;
  userMarker: naver.maps.Marker;
  markers: naver.maps.Marker[];
}

const userMarkerImage = {
  url: 'https://map.pstatic.net/res/category/image/00024-00012.png',
  size: new naver.maps.Size(50, 50),
  origin: new naver.maps.Point(0, 0),
  anchor: new naver.maps.Point(25, 25),
};

function createInfoWindowContent(info: string) {
  const infoWindowContent = document.createElement('div');
  infoWindowContent.innerHTML = `
    <div class="bg-white rounded w-[calc(100%+2rem)]">
        <div class="py-3.5 px-5 relative">
            <div class="inline-block align-top">
                <strong class="text-sky-600 text-base font-bold mr-1.5">지축역한림풀에버</strong>
                <span class="text-neutral-400 text-sm">아파트</span>
            </div>
            <div class="mt-1 text-xs">
                <span class="text-neutral-700">경기 고양시 덕양구 오부자로 15</span>
            </div>
           
            <button class="mt-1 text-xs">
                <span class="text-base overflow-hidden">상세 보기 &rarr;</span>
            </button>
        </div>
    </div>
  `;
  return infoWindowContent;
}

function useMarkers(mapRef: RefObject<naver.maps.Map>, myLocation: Location | null) {
  const markersRef = useRef<MapRef | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!myLocation || !mapRef.current) return;

    const { latitude, longitude } = myLocation;

    const currentUserMarker: naver.maps.Marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapRef.current,
      icon: userMarkerImage,
    });

    const markers: naver.maps.Marker[] = [];
    const listeners: naver.maps.MapEventListener[] = [];

    dummyLocations.forEach((location) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(location.lat, location.lng),
        map: mapRef.current!,
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: createInfoWindowContent(location.info),
        borderWidth: 0,
        // borderRadius: '100%',
      });

      const listener = naver.maps.Event.addListener(marker, 'click', () => {
        infoWindow.open(mapRef.current!, marker);
        router.push(`/?lat=${location.lat}&lng=${location.lng}&info=${location.info}`);
      });

      listeners.push(listener);
      markers.push(marker);
    });

    markersRef.current = { map: mapRef.current, userMarker: currentUserMarker, markers };

    return () => {
      listeners.forEach((listener) => {
        naver.maps.Event.removeListener(listener);
      });

      if (markersRef.current) {
        markersRef.current.userMarker.setMap(null);
        markersRef.current.markers.forEach((marker) => marker.setMap(null));
      }
    };
  }, [myLocation, mapRef]);

  return markersRef;
}

export default useMarkers;
