import { FiUser } from 'react-icons/fi';

function WriteReview() {
  return (
    <div className="mt-8 flex flex-col md:flex-row w-full p-4 justify-center items-center gap-x-3.5">
      <section className="flex w-full md:w-auto mb-3 md:mb-0">
        <article className="w-12 h-12 bg-bg-focus rounded-full shadow-inner">
          <div className="overflow-hidden flex items-center justify-center flex-col w-full h-full">
            <div className="rounded-full flex items-center justify-center">
              <FiUser size={24} />
            </div>
          </div>
        </article>
        <article className="flex flex-col justify-center ml-4">
          <div className="font-bold text-sm text-clear">Unknown</div>
          <h3 className="text-xxs text-dull">강아지 키우는 사람</h3>
        </article>
      </section>
      <section className="flex flex-col w-full max-w-md shadow-inner bg-primary-clear p-4 rounded-lg text-primary-visible">
        <article className="flex w-full ">
          <div className="col-span-2 flex-auto">
            <h3 className="text-xxs font-light">리뷰</h3>
            <span className="text-lg font-semibold">5,398</span>
          </div>
          <div className="col-span-2 flex-auto">
            <h3 className="text-xxs font-light">사진</h3>
            <span className="text-lg font-semibold">182</span>
          </div>
          <div className="col-span-2 flex-auto">
            <h3 className="text-xxs font-light">Friends</h3>
            <span className="text-lg font-semibold">7</span>
          </div>
        </article>
      </section>
    </div>
  );
}
export default WriteReview;
