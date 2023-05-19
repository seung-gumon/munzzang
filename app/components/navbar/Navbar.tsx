'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/app/components/navbar/Logo';
import { MdPets } from 'react-icons/md';
import { CgPill } from 'react-icons/cg';
import NavItem from '@/app/components/navbar/NavItem';

function Navbar() {
  return (
    <nav className="flex flex-row w-full h-[90px] bg-white shadow-2xl border-r-[1px] border-zinc-200 md:h-full md:flex-col md:w-[70px]">
      <Logo />
      <ul className="w-full text-sm flex flex-row md:flex-col ">
        <NavItem href="#" icon={MdPets} title="동물병원" />
        <NavItem href="#" icon={CgPill} title="동물약국" />

      </ul>

    </nav>
  );
}
export default Navbar;
