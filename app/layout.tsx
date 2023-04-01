import React from 'react';
import { Noto_Sans_KR } from 'next/font/google';

import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import { Metadata } from 'next';
import Image from 'next/image';

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
