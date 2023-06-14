import { dehydrate } from '@tanstack/react-query';
import ReactQueryHydrate from '@/app/components/client/ReactQueryHydrate';
import getQueryClient from '@/app/libs/getQueryClient';
import MainPageClient from '@/app/components/client/MainPage.client';

async function Page() {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <MainPageClient />
    </ReactQueryHydrate>
  );
}
export default Page;
