import WriteReview from '@/app/review/components/WriteReview';
import PlaceHeader from '@/app/review/components/PlaceHeader';
import PlaceInfo from '@/app/review/components/PlaceInfo';
import getQueryClient from '@/app/libs/getQueryClient';
import { dehydrate } from '@tanstack/react-query';
import { getMedicalFindById } from '@/app/queryFns/listQueryFns';
import ReactQueryHydrate from '@/app/components/client/ReactQueryHydrate';
import ReviewPageClient from '@/app/components/client/ReviewPage.client';

interface PageProps {
  params: { id: string };
}

async function Page({ params } : PageProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['pharmacy', params.id], () => getMedicalFindById(params.id));
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <ReviewPageClient />
    </ReactQueryHydrate>
  );
}

export default Page;
