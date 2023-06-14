import getQueryClient from '@/app/libs/getQueryClient';
import { dehydrate } from '@tanstack/react-query';
import { getPharmacyFindOneById, getReviewFindById } from '@/app/queryFns/listQueryFns';
import ReactQueryHydrate from '@/app/components/client/ReactQueryHydrate';
import PharmacyReviewPageClient from '@/app/components/client/PharmacyReviewPage.client';

interface PageProps {
  params: { id: string };
}

async function PharmacyPage({ params } : PageProps) {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery(['review', params.id], () => getReviewFindById(params.id)),
    queryClient.prefetchQuery(['pharmacy', params.id], () => getPharmacyFindOneById(params.id)),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <PharmacyReviewPageClient />
    </ReactQueryHydrate>
  );
}

export default PharmacyPage;
