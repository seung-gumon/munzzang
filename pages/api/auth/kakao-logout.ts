// pages/api/kakao-logout.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = (await getSession({ req })) as Session | null;
  const logOutURL = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.KAKAO_ID}&logout_redirect_uri=http://localhost:3000/`;
  if (session) {
    const kakaoLogoutRes = await fetch(logOutURL, {
      method: 'GET',
    });
    if (kakaoLogoutRes.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to logout from Kakao' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}
