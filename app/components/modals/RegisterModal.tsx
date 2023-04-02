'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
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

function RegisterModal() {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  console.log(registerModal);

  const {
    register,
    handleSubmit,
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

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="회원가입"
      actionLabel="계속하기"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}

export default RegisterModal;
