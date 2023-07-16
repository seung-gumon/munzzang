'use client';

import { BsChatDots } from 'react-icons/bs';
import { AiOutlineAim } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import useWindowSize from '@/app/hooks/useWindowSize';
import Link from 'next/link';
import useLoginModal from '@/app/hooks/useLoginModal';
import useLogin from '@/app/hooks/useLogin';

function AsideBar() {
  const { width } = useWindowSize();
  const { onOpen: onOpenLogin } = useLoginModal();
  const { isLogin } = useLogin();

  const iconSize = width > 768 ? 24 : 32;

  return (
    <aside className="flex flex-col absolute right-3 z-50 bottom-24 gap-y-2">
      <button type="button" className="p-3 bg-white rounded-full border-zinc-200 border-[1px] shadow-lg">
        <Link href="/chat">
          <BsChatDots size={iconSize} />
        </Link>
      </button>
      <button type="button" className="p-3 bg-white rounded-full border-zinc-200 border-[1px] shadow-lg">
        <Link href="/">
          <AiOutlineAim size={iconSize} />
        </Link>
      </button>
      {
          !isLogin
            ? (
              <button type="button" className="p-3 bg-white rounded-full border-zinc-200 border-[1px] shadow-lg" onClick={onOpenLogin}>
                <HiOutlineUserCircle size={iconSize} />
              </button>
            )
            : (
              <button type="button" className="p-3 bg-white rounded-full border-zinc-200 border-[1px] shadow-lg" onClick={onOpenLogin}>
                Logined
              </button>
            )
       }

    </aside>

  );
}

export default AsideBar;
