import { AiFillPhone } from 'react-icons/all';

function PlaceInfo() {
  return (
    <div className="mx-auto flex items-center justify-center flex-col w-full max-w-2xl bg-white shadow-xl rounded-lg text-gray-900 md:px-0 px-4">
      <div className="rounded-t-lg h-32 overflow-hidden bg-primary-clear w-full shadow-inner" />

      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Woman looking front" />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">행복 유치원</h2>
        <p className="text-gray-500">개쩌는 유치원</p>
      </div>
      <ul className="flex w-full items-center mt-4">
        <li className="flex flex-col items-center flex-auto w-full">
          <AiFillPhone />
          <p>010-7668-7912</p>
        </li>
        <li className="flex flex-col items-center flex-auto w-full">
          <AiFillPhone />
          <p>굿</p>
        </li>
        <li className="flex flex-col items-center flex-auto w-full">
          <AiFillPhone />
          <p>이ㅏ아아앙주ㅜ우굿</p>
        </li>
      </ul>
      <div className="p-4 border-t mx-8 mt-2">
        <button type="button" className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
      </div>
    </div>

  );
}
export default PlaceInfo;
