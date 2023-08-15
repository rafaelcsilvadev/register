import Providers from '@/providers/global/providers';
import './globals.scss'
import { Inter } from 'next/font/google'

import { FC, ReactNode } from 'react';

interface PropsRootLayout {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal']
})

export const metadata = {
  title: 'CMS - Rafa',
  description: "Project CMS of Rafa's Portfolio",
}

const RootLayout: FC<PropsRootLayout> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;;