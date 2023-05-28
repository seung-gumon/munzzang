'use client';

import useMap from '@/app/hooks/useMap';
import React from 'react';
import useMarkers from '@/app/hooks/useMarkers';

function Map() {
  const { myLocation, mapRef } = useMap();
  useMarkers(mapRef, myLocation);

  return <div id="map" className="w-[100%] h-[100%]" />;
}
export default Map;
