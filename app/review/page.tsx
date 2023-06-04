import WriteReview from '@/app/review/components/WriteReview';
import PlaceHeader from '@/app/review/components/PlaceHeader';
import PlaceInfo from '@/app/review/components/PlaceInfo';

function Page() {
  return (
    <div className="flex flex-col gap-y-3">
      <WriteReview />
      <PlaceHeader />
      <PlaceInfo />
    </div>

  );
}
export default Page;
