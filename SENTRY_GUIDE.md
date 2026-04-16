# Sentry Integration Guide

This document outlines the steps for maintaining and verifying the Sentry integration in the `session-bookr` project.

## 1. Setup

### Installation
The project uses `@sentry/react`. If you are setting up from scratch or adding new integrations:
```bash
# Using Bun (preferred in this project environment)
bun add @sentry/react
```

### Configuration
Sentry is initialized in `src/main.tsx`. It is configured to:
- Capture all errors via `Sentry.init`.
- Wrap the entire application in a `Sentry.ErrorBoundary`.
- Provide a user feedback dialog on crash.
- Enable Session Replay (10% samples normally, 100% on error).

### Environment Variables
Ensure `VITE_SENTRY_DSN` is set in your `.env.local` or deployment environment.
See `.env.example` for the format.

## 2. Verification

To verify that Sentry is working correctly, you can trigger a test error.

### Verification Component
The project includes a `SentryTest` component (rendered only in development) at the bottom left of the screen.
- **Capture Msg**: Sends a test message to Sentry.
- **Throw Error**: Manually triggers a JavaScript error to verify the `Sentry.ErrorBoundary` and error capture.

### Local verification flow
1. Set `VITE_SENTRY_DSN` in `.env.local`.
2. Start the dev server: `npm run dev`.
3. Open `http://localhost:8080/`.
4. Use the "Sentry Debug" buttons to trigger events.
5. Check your Sentry dashboard.

### Verifying in Sentry Dashboard
1. Open your Sentry project dashboard.
2. Trigger the error in your local development environment (`npm run dev`).
3. Check the "Issues" tab in Sentry. You should see "Sentry Test Error" appear within seconds.

## 3. Best Practices
- **Source Maps**: When building for production, ensure source maps are uploaded to Sentry for readable stack traces.
- **Sensitive Data**: Avoid logging PII in breadcrumbs or tags.
- **User Context**: Use `Sentry.setUser({ id: user.id, email: user.email })` after user login to link errors to specific users.

---
*Refer to the [Sentry React Documentation](https://docs.sentry.io/platforms/javascript/guides/react/) for more advanced configurations.*
