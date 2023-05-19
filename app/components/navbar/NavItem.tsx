import { IconType } from 'react-icons';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  href : string;
  icon : IconType;
  title : string;
}

function NavItem({ href, icon: Icon, title } : NavItemProps) {
  return (
    <li className="flex flex-col items-center justify-center hover:text-red-600 h-[80px] px-1.5 md:m-0 bg-amber-400">
      <Link href={href} className="flex flex-col items-center justify-center h-full">
        <Icon size={24} />
        <h6>{title}</h6>
      </Link>
    </li>
  );
}
export default NavItem;
