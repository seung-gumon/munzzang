'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientOptions } from '@/app/util/constant';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function ReactQueryProvider({ children } : { children : React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient(queryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default ReactQueryProvider;
