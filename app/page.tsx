'use client';

import Navbar from '@/app/components/navbar/Navbar';
import Map from '@/app/components/Map';
import AsideBar from '@/app/components/Aside';
import SearchBar from '@/app/components/navbar/SearchBar';

function Page() {
  return (
    <main className="relative w-full h-full">
      <SearchBar />
      <AsideBar />
      <Navbar />
      <Map />
    </main>
  );
}
export default Page;
