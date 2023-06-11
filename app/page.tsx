import { dehydrate } from '@tanstack/react-query';
import { getListQueryHospital, getListQueryPharmacy } from '@/app/queryFns/listQueryFns';
import ReactQueryHydrate from '@/app/components/client/ReactQueryHydrate';
import getQueryClient from '@/app/libs/getQueryClient';
import MainPageClient from '@/app/components/client/MainPage.client';

async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hospital'], getListQueryHospital);
  await queryClient.prefetchQuery(['pharmacy'], getListQueryPharmacy);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <MainPageClient />
    </ReactQueryHydrate>
  );
}
export default Page;
