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

export const reviewList = [
  {
    id: 1,
    title: '🐶 제 2의 강혁욱이 여기 있어요',
    reviewCount: 30,
  },
  {
    id: 2,
    title: ' 👨🏻‍⚕️ 선생님이 친절해요',
    reviewCount: 13,
  },
  {
    id: 3,
    title: '🙅🏻 과잉진료 없어요',
    reviewCount: 555555,
  },
  {
    id: 4,
    title: '🧹 매장이 청결해요',
    reviewCount: 3,
  },
];
