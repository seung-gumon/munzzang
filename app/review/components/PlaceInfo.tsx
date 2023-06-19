import { MedicalFacility } from '@/app/model/MedicalFacility';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import RatingComponent from '@/app/review/components/Rating';
import Tabs from '@/app/review/components/Tabs';

interface PlaceInfoProps {
  placeInfo?: MedicalFacility
  reviewInfo?: any;
}

function PlaceInfo({ placeInfo, reviewInfo }: PlaceInfoProps) {
  const pathName = usePathname();

  const bigCategory = useMemo(() => {
    if (pathName?.includes('pharmacy')) {
      return '동물 약국';
    }
    return '동물 병원';
  }, []);

  const rate = useMemo(() => (placeInfo?.rate || 0), [placeInfo?.rate]);
  const reviewCount = useMemo(() => (placeInfo?.reviewCount || 0), []);

  return (
    <section
      className="mx-auto flex items-center justify-center flex-col w-full max-w-2xl bg-white  rounded-lg text-gray-900 md:px-0 px-4  mt-8"
    >
      <article className="flex flex-col">
        <article className="flex items-center justify-center">
          <h4 className="text-2xl font-semibold ">{placeInfo?.bizPlcNm}</h4>
          <h5 className="text-sm ml-3 self-end">{bigCategory}</h5>
        </article>
        <article className="flex items-center justify-center mt-1.5">
          <RatingComponent rate={rate} />
          <h5 className="text-sm">
            &nbsp; / &nbsp;
            리뷰 수 : &nbsp;
            <span className="font-semibold">{reviewCount.toLocaleString()}</span>
          </h5>
        </article>
      </article>
      <article className="w-full flex flex-col justify-center items-center">
        <Tabs />
      </article>
    </section>

  );
}

export default PlaceInfo;
