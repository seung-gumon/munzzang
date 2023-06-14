import Button from '@/app/components/Button';
import { FiUser } from 'react-icons/fi';

function WriteReview() {
  return (
    <div className="mt-8 flex w-full p-4 justify-center items-center gap-x-3.5">
      <section className="flex">
        <article className="w-12 h-12 bg-bg-focus rounded-full shadow-inner">
          <div className="overflow-hidden flex items-center justify-center flex-col w-full h-full">
            <div className="rounded-full flex items-center justify-center">
              <FiUser size={24} />
            </div>
          </div>
        </article>
        <article className="flex flex-col justify-center ml-4">
          <div className="font-bold text-sm text-clear">Unknown</div>
          <h3 className="text-xxs text-dull">Software Developer</h3>
        </article>
      </section>
      <section className="grid grid-cols-8 bg-primary-clear p-4 rounded-lg text-primary-visible">
        <div className="col-span-2">
          <h3 className="text-xxs font-light">등록한 영수증 수</h3>
          <span className="text-lg font-semibold">5,398</span>
        </div>
        <div className="divider divider-horizontal before:bg-primary-dull after:bg-primary-dull" />
        <div className="col-span-2">
          <h3 className="text-xxs font-light">하하호호</h3>
          <span className="text-lg">182</span>
        </div>
        <div className="divider divider-horizontal before:bg-primary-dull after:bg-primary-dull" />
        <div className="col-span-2">
          <h3 className="text-xxs font-light">Friends</h3>
          <span className="text-lg">7</span>
        </div>
      </section>
    </div>
  );
}
export default WriteReview;
