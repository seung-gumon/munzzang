'use client';

import Navbar from '@/app/components/navbar/Navbar';
import Map from '@/app/components/Map';
import AsideBar from '@/app/components/Aside';
import SearchBar from '@/app/components/navbar/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { getListQueryHospital, getListQueryPharmacy } from '@/app/queryFns/listQueryFns';

function MainPageClient() {
  // const { data: hospitalData, isLoading } = useQuery({
  //   queryKey: ['hospital'],
  //   queryFn: getListQueryHospital,
  // });
  //
  // const { data: pharmacyData } = useQuery({
  //   queryKey: ['pharmacy'],
  //   queryFn: getListQueryPharmacy,
  // });

  return (
    <main className="relative w-full h-full">
      <SearchBar />
      <AsideBar />
      <Navbar />
      <Map />
    </main>
  );
}
export default MainPageClient;
