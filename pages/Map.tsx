'use client';

import useMap from '@/app/hooks/useMap';
import Script from 'next/script';
import React from 'react';

function Map() {
  useMap();

  return (
    <>
      <Script
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fwhavib8pn"
      />
      <div id="map" className="w-[100%] h-[100%]" />
    </>
  );
}
export default Map;
