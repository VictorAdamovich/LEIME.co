import { type ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div>
      <div>
        <button type="button">
          <Link href="/">
            <span>Back</span>
          </Link>
        </button>
      </div>
      <main>{children}</main>
    </div>
  );
}
