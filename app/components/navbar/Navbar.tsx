'use client';

import { MdLocalHospital } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import NavItem from '@/app/components/navbar/NavItem';

function Navbar() {
  return (
    <nav className="absolute bottom-0 z-10 flex flex-row w-full">
      <NavItem href="/animal-hospital" icon={MdLocalHospital} title="동물 병원" />
      <NavItem href="/animal-pharmacy" icon={CgProfile} title="MY" />
    </nav>

  );
}
export default Navbar;
