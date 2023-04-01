import { Nunito } from 'next/font/google';

import './globals.css';

export const metadata = {
  title: '문짱',
  description: '문제를 대신 풀어주는 개쩌는 AI',
};

const font = Nunito({
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
      {children}
      </body>
    </html>
  )
}
