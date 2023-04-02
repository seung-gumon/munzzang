import React from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import ClientOnly from '@/app/components/ClientOnly';
import Modal from '@/app/components/modals/Modal';

export const metadata : Metadata = {
  title: 'MunZzang',
  description: '문제를 대신 풀어주는 개쩌는 AI',
  manifest: '/manifest.json',
};

const font = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
          <Modal isOpen />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
