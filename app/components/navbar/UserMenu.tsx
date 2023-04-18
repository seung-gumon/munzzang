'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '@/app/components/Avatar';
import { useCallback, useState } from 'react';
import MenuItem from '@/app/components/navbar/MenuItem';
import { Transition } from '@headlessui/react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut, useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

function UserMenu() {
  const { onOpen } = useRegisterModal();
  const { onOpen: onOpenLogin } = useLoginModal();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);
  const { data: session, status } = useSession();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button
          type="button"
          onClick={toggleOpen}
          className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={session?.user.image} />
          </div>
        </button>
      </div>
      <Transition
        show={isOpen}
        as="div"
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="
            absolute
            rounded-xl
            shadow-md
            w-[35vw]
            md:w-[160px]
            bg-white
            overflow-hidden
            right-0
            md:top-[43px]
            top-[55px]
            border-[1px]
            text-sm
          "
      >
        <ul className="flex flex-col cursor-pointer">
          {status === 'authenticated' ? (
            <>
              <MenuItem onClick={() => {}} label="내정보" />
              <MenuItem onClick={() => {}} label="내 질문 내역" />
              <hr />
              <MenuItem onClick={signOut} label="로그아웃" />
            </>
          ) : (
            <>
              <MenuItem onClick={onOpenLogin} label="로그인" />
              <MenuItem onClick={onOpen} label="회원가입" />
            </>

          )}

        </ul>
      </Transition>
    </div>
  );
}
export default UserMenu;
