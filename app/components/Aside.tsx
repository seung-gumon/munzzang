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
      enterFrom="-translate-x-[410px]"
      enterTo="translate-x-[90px]"
      leave="transition ease-in duration-200"
      leaveFrom="translate-x-[90px]"
      leaveTo="-translate-x-[410px]"
      as="aside"
      className="w-[320px] h-full absolute z-2 bg-white z-[40] border-zinc-200 border-r-[1px] rounded-r-lg shadow-2xl"
    >
      <aside className="w-full h-full ">
        <section className="w-full h-full">
          <h1 className="text-red-500">Aside</h1>
        </section>
        {children}
      </aside>
    </Transition>

  );
}

export default AsideBar;
