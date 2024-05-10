import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const ENVIRONMENT = process.env.ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT;
const RELEASE = process.env.COMMIT_ID || process.env.NEXT_PUBLIC_COMMIT_ID;

Sentry.init({
  dsn: SENTRY_DSN,
  release: RELEASE,
  environment: ENVIRONMENT,
  autoSessionTracking: false,
});
