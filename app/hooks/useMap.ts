import { useEffect, useRef } from 'react';
import useGetClientLocation from '@/app/hooks/useGetClientLocation';
import { useSearchParams } from 'next/navigation';

function useMap() {
  const mapRef = useRef<null | naver.maps.Map>(null);
  const { isLoading, myLocation } = useGetClientLocation();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (myLocation) {
      let lat : string | null = null;
      let lng : string | null = null;
      const { latitude, longitude } = myLocation;
      [lat, lng] = window.sessionStorage.getItem('lastCoords')?.split(',') || [null, null];
      const lastZoom = window.sessionStorage.getItem('lastZoom');
      const mapInitialization = (): naver.maps.Map => new naver.maps.Map('map', {
        center: new naver.maps.LatLng(lat ? +lat : latitude, lng ? +lng : longitude),
        zoomControl: false,
        zoom: lastZoom ? +lastZoom : 15,
      });

      const map = mapInitialization();

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
