'use client';

import React from 'react';
import Button from '@/app/components/Button';

function AnimalHospitalPage() {
  return (
    <div className="w-full">
      <Button loading={false} value="확인" onClick={() => console.log('Clicked')} />
    </div>
  );
}

export default AnimalHospitalPage;
