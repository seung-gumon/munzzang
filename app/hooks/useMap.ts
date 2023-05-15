'use client';

import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

type Location = {
  latitude: number;
  longitude: number;
};

function useMap() {
  const mapRef = useRef<HTMLElement | null | any>(null);
  const [myLocation, setMyLocation] = useState<Location | string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (navigator.geolocation) {
          await navigator.geolocation.getCurrentPosition(
            (position) => {
              setMyLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            () => {
              toast.error('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
              setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
            },
          );
        } else {
          toast.error('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
          setMyLocation({ latitude: 37.4862618, longitude: 127.1222903 });
        }
      } catch (e) {
        console.log('exception :::', e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      // 현재 위치 추적
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      // Naver Map 생성
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  }, [myLocation]);

  console.log('isLoading :::', isLoading);

  return {
    myLocation,
    isLoading,
  };
}

export default useMap;
