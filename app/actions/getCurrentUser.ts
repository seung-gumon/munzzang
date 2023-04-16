import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { CurrentUser } from '@/app/model/CurrentUser';

export async function getSession() {
  return getServerSession(authOptions);
}

export default async function getCurrentUser() : Promise<CurrentUser | null> {
  try {
    const session = await getSession();
    if (!session?.user) return null;

    const { image, name, email } = session.user;

    return {
      image: image || '',
      name: name || '',
      email: email || undefined,
    };
  } catch (e) {
    return null;
  }
}
