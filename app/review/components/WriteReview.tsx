import { useId, ChangeEvent } from 'react';
import { FiUser } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';

function WriteReview() {
  const htmlFor = useId();

  const uploadFile = (e : ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

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

        {/*  Native */}
        <label
          htmlFor={htmlFor}
          className="cursor-pointer bg-primary-visible text-white py-2.5 rounded-md items-center justify-center font-medium mt-3"
        >
          <p className="font-semibold flex items-center justify-center">
            <span>영수증 업로드</span>
            <IoReceiptOutline className="ml-0.5 pt-0.5" />
          </p>
          <input
            id={htmlFor}
            type="file"
            multiple={false}
            className="hidden"
            accept={'image/*'}
            onChange={uploadFile}
          />
        </label>
        {/*  Native */}
      </section>
    </div>
  );
}
export default WriteReview;
