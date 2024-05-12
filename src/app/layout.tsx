import 'styles/globals.scss';

import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { PageWrapper } from 'components';
import { Footer, Header } from 'modules';

import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PageWrapper>
            <Header />
            {children}
            <Footer />
          </PageWrapper>
        </Providers>
      </body>
    </html>
  );
}
