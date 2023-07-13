'use client';

import axios from 'axios';
import { RiKakaoTalkFill, RiGoogleFill } from 'react-icons/ri';
import { useCallback, useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signIn } from 'next-auth/react';
import Modal from '@/app/components/modals/Modal';
import Button from '@/app/components/IButton';
import Heading from '@/app/components/Heading';

function LoginModal() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    formState: {
      isValid,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      private: '',
      termsOfUse: '',
    },
  });

  const onSubmit : SubmitHandler<FieldValues> = useCallback(async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/register', data);
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, []);

  const bodyContent = (
    <form className="flex flex-col gap-4">
      <Heading
        title="팻츠와매트에 오신 것을 환영합니다."
      />

      <Button
        outline
        label="카카오 로그인"
        icon={RiKakaoTalkFill}
        onClick={() => signIn('kakao')}
        addClass="bg-yellow-300 text-black"
      />
      <Button
        disabled={!isValid}
        outline
        label="구글 로그인"
        icon={RiGoogleFill}
        onClick={() => signIn('google')}
      />
    </form>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <p>
          계정이 없으신가요 ?
          <button
            type="button"
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer
              font-semibold
              hover:underline
              ml-1
            "
          >
            회원가입
          </button>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="로그인"
      actionLabel="로그인"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
