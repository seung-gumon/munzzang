'use client';

import React from 'react';
import Button from '@/app/components/Button';
import AsideBar from '@/app/components/Aside';
import Navbar from '@/app/components/navbar/Navbar';
import Map from '@/app/components/Map';

function AnimalHospitalPage() {
  return (
    <main className="relative w-full h-full">
      <AsideBar />
      <Navbar />
      <section className="w-full h-full">
        <article className="w-full flex">
          <div className="flex-1 P-4 bg-amber-200 flex items-center justify-center">
            <h3>영수증 인증하기</h3>
          </div>
          <div className="flex-1 P-4 bg-amber-500 flex items-center justify-center">
            <h3>영수증 인증하기</h3>
          </div>
        </article>

      </section>
    </main>
  );
}

export default AnimalHospitalPage;
