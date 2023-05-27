import { IconType } from 'react-icons';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href : string;
  icon : IconType;
  title : string;
}

function NavItem({ href, icon: Icon, title } : NavItemProps) {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${pathname === href ? 'bg-amber-400' : 'bg-white hover:text-amber-600'} flex flex-col items-center justify-center grow h-[80px] px-1.5 md:m-0 border-b-[1px] border-zinc-200`}>
      <Icon size={24} />
      <h6>{title}</h6>
    </Link>
  );
}
export default React.memo(NavItem);
