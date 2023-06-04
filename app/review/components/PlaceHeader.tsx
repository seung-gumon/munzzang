import Link from 'next/link';

function PlaceHeader() {
  return (
    <section className="w-full">
      <h3 className="text-xl font-bold text-center">승구몬 약국</h3>
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
        <p className="text-center">마약빼고 없는 약이 없다 ~ 김까미 화이팅</p>
      </article>
    </section>
  );
}
export default PlaceHeader;
