import getQueryClient from '@/app/libs/getQueryClient';
import { dehydrate } from '@tanstack/react-query';
import { getHospitalFindOneById, getReviewFindById } from '@/app/queryFns/listQueryFns';
import ReactQueryHydrate from '@/app/components/client/ReactQueryHydrate';
import HospitalReviewPageClient from '@/app/components/client/HospitalReviewPage.client';

interface PageProps {
  params: { id: string };
}

async function HospitalPage({ params } : PageProps) {
  const queryClient = getQueryClient();

  await Promise.all([
    await queryClient.prefetchQuery(['review', params.id], () => getReviewFindById(params.id)),
    await queryClient.prefetchQuery(['hospital', params.id], () => getHospitalFindOneById(params.id)),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <HospitalReviewPageClient />
    </ReactQueryHydrate>
  );
}

export default HospitalPage;
