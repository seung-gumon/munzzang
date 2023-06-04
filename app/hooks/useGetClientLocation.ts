import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { type Location } from '@/app/model/Location';
import { create } from 'zustand';

interface CoordinateStore {
  coordinates : Location | null;
  setCoordinates : (coordinates : Location) => void;
}

const useCoordinates = create<CoordinateStore>((set) => ({
  coordinates: null,
  setCoordinates: (coordinatesParams : Location) => set({ coordinates: coordinatesParams }),
}));

const DEFAULT_LOCATION = { latitude: 37.4862618, longitude: 127.1222903 };

type UseGetLocation = {
  myLocation: Location | null;
  isLoading: boolean;
};

function useGetClientLocation() : UseGetLocation {
  const [isLoading, setIsLoading] = useState(true);
  const { coordinates, setCoordinates } = useCoordinates();

  useEffect(() => {
    const handleGeolocationError = () => {
      toast.error('기본 위치로 지정합니다.');
      setCoordinates(DEFAULT_LOCATION);
    };

    const fetchCurrentLocation = async () => {
      try {
        let lat : null | string = null;
        let lng : null | string = null;
        if (window.sessionStorage.getItem('coords')) {
          const [latitude, longitude] = (window.sessionStorage.getItem('coords') as string).split(',');
          lat = latitude;
          lng = longitude;
          setCoordinates({ latitude: +latitude, longitude: +longitude });
        } else {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          if (position.coords) {
            window.sessionStorage.setItem('coords', `${position.coords.latitude.toString()},${position.coords.longitude.toString()}`);
            const { latitude, longitude } = position.coords;
            lat = latitude.toString();
            lng = longitude.toString();
            setCoordinates({ latitude, longitude });
          }
        }

        if (!lat || !lng) {
          throw new Error('No Coordinate');
        }
      } catch (exception) {
        handleGeolocationError();
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentLocation();
  }, []);

  return {
    myLocation: coordinates,
    isLoading,
  };
}

export default useGetClientLocation;
