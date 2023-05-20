'use client';

import useMap from '@/app/hooks/useMap';
import React from 'react';

function Map() {
  useMap();

  return <div id="map" className="w-[100%] h-[100%]" />;
}
export default Map;
