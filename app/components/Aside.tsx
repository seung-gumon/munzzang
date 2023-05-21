'use client';

import { PropsWithChildren } from 'react';
import { Transition } from '@headlessui/react';
import useIsOpenAsideBar from '@/app/hooks/useIsOpenAsideBar';

function AsideBar({ children } : PropsWithChildren) {
  const { isOpen } = useIsOpenAsideBar();

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-300"
      enterFrom="-translate-x-[410px] bg-red-300"
      enterTo="bg-amber-500"
      leave="transition ease-in duration-200"
      leaveFrom="translate-x-[90px]"
      leaveTo="-translate-x-[410px]"
      as="aside"
      className="h-full absolute z-2 z-[40] border-zinc-200 border-r-[1px] rounded-r-lg shadow-2xl "
    >
      <div className="w-[410px] h-full p-5">
        {children}
      </div>
    </Transition>

  );
}

export default AsideBar;
