import { useEffect, useRef } from 'react';
import useGetClientLocation from '@/app/hooks/useGetClientLocation';
import { useSearchParams } from 'next/navigation';

function useMap() {
  const mapRef = useRef<null | naver.maps.Map>(null);
  const { isLoading, myLocation } = useGetClientLocation();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (myLocation) {
      const { latitude, longitude } = myLocation;

      const mapInitialization = (): naver.maps.Map => new naver.maps.Map('map', {
        center: new naver.maps.LatLng(latitude, longitude),
        zoomControl: false,
      });

      const map = mapInitialization();

      console.log(map.getCenter(), 'map get bounds');

      // Update map center when query string changes
      const queryStringLat = searchParams?.get('lat');
      const queryStringLng = searchParams?.get('lng');

      if (queryStringLat && queryStringLng) {
        const position = new naver.maps.LatLng(+queryStringLat, +queryStringLng);
        map.setCenter(position);
      }

      mapRef.current = map;

      // Cleanup
      return () => {
        mapRef.current = null;
      };
    }
  }, [myLocation, searchParams]);

  return { myLocation, isLoading, mapRef };
}

export default useMap;
