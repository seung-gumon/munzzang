'use client';

import Image from 'next/image';

function Avatar() {
  return <Image className="rounded-full" width={30} height={30} src="/images/placeholder.jpeg" alt="Avatar" />;
}

export default Avatar;
