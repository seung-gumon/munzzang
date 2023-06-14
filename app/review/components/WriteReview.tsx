import Button from '@/app/components/Button';

function WriteReview() {
  return (
    <section className="w-full bg-symbol-yellow">
      <h1 className="text-xl font-bold text-white">영수증 리뷰하기</h1>
      <hr className="border-gray-500 my-1.5" />
      <article className="text-black break-words break-all">
        <section className="flex relative">
          <article className="flex-grow overflow-hidden">
            <div>
              <span className="items-start text-white cursor-pointer font-extrabold h-7 mr-1 w-20">
                어서오세요! b93****님!
              </span>
            </div>
            <div className="my-1.5">
              <span className="items-start text-teal-200 cursor-pointer inline-block text-[0.81rem] h-10 pr-2 relative text-center align-top w-12">
                리뷰
                <em className="text-white font-semibold block">36</em>
              </span>
              <span className="items-start text-teal-200 cursor-pointer inline-block text-[0.81rem] h-10 px-2 relative text-center align-top w-16">
                사진
                <em className="text-white font-semibold block">0</em>
              </span>
            </div>
          </article>
        </section>
        <div className="items-center flex relative">
          <Button loading={false} value="리뷰 쓰기" />
        </div>
      </article>
    </section>
  );
}
export default WriteReview;
