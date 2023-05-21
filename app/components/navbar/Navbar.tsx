'use client';

import Logo from '@/app/components/navbar/Logo';
import { MdLocalHospital } from 'react-icons/md';
import { CgPill } from 'react-icons/cg';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import NavItem from '@/app/components/navbar/NavItem';
import useIsOpenAsideBar from '@/app/hooks/useIsOpenAsideBar';

function Navbar() {
  const { onToggle, isOpen } = useIsOpenAsideBar();

  return (
    <div className="relative">
      <nav className="relative flex flex-row w-full bg-white shadow-2xl border-zinc-200 md:h-full md:flex-col md:w-[90px] z-[45]">
        <NavItem href="/animal-hospital" icon={MdLocalHospital} title="동물 병원" />
        <NavItem href="/animal-pharmacy" icon={CgPill} title="동물 약국" />
      </nav>
      <button
        type="button"
        className="absolute z-[50] top-1/2 right-[-13px] bg-white rounded-full shadow-md border-zinc-200 border-[1px]"
        onClick={() => onToggle()}
      >
        {isOpen ? <BiLeftArrowAlt size={26} /> : <BiRightArrowAlt size={26} />}
      </button>
    </div>

  );
}
export default Navbar;
