'use client';

import { BsChatDots } from 'react-icons/bs';
import useWindowSize from '@/app/hooks/useWindowSize';

function AsideBar() {
  const { width } = useWindowSize();

  const iconSize = width > 768 ? 24 : 32;

  return (
    <aside className="flex flex-col absolute right-3 z-50 bottom-24 gap-y-2">
      <button type="button" className="p-3 bg-white rounded-full border-zinc-200 border-[1px] shadow-lg">
        <BsChatDots size={iconSize} />
      </button>

    </aside>

  );
}

export default AsideBar;
