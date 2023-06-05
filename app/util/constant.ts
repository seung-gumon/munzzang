import { QueryClientConfig } from '@tanstack/react-query';

export const queryClientOptions : QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      retry: 2,
      retryDelay: 1000,
      staleTime: Infinity,
      suspense: true,
    },
  },
};
