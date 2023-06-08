import {
  useEffect, useRef, RefObject, useCallback,
} from 'react';
import { type Location } from '@/app/model/Location';
import { useQuery } from '@tanstack/react-query';
import { getListQueryHospital } from '@/app/queryFns/listQueryFns';
// import hello from '../../public/images/hospital.png'

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

const hospitalMarkerImage = {
  url: '/images/hospital.png',
  size: new naver.maps.Size(50, 50),
  origin: new naver.maps.Point(0, 0),
  anchor: new naver.maps.Point(14, 25),
};

function useMarkers(mapRef: RefObject<naver.maps.Map>, myLocation: Location | null) {
  const markersRef = useRef<MapRef | null>(null);

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
                <span class="text-neutral-700">경기 고양시 덕양구 오부자로 15</span>
            </div>
           
            <a href="/review" class="mt-1 text-xs">
                <span class="overflow-hidden">상세 보기 &rarr;</span>
            </Link>
        </div>
    </div>
  `,
        borderWidth: 0,
        // borderRadius: '100%',
      });

      const listener = naver.maps.Event.addListener(marker, 'click', () => {
        infoWindow.open(mapRef.current!, marker);
        // router.push(`/?lat=${location.lat}&lng=${location.lng}&info=${location.id}`);
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
