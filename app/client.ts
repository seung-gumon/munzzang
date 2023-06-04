import QueryString from 'qs';

interface RequestConfig {
  params?: any
  headers?: HeadersInit
  signal?: AbortSignal
}

export class FetchError extends Error {
  constructor(public response: Response, public data: any) {
    super(`Fetch failed with status ${response.status}`);
  }
}

async function rejectIfNeeded(response: Response) {
  console.log('Response :::', response);
  if (!response.ok) {
    const data = await response.json();
    throw new FetchError(response, data);
  }
  return response;
}

export const fetchClient = {
  env: process.env.NODE_ENV === 'development' ? 'dev' : 'prod',
  baseUrl: 'https://198aztjqg9.execute-api.ap-northeast-2.amazonaws.com',
  async get<T>(path: string, config: RequestConfig = {}) {
    try {
      const query = config?.params ? QueryString.stringify(config?.params, { addQueryPrefix: true }) : '';
      const response = await fetch(`${this.baseUrl}/${this.env}/${path}/?sigunNm=%EB%B6%80%EC%B2%9C%EC%8B%9C`, {
        method: 'GET',
        headers: {
          ...(config?.headers ?? {}),
        },
      });
      await rejectIfNeeded(response);
      const data: T = await response.json();
      const { headers } = response;
      return {
        data,
        headers,
      };
    } catch (exception: unknown) {
      if (exception instanceof Error) {
        console.log('exception Error:', exception.message);
        throw exception;
      } else {
        console.log('아니 시발 왜 안돼');
        throw new Error('An unknown error occurred during fetch');
      }
    }
  },
};
