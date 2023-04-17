// pages/api/kakao-logout.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = (await getSession({ req })) as Session | null;
  console.log('Session :::', session);
  if (session) {
    const { user: { accessToken } } = session;

    const kakaoLogoutRes = await fetch('https://kapi.kakao.com/v1/user/logout', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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
