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
        text-left
        px-4
        py-3
        hover:bg-neutral-200
        transition
        font-semibold
      "
  >
    <button
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  </li>

);

export default MenuItem;
