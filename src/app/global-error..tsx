'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

const reportSentry = async (error: Error) => {
  await Sentry.captureException(error);
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('🚀🚀🚀 ~ reportSentry ~ error', error);
    reportSentry(error);
  }, [error]);

  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
