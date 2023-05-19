'use client';

import useMap from '@/app/hooks/useMap';
import React from 'react';

function Map() {
  const {
    myLocation,
    isLoading,
    mapRef,
  } = useMap();

  console.log('Map Ref :::', mapRef.current);

  return (
    <div id="map" className="w-[100%] h-[100%]" />
  );
}
export default Map;
