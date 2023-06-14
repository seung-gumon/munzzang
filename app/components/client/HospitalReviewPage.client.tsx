'use client';

import { getReviewFindById, getHospitalFindOneById } from '@/app/queryFns/listQueryFns';
import WriteReview from '@/app/review/components/WriteReview';
import PlaceHeader from '@/app/review/components/PlaceHeader';
import PlaceInfo from '@/app/review/components/PlaceInfo';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function HospitalReviewPageClient() {
  const params = useParams();

  if (!params) return null;

  const { data: hospitalInfo } = useQuery({
    queryKey: ['hospital', params.id as string],
    queryFn: () => getHospitalFindOneById(params.id as string),
    // enabled: mounted,
  });

  const { data: reviewInfo } = useQuery({
    queryKey: ['review', params.id],
    queryFn: () => getReviewFindById(params.id as string),
    // enabled: mounted,
  });

  return (
    <div className="flex flex-col gap-y-3">
      <WriteReview />
      <PlaceHeader />
      <PlaceInfo />
    </div>
  );
}

export default HospitalReviewPageClient;
