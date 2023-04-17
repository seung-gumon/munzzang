import NextAuth, { AuthOptions } from 'next-auth';
import KaKaoProvider from 'next-auth/providers/kakao';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    KaKaoProvider({
      clientId: process.env.KAKAO_ID as string,
      clientSecret: process.env.KAKAO_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({
      token, account, profile, user,
    }) {
      /** 로그인 직후 토큰에 대한 OAuth access_token 및/또는 사용자 ID 유지 */

      console.log('프로필 :::', profile);
      console.log('ㅇㅈㅇㅈ유저 :::', user);

      if (account) {
        token.accessToken = account.access_token;
        token.id = account.id;
        token.provider = account.provider;
      }
      if (account?.provider === 'kakao' && profile && profile?.kakao_account) {
        token.thumbnail = profile.kakao_account.profile.thumbnail_image_url;
      }
      return token;
    },
    async session({ session, token }) {
      /** 제공자의 access_token 및 사용자 ID와 같은 속성을 클라이언트로 보냅니다. */
      console.log('Token :::', token);
      session.accessToken = token.accessToken;
      session.provider = token.provider;
      session.user.id = token.id;
      session.user.image = token.thumbnail;
      return session;
    },
  },
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
