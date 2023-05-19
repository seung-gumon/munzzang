import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { type Location } from '@/app/model/Location';

const DEFAULT_LOCATION = { latitude: 37.4862618, longitude: 127.1222903 };

type UseGetLocation = {
  myLocation: Location | null;
  isLoading: boolean;
};

function useGetClientLocation() : UseGetLocation {
  const [myLocation, setMyLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleGeolocationError = () => {
      toast.error('현재 위치를 알 수 없어 기본 위치로 지정합니다.');
      setMyLocation(DEFAULT_LOCATION);
    };

    const fetchCurrentLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      } catch (error) {
        handleGeolocationError();
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentLocation();
  }, []);

  return {
    myLocation,
    isLoading,
  };
}

export default useGetClientLocation;
