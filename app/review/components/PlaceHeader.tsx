import Link from 'next/link';
import { MedicalFacility } from '@/app/model/MedicalFacility';

interface PlaceHeaderProps {
  medicalInformation?: MedicalFacility
}

function PlaceHeader({ medicalInformation } : PlaceHeaderProps) {
  return (
    <section className="w-full">
      <h3 className="text-xl font-bold text-center">{medicalInformation?.bizPlcNm}</h3>
      <article className="text-black break-words break-all">
        <section className="flex relative my-1.5 w-full gap-x-4 items-center justify-center">
          <p className="font-semibold">
            <span className="text-red-500 ">★</span>
            {' '}
            4.44/5
          </p>
          <Link href="/" className="text-blue-500 font-semibold">
            방문자리뷰 1,035
          </Link>
          <Link href="/" className="text-blue-500 font-semibold">
            영수증리뷰 353
          </Link>
        </section>
      </article>
    </section>
  );
}
export default PlaceHeader;
