'use client';

import { CgProfile } from 'react-icons/cg';
import NavItem from '@/app/components/navbar/NavItem';

function Navbar() {
  return (
    <nav className="absolute bottom-0 z-[9999] flex flex-row w-full">
      <NavItem href="/animal-pharmacy" icon={CgProfile} title="MY" />
    </nav>

  );
}
export default Navbar;
