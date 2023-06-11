'use client';

import { getListQueryPharmacy, getMedicalFindById } from '@/app/queryFns/listQueryFns';
import WriteReview from '@/app/review/components/WriteReview';
import PlaceHeader from '@/app/review/components/PlaceHeader';
import PlaceInfo from '@/app/review/components/PlaceInfo';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

function ReviewPageClient() {
  const params = useParams();

  const { data: medicalInfo } = useQuery({
    queryKey: ['pharmacy', ''],
    queryFn: () => getMedicalFindById(''),
  });

  return (
    <div className="flex flex-col gap-y-3">
      <WriteReview />
      <PlaceHeader />
      <PlaceInfo />
    </div>
  );
}

export default ReviewPageClient;
