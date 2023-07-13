'use client';

import { CgProfile } from 'react-icons/cg';
import NavItem from '@/app/components/navbar/NavItem';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login, LoginBodyType, LoginProvider } from '@/app/queryFns/listQueryFns';
import useLogin from '@/app/hooks/useLogin';
import { toast } from 'react-hot-toast';

function Navbar() {
  const { data: session, status } = useSession();
  const { logIn, logOut } = useLogin();

  const {
    data, error, isLoading, mutate: loginMutation,
  } = useMutation((loginBody : LoginBodyType) => login(loginBody), {
    onSuccess: (loginCallback) => {
      console.log('login Callback :::', loginCallback);
      toast.success('로그인에 성공하였습니다.');
    },
    onError: (loginError) => {
      console.log('Login Callback :::', loginError);
      toast.error('로그인에 실패했습니다. 다시 시도해주세요.');
    },
  });

  useEffect(() => {
    if (session?.user && session?.provider) {
      const { user: { id, email }, provider } = session;
      loginMutation({
        id: String(id),
        email: email as string,
        provider: provider as LoginProvider,
      });
    }
  }, [session]);

  return (
    <nav className="absolute bottom-0 z-[500] flex flex-row w-full">
      <NavItem href="/animal-pharmacy" icon={CgProfile} title="MY" />
    </nav>

  );
}
export default Navbar;
