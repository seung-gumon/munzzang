import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Profile {
    kakao_account?: {
      profile_needs_agreement: boolean;
      profile: {
        nickname: string;
        thumbnail_image_url: string;
        profile_image_url: string;
      };
      has_email: boolean;
      email_needs_agreement: boolean;
      is_email_valid: boolean;
      is_email_verified: boolean;
      email: string;
    };
    picture : string;
  }

  interface Session {
    provider?: string; /** Google , KaKao */
    accessToken?: accessToken;
    user: {
      id : number;
      email?: string;
      name?: string;
      image?: string;
    } & DefaultSession['user'];

    // Custom property for kakao_account
    kakao_account?: Profile['kakao_account'];
  }
}
