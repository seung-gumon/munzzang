'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Logo() {
  const router = useRouter();

  return (
    <Image
      className="hidden md:block cursor-pointer"
      width={120}
      height={120}
      src="/images/logo-small.png"
      alt="Munzzang Logo"
    />
  );
}
export default Logo;
