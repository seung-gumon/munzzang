'use client';

import {
  useEffect, useState, PropsWithChildren,
} from 'react';
import { SessionProvider } from 'next-auth/react';

function ClientOnly({ children }: PropsWithChildren) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <SessionProvider>{children}</SessionProvider>;
}

export default ClientOnly;
