'use client';

import Container from '@/app/components/Container';
import Logo from '@/app/components/navbar/Logo';
import Search from '@/app/components/navbar/Search';
import UserMenu from '@/app/components/navbar/UserMenu';
import { CurrentUser } from '@/app/model/CurrentUser';

interface NavbarProps {
  currentUser ?: CurrentUser | null;
}

function Navbar({ currentUser } : NavbarProps) {
  console.log(currentUser);

  return (
    <header className="fixed w-full bg-white z-10 shadow-sm">
      <div className="
        py-4
        border-b-[1px]
      "
      >
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </header>
  );
}
export default Navbar;
