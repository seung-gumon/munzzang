'use client';

import useMap from '@/app/hooks/useMap';
import React from 'react';
import Navbar from '@/app/components/navbar/Navbar';

function Map() {
  const {
    mapRef,
  } = useMap();

  console.log('Map Ref :::', mapRef.current);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <Navbar />
      <div id="map" className="w-[100%] h-[100%]" />
    </div>

  );
}
export default Map;
