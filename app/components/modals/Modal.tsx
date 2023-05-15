'use client';

import {
  ReactElement, useCallback, useEffect, useState, useRef,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '@/app/components/IButton';
import useLockedBody from '@/app/hooks/useLockedBody';

interface ModalProps {
  isOpen?: boolean;
  onClose : () => void;
  onSubmit : () => void;
  title ?: string;
  body?: ReactElement;
  footer ?: ReactElement;
  actionLabel : string;
  disabled ?: boolean;
  secondaryAction ?: () => void;
  secondaryActionLabel ?: string;
}

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
} : ModalProps) {
  const [isShowModal, setIsShowModal] = useState(isOpen);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  useLockedBody();

  useEffect(() => {
    setIsShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setIsShowModal(false);
    timeRef.current = setTimeout(() => {
      onClose();
    }, 300);
  }, []);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  useEffect(() => () => {
    clearTimeout(timeRef.current);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <section className="
        relative
        md:w-4/6
        lg:w-3/6
        xl:w-3/12
        my-6
        mx-auto
        h-full

        lg:h-auto
        md:h-auto

      "
      >
        {/* CONTENT START */}
        <article className={`
        translate
        duration-300
        h-full
        ${isShowModal ? 'translate-y-0' : 'translate-y-full'}
        ${isShowModal ? 'opacity-100' : 'opacity-0'}
        `}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*  HEADER */}
            <section
              className="
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
              "
            >
              <button
                type="button"
                className="border-0 hover:opacity-70 transition absolute left-9 p-3 rounded-full hover:bg-neutral-100 text-neutral-500 focus:outline-none"
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">
                {title}
              </div>
            </section>
            <section className="relative p-12 flex-auto">
              {body}
            </section>
            <section className="flex flex-col gap-2 p-6">
              <article className="flex flex-row items-center gap-4 w-full">
                {secondaryActionLabel && secondaryAction
                  && (
                  <Button
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  />
                  )}

                {/* <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                /> */}

              </article>
              {/* Footer */}
              {footer}
            </section>
          </div>
        </article>
      </section>
    </div>
  );
}
export default Modal;
