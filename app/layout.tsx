import React from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import ClientOnly from '@/app/components/ClientOnly';
import RegisterModal from '@/app/components/modals/RegisterModal';
import LoginModal from '@/app/components/modals/LoginModal';
import ToasterProvider from '@/app/providers/ToasterProvider';

export const metadata : Metadata = {
  title: 'MunZzang',
  description: '문제를 대신 풀어주는 개쩌는 AI',
  manifest: '/manifest.json',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: ['/favicon.ico', '/favicon-16x16.png', '/favicon-32x32.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

const font = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body id="body" className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar />
          <LoginModal />
          <RegisterModal />
          {/* <Modal isOpen title="hello world" actionLabel="제출" /> */}
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
