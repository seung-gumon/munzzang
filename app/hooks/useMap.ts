import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

type Location = {
  latitude: number;
  longitude: number;
};

const DEFAULT_LOCATION = { latitude: 37.4862618, longitude: 127.1222903 };

function useMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [myLocation, setMyLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleGeolocationError = () => {
      toast.error('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation(DEFAULT_LOCATION);
    };

    const fetchCurrentLocation = async () => {
      try {
        setIsLoading(true);
        if (navigator.geolocation) {
          // eslint-disable-next-line max-len
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });

          setMyLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        } else {
          handleGeolocationError();
        }
      } catch (error) {
        console.error('Exception:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentLocation();
  }, []);

  useEffect(() => {
    if (myLocation !== null && typeof myLocation !== 'string') {
      const { latitude, longitude } = myLocation;
      const currentPosition = [latitude, longitude];

      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  }, [myLocation]);

  console.log('isLoading:', isLoading);

  return {
    myLocation,
    isLoading,
  };
}

export default useMap;
