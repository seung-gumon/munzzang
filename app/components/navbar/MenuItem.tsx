'use client';

import { FC } from 'react';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({
  onClick,
  label,
}) => (
  <li
    className="
        hover:bg-neutral-200
        font-semibold
      "
  >
    <button
      className="w-full text-left text-left transition px-4 py-3"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  </li>

);

export default MenuItem;
