import 'styles/globals.scss';

import React from 'react';
import { Inter } from 'next/font/google';
import { Footer, Header, PageWrapper } from 'app/components';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LEIME.co',
  description: 'LEIME.co test task website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
