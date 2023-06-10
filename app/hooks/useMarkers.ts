import {
  useEffect, useRef, RefObject, useCallback,
} from 'react';
import { type Location } from '@/app/model/Location';
import { useQuery } from '@tanstack/react-query';
import { getListQueryHospital } from '@/app/queryFns/listQueryFns';
import { useRouter } from 'next/navigation';
// import hello from '../../public/images/hospital.png'

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

function useMarkers(mapRef: RefObject<naver.maps.Map>, myLocation: Location | null) {
  const markersRef = useRef<MapRef | null>(null);
  const router = useRouter();

  const { data: hospitalData, isLoading } = useQuery({
    queryKey: ['hospital'],
    queryFn: getListQueryHospital,
  });

  useEffect(() => {
    if (!myLocation || !mapRef.current) return;

    const { latitude, longitude } = myLocation;

    const currentUserMarker: naver.maps.Marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapRef.current,
      icon: userMarkerImage,
    });

    // naver.maps.Event.addListener(mapRef.current, 'idle', () => {
    //   const center = mapRef.current?.getCenter();
    //   // @ts-ignore
    //   const lat = center?.lat();
    //   // @ts-ignore
    //   const lng = center?.lng();
    //
    //   naver.maps.Service.reverseGeocode({
    //     coords: new naver.maps.LatLng(lat, lng),
    //   }, (status, response) => {
    //     if (status !== naver.maps.Service.Status.OK) {
    //       return alert('Something wrong!');
    //     }
    //     console.log('response :::', response.v2);
    //   });
    // });

    const markers: naver.maps.Marker[] = [];
    const listeners: naver.maps.MapEventListener[] = [];

    hospitalData?.data.Items.forEach((location) => {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(location.lat, location.lng),
        map: mapRef.current!,
        icon: hospitalMarkerImage,
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

        <a href="/review/${location.id}" class="mt-1 text-xs custom-link">
            <span class="overflow-hidden">상세 보기 &rarr;</span>
        </a>
    </div>
</div>  
    `,
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

        // 각 클릭 이벤트에 대해 DOM에 이벤트 리스너를 추가합니다.
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
