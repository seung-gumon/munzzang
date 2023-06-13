'use client';

import { getPharmacyFindOneById, getReviewFindById } from '@/app/queryFns/listQueryFns';
import WriteReview from '@/app/review/components/WriteReview';
import PlaceHeader from '@/app/review/components/PlaceHeader';
import PlaceInfo from '@/app/review/components/PlaceInfo';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function PharmacyReviewPageClient() {
  const params = useParams();

  const { data: pharmacyInfo } = useQuery({
    queryKey: ['pharmacy', params.id],
    queryFn: () => getPharmacyFindOneById(params.id as string),
  });

  const { data: medicalReview } = useQuery({
    queryKey: ['review', params.id],
    queryFn: () => getReviewFindById(params.id as string),
  });

  return (
    <div className="flex flex-col gap-y-3">
      <WriteReview />
      <PlaceHeader
        medicalInformation={pharmacyInfo?.data.Items[0]}
      />
      <PlaceInfo
        medicalInformation={pharmacyInfo?.data.Items[0]}
      />
    </div>
  );
}

export default PharmacyReviewPageClient;
