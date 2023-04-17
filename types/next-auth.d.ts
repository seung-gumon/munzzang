import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    provider ?: string;
    accessToken?: accessToken;
    user: {
      id : number;
    } & DefaultSession['user'];
  }
}
