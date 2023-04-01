'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Logo() {
  const router = useRouter();

  return (
    <Image
      className="hidden md:block cursor-pointer"
      width={100}
      height={100}
      src="/images/logo.png"
      alt="Munzzang Logo"
    />
  );
}
export default Logo;
