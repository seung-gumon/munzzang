'use client';

import { getPharmacyFindOneById, getReviewFindById } from '@/app/queryFns/listQueryFns';
import WriteReview from '@/app/review/components/WriteReview';
import PlaceInfo from '@/app/review/components/PlaceInfo';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Button from '@/app/components/Button';
import { AiOutlineRight } from 'react-icons/ai';

function PharmacyReviewPageClient() {
  const params = useParams();
  const router = useRouter();

  if (!params) return null;

  const { data: pharmacyInfo } = useQuery({
    queryKey: ['pharmacy', params.id],
    queryFn: () => getPharmacyFindOneById(params.id as string),
  });

  const { data: medicalReview } = useQuery({
    queryKey: ['review', params.id],
    queryFn: () => getReviewFindById(params.id as string),
  });

  const goToUploadPage = () => {
    router.push(`/review/upload/${params.id}`);
  };

  return (
    <div className="flex flex-col gap-y-3">
      {/* <WriteReview /> */}
      {/* <PlaceHeader /> */}
      <PlaceInfo
        placeInfo={pharmacyInfo?.data.Items[0]}
        reviewInfo={medicalReview?.data.Items}
      />

      <div className="absolute bottom-4 w-full px-4 left-1/2 translate-x-[-50%]">
        <Button
          loading={false}
          value="나도 참여하기"
          // className="bg-primary-clear py-2.5 rounded-md w-full"
          onClick={goToUploadPage}
        />
      </div>

    </div>
  );
}

export default PharmacyReviewPageClient;
