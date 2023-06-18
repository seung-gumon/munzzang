import {
  useEffect, useRef, RefObject, useState,
} from 'react';
import { type Location } from '@/app/model/Location';
import { useQuery } from '@tanstack/react-query';
import { getListQueryHospital, getListQueryPharmacy } from '@/app/queryFns/listQueryFns';
import { useRouter } from 'next/navigation';
import { debounce } from 'lodash';
import { MedicalFacility } from '@/app/model/MedicalFacility';

interface MapRef {
  map: naver.maps.Map;
  userMarker: naver.maps.Marker;
  markers: naver.maps.Marker[];
}

const userMarkerImage = {
  url: '/images/my-position.png',
  size: new naver.maps.Size(50, 50),
  origin: new naver.maps.Point(0, 0),
  anchor: new naver.maps.Point(14, 14),
};

const hospitalMarkerImage = {
  url: '/images/hospital.png',
  size: new naver.maps.Size(50, 50),
  origin: new naver.maps.Point(0, 0),
  anchor: new naver.maps.Point(14, 25),
};

const pharmacyMarkerImage = {
  url: '/images/pharmacy.jpg',
  size: new naver.maps.Size(50, 50),
  origin: new naver.maps.Point(0, 0),
  anchor: new naver.maps.Point(14, 25),
};

function useMarkers(mapRef: RefObject<naver.maps.Map>, myLocation: Location | null) {
  const markersRef = useRef<MapRef | null>(null);
  const router = useRouter();
  const [focusedCity, setFocusedCity] = useState<string | null>(null);

  const { data: hospitalData } = useQuery({
    queryKey: ['hospital', focusedCity],
    queryFn: () => getListQueryHospital(focusedCity!),
    enabled: focusedCity !== null,
  });

  const { data: pharmacyData } = useQuery({
    queryKey: ['pharmacy', focusedCity],
    queryFn: () => getListQueryPharmacy(focusedCity!),
    enabled: focusedCity !== null,
  });

  useEffect(() => {
    if (mapRef.current && naver.maps.Service) {
      const debouncedHandleIdle = debounce(() => {
        const center : naver.maps.Coord | undefined = mapRef.current?.getCenter();
        // @ts-ignore
        const lat = center.lat() as number;
        // @ts-ignore
        const lng = center.lng() as number;
        window.sessionStorage.setItem('lastCoords', `${lat.toString()},${lng.toString()}`);
        const lastZoom = mapRef?.current?.getZoom().toString();
        window.sessionStorage.setItem('lastZoom', lastZoom || '15');
        naver.maps.Service.reverseGeocode({
          coords: new naver.maps.LatLng(lat, lng),
        }, (status, response) => {
          if (status !== naver.maps.Service.Status.OK) {
            return alert('무엇인가 잘못 되었습니다. 다시 시도해주세요.');
          }
          const city = response.v2.results[1].region.area2.name.split(' ')[0];
          setFocusedCity(city);
        });
      }, 1000); // 950ms delay

      naver.maps.Event.addListener(mapRef.current, 'idle', debouncedHandleIdle);

      return () => {
        // when component unmounts, cancel the debounce function
        debouncedHandleIdle.cancel();
      };
    }
  }, [naver.maps.Service, mapRef.current]);

  useEffect(() => {
    if (!myLocation || !mapRef.current || !hospitalData || !pharmacyData) return;

    const { latitude, longitude } = myLocation;

    const currentUserMarker: naver.maps.Marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapRef.current,
      icon: userMarkerImage,
    });

    const markers: naver.maps.Marker[] = [];
    const listeners: naver.maps.MapEventListener[] = [];

    function createMarkerAndListener(location : { lat : number, lng:number } & MedicalFacility, markerImage : typeof pharmacyMarkerImage, infoType : 'hospital' | 'pharmacy') {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(location.lat, location.lng),
        map: mapRef.current!,
        icon: markerImage,
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: `
          <div class="bg-white rounded w-[calc(100%+2rem)]">
            <div class="py-3.5 px-5 relative">
              <div class="inline-block align-top">
                <strong class="text-sky-600 text-base font-bold mr-1.5">${location.bizPlcNm}</strong>
              </div>
              <div class="mt-1 text-xs">
                <span class="text-neutral-700">${location.roadNmAddr}</span>
              </div>
          
              <a href="/review/${infoType}/${location.id}" class="mt-1 text-xs custom-link">
                <span class="overflow-hidden">상세 보기 &rarr;</span>
              </a>
            </div>
          </div>`,
        borderWidth: 0,
      });

      const listener = naver.maps.Event.addListener(marker, 'click', () => {
        infoWindow.open(mapRef.current!, marker);

        function handleClick(event: MouseEvent) {
          event.preventDefault();
          const currentTarget = event.currentTarget as HTMLAnchorElement;
          const href = currentTarget.getAttribute('href')!;
          router.push(href);
        }

        setTimeout(() => {
          document.querySelectorAll('.custom-link').forEach((link: Element) => {
            const anchor = link as HTMLAnchorElement;
            anchor.removeEventListener('click', handleClick);
            anchor.addEventListener('click', handleClick);
          });
        }, 0);
      });

      listeners.push(listener);
      markers.push(marker);
    }

    pharmacyData?.data.Items.forEach((location) => {
      createMarkerAndListener(location, pharmacyMarkerImage, 'pharmacy');
    });

    hospitalData?.data.Items.forEach((location) => {
      createMarkerAndListener(location, hospitalMarkerImage, 'hospital');
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
  }, [myLocation, mapRef.current, hospitalData, pharmacyData]);

  return markersRef;
}

export default useMarkers;
