import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getSession() {
  return getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log(session);
    if (!session?.user?.email) {
      return null;
    }
    console.log('RAON RAON ::::', session);
    return session.user;
  } catch (e) {
    return null;
  }
}
