import { dehydrate } from '@tanstack/react-query';
import { getListQueryHospital, getListQueryPharmacy } from '@/app/queryFns/listQueryFns';
import ReactQueryHydrate from '@/app/components/client/ReactQueryHydrate';
import getQueryClient from '@/app/libs/getQueryClient';
import PageClient from '@/app/components/client/Page.client';

async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hospital'], getListQueryHospital);
  await queryClient.prefetchQuery(['pharmacy'], getListQueryPharmacy);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <PageClient />
    </ReactQueryHydrate>
  );
}
export default Page;
