'use client';

import Navbar from '@/app/components/navbar/Navbar';
import Map from '@/app/components/Map';

function Page() {
  return (
    <main className="w-full h-full flex flex-col md:flex-row">
      <Navbar />
      <Map />
    </main>
  );
}
export default Page;
