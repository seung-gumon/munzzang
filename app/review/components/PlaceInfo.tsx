import { MdOutlinePlace } from 'react-icons/md';
import { IoMdCopy } from 'react-icons/io';
import { AiOutlinePhone } from 'react-icons/ai';
import { IoStorefrontOutline } from 'react-icons/io5';

function PlaceInfo() {
  return (
    <section className="w-full flex flex-col">
      <p className="py-1.5 border-t-[1px] border-gray-300 flex items-center">
        <MdOutlinePlace className="inline-block mr-1.5" />
        <span className="flex items-center">
          강북구 수유동 223-21
          <button type="button" className="ml-1">
            <IoMdCopy />
          </button>
        </span>
      </p>
      <p className="py-1.5 border-t-[1px] border-gray-300 flex items-center">
        <AiOutlinePhone className="inline-block mr-1.5" />
        <span className="flex items-center">
          010-7668-7912
          <button type="button" className="ml-1">
            <IoMdCopy />
          </button>
        </span>
      </p>
      <p className="py-1.5 border-t-[1px] border-gray-300 flex items-center">
        <AiOutlinePhone className="inline-block mr-1.5" />
        <span className="flex items-center">
          010-7668-7912
          <button type="button" className="ml-1">
            <IoMdCopy />
          </button>
        </span>
      </p>
      <p className="py-1.5 border-t-[1px] border-b-[1px] border-gray-300 last:border-b-1 flex items-center">
        <IoStorefrontOutline className="inline-block mr-1.5 self-start" size={36} />
        <span className="flex items-center">
          주말, 연휴 및 특히 비오는 날이면 재료가 금새 소진되어 영업시간이 한 두 시간 앞당겨 일찍 ㅎㅇㅎㅇㅎㅇ 핼로 안녕 잘가잘가
        </span>
      </p>
    </section>

  );
}
export default PlaceInfo;
