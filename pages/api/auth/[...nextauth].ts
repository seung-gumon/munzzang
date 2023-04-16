import NextAuth, { AuthOptions } from 'next-auth';
import KaKaoProvider from 'next-auth/providers/kakao';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    KaKaoProvider({
      clientId: process.env.KAKAO_ID as string,
      clientSecret: process.env.KAKAO_SECRET as string,
      // profile(profile) {
      //   const { thumbnail_image } = profile.properties;
      //   console.log('Thumbnail :::', thumbnail_image);
      //   // thumbnail_image를 기존 프로필 객체에 추가
      //   return {
      //     ...profile,
      //     thumbnail_image,
      //   };
      // },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
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
