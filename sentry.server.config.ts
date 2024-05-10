import * as Sentry from '@sentry/nextjs';
import { ProfilingIntegration } from '@sentry/profiling-node';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const ENVIRONMENT = process.env.ENVIRONMENT || process.env.NEXT_PUBLIC_ENVIRONMENT;
const RELEASE = process.env.COMMIT_ID || process.env.NEXT_PUBLIC_COMMIT_ID;

Sentry.init({
  dsn: SENTRY_DSN,
  release: RELEASE,
  environment: ENVIRONMENT,
  autoSessionTracking: false,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0, // Profiling sample rate is relative to tracesSampleRate
  integrations: [
    // Add profiling integration to list of integrations
    new ProfilingIntegration(),
  ],
});
