# Sentry Setup Guide for Session-Bookr

This guide follows the initialization of [Issue #2](https://github.com/ShawnSlawter/session-bookr/issues/2).

## 1. Install Dependencies
Run the following command to install the Sentry SDK:
```bash
bun add @sentry/react
```

## 2. Configuration
Initialize Sentry in your main entry point (e.g., `src/main.tsx`).

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, 
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

## 3. Environment Variables
Add your DSN to `.env.local`:
```env
VITE_SENTRY_DSN=your_dsn_here
```
Update `main.tsx` to use the environment variable:
```typescript
dsn: import.meta.env.VITE_SENTRY_DSN,
```

## 4. Feedback Loop (User Feedback)
To enable the feedback form on crashes, use the `Sentry.showReportDialog` or the `ErrorBoundary` component.

```tsx
<Sentry.ErrorBoundary fallback={<p>An error has occurred</p>} showDialog>
  <App />
</Sentry.ErrorBoundary>
```

## 5. Verification
Trigger a test error to ensure Sentry is capturing it:
```typescript
throw new Error("Sentry Test Error");
```

---
*Refer to the official [Sentry Vite Documentation](https://docs.sentry.io/platforms/javascript/guides/vite/) for advanced source map uploads.*
