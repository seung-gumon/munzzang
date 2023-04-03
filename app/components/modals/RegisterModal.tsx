'use client';

import axios from 'axios';
import { FcGoogle } from 'React-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useCallback, useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from '@/app/components/modals/Modal';
import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import Heading from '@/app/components/Heading';

function RegisterModal() {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
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
    registerModal.onClose();
    // loginModal.onOpen();
  }, [registerModal]);

  const registerModalClose = useCallback(() => {
    reset();
    registerModal.onClose();
  }, []);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="환영합니다!"
        subtitle="계정을 생성해주세요!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="구글 계정으로 로그인"
        icon={FcGoogle}
        onClick={() => console.log('Login with Google')}
      />
      <Button
        outline
        label="카카오 계정으로 로그인"
        icon={RiKakaoTalkFill}
        onClick={() => console.log('Login With KaKao')}
      />
      <div
        className="
          text-neutral-500
          text-center
          mt-4
          font-light
        "
      >
        <p>
          이미 계정이 있으신가요 ?
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
            로그인
          </button>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="계속하기"
      onClose={registerModalClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;
