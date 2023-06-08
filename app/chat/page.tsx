'use client';

import React, { useEffect, useRef } from 'react';
import Input from '@/app/components/Input';
import { useForm } from 'react-hook-form';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Link from 'next/link';

interface ChatBubbleProps {
  content: string;
  isMe?: boolean;
}

const ChatBubble = React.memo(({ content, isMe } : ChatBubbleProps) => {
  const isMeBubble = isMe
    ? {
      borderRadius: '15px',
      borderTopRightRadius: '0px',
    }
    : {
      borderRadius: '15px',
      borderTopLeftRadius: '0px',
    };

  return (
    <div className={`flex ${isMe ? 'flex-row-reverse' : ''} items-start mb-4`}>
      <div className={`relative bg-transparent flex ${isMe ? 'text-white' : 'text-black'}`}>
        <div className={`flex ${isMe ? 'flex-row-reverse' : ''}`}>
          <div
            className={`relative inline-block rounded-xl p-3 ${
              isMe ? 'bg-symbol-yellow' : 'bg-gray-200'
            }`}
            style={isMeBubble}
          >
            <p>{content}</p>
          </div>
          <small className="self-end mb-0.5 mx-1.5 text-black">23:11</small>
        </div>
      </div>
    </div>
  );
});

type ChatType = {
  chatTerm: string;
};

const ChatRoom: React.FC = () => {
  const chatSectionRef = useRef<HTMLDivElement>(null);

  const {
    register,
    formState: { errors, isValid },
    getValues,
    reset: resetForm,
    setFocus,
    watch,
    handleSubmit,
  } = useForm<ChatType>({
    defaultValues: {
      chatTerm: '',
    },
  });

  useEffect(() => {
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollTop = chatSectionRef.current.scrollHeight;
    }
  }, []);

  const submitChat = (data : ChatType) => {
    const { chatTerm } = data;
    console.log('chat Term :::', chatTerm);
  };

  return (
    <main className="max-w-xl mx-auto py-3 h-full">
      <div className="flex items-center w-full py-2.5  shadow-sm">
        <Link href="/" className="ml-2.5 cursor-pointer">
          <HiOutlineArrowLeft size={24} />
        </Link>
        <h1 className="flex-1 text-center text-2xl font-bold mr-[24px]">채팅방 제목</h1>
      </div>

      <section
        className="flex flex-col rounded-lg overflow-y-auto gap-y-3 scrollbar-hide py-3"
        style={{ maxHeight: 'calc(100% - 95px)' }}
        ref={chatSectionRef}
      >
        <div className="px-3">
          <ChatBubble content="안녕하세요!" />
          <ChatBubble content="반갑습니다!" isMe />
          <ChatBubble content="오늘 어떤 일이 있었나요?" />
          <ChatBubble content="저는 공부를 했어요." isMe />
          <ChatBubble content="좋은 하루 보내세요!" />
          <ChatBubble content="안녕하세요!" />
          <ChatBubble content="반갑습니다!" isMe />
          <ChatBubble content="오늘 어떤 일이 있었나요?" />
          <ChatBubble content="저는 공부를 했어요." isMe />
          <ChatBubble content="좋은 하루 보내세요!" />
          <ChatBubble content="안녕하세요!" />
          <ChatBubble content="반갑습니다!" isMe />
          <ChatBubble content="오늘 어떤 일이 있었나요?" />
          <ChatBubble content="저는 공부를 했어요." isMe />
          <ChatBubble content="좋은 하루 보내세요!" />
        </div>

        <form className="fixed bottom-[13px] mx-0.5 max-w-[576px] w-full" onSubmit={handleSubmit(submitChat)}>
          <div className="relative mx-auto w-[95%]">
            <Input label="chatTerm" register={register} type="text" />
            <button type="submit" className="absolute right-0 z-30 bg-symbol-yellow text-white rounded-md p-2 px-5 shadow-sm" style={{ top: '7.5%', right: '0.4%' }}>전송</button>
          </div>
        </form>
      </section>

    </main>
  );
};

export default ChatRoom;
