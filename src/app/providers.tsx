'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
