import { useEffect, useRef } from 'react';
import useGetClientLocation from '@/app/hooks/useGetClientLocation';
import { useRouter, useSearchParams } from 'next/navigation';

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

function useMap() {
  const mapRef = useRef<MapRef | null>(null);
  const { isLoading, myLocation } = useGetClientLocation();
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryStringLat = searchParams?.get('lat');
  const queryStringLng = searchParams?.get('lng');

  useEffect(() => {
    if (myLocation) {
      const { latitude, longitude } = myLocation;

      const mapInitialization = (): naver.maps.Map => new naver.maps.Map('map', {
        center: new naver.maps.LatLng(latitude, longitude),
        zoomControl: false,
      });

      const map = mapInitialization();

      const currentUserMarker : naver.maps.Marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map,
        icon: userMarkerImage,
      });

      const markers: naver.maps.Marker[] = [];
      const listeners : naver.maps.MapEventListener[] = [];

      dummyLocations.forEach((location) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(location.lat, location.lng),
          map,
        });

        // Creating a custom HTML content for the infowindow
        const infoWindowContent = document.createElement('div');
        infoWindowContent.innerHTML = `
          <section class="bg-white rounded p-1.5">
            <h3 class="text-lg font-bold mb-2">${location.info} &rarr;</h3>
          </section>
        `;

        const infoWindow = new naver.maps.InfoWindow({
          content: infoWindowContent,
          borderWidth: 0,
          // borderRadius: '100%',
        });

        // Adding click event listener to the marker
        const listener = naver.maps.Event.addListener(marker, 'click', () => {
          infoWindow.open(map, marker);
          // console.log('On Pop Up Modal');
          router.push(`/?lat=${location.lat}&lng=${location.lng}&info=${location.info}`);
        });

        listeners.push(listener);
        markers.push(marker);
      });

      /** QueryString 존재할땐 QueryString으로 이동 */
      if (queryStringLat && queryStringLng) {
        const position = new naver.maps.LatLng(+queryStringLat, +queryStringLng);
        map.setCenter(position);
      }

      // Store map and markers in ref for cleanup
      mapRef.current = { map, userMarker: currentUserMarker, markers };

      // Return cleanup function
      return () => {
        listeners.forEach((listener) => {
          naver.maps.Event.removeListener(listener);
        });

        if (mapRef.current) {
          // Remove markers from map
          mapRef.current.userMarker.setMap(null);
          mapRef.current.markers.forEach((marker) => marker.setMap(null));

          // Remove map
          mapRef.current = null;
        }
      };
    }
  }, [myLocation]);

  return {
    myLocation,
    isLoading,
    mapRef,
  };
}

export default useMap;
