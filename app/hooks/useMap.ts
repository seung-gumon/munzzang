import { useEffect, useRef } from 'react';
import useGetClientLocation from '@/app/hooks/useGetClientLocation';

// const MARKER_ICON = {
//   url: 'PIN IMAGE',
//   size: new naver.maps.Size(50, 52),
//   origin: new naver.maps.Point(0, 0),
//   anchor: new naver.maps.Point(25, 26),
// };

function useMap() {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const { isLoading, myLocation } = useGetClientLocation();

  useEffect(() => {
    if (myLocation) {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: false,

      });

      new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map,
        // 원하는 이미지로 마커 커스텀
        // icon: MARKER_ICON,
      });
    }
  }, [myLocation]);

  return {
    myLocation,
    isLoading,
    mapRef,
  };
}

export default useMap;
