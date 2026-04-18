# Session Bookr 📅

A premium, highly-aesthetic booking and scheduling platform for boutique clinical treatments. Built with a focus on visual excellence, performance, and a modern developer experience.

## 🚀 Overview

Session Bookr is a high-end service scheduling application designed for boutique clinics (specifically aesthetic treatments like laser hair removal). It features a "consultation-first" booking workflow, dynamic treatment filtering, and a state-of-the-art UI with ambient animations and responsive layouts.

### Key Features
- **Dynamic Booking System**: Context-driven appointment flow using `BookingProvider`.
- **Architectural UI**: High-fidelity design system using Radix UI primitives and custom CSS animations.
- **Scroll Reveal**: Custom hooks for fluid entrance animations as users navigate the clinic's offerings.
- **Precision Filtering**: Advanced category filtering for treatment areas (Precision, Essential, Full Coverage).

## 🛠️ Technology Stack

### Frontend
- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

### State & Logic
- **Data Fetching**: [TanStack Query (React Query) v5](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

### Infrastructure & DevOps
- **Backend/Auth**: [Supabase](https://supabase.com/)
- **Monitoring**: [Sentry](https://sentry.io/) (Error tracking & performance)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Testing**: [Vitest](https://vitest.dev/) (Unit/Integration) & [Playwright](https://playwright.dev/) (E2E)
- **Environment**: [Bun](https://bun.sh/) (Recommended package manager)

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Bun](https://bun.sh/) (Optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShawnSlawter/session-bookr.git
   cd session-bookr
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Add your `VITE_SENTRY_DSN` and other necessary credentials.

4. **Run Development Server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

## 🧪 Testing

### Unit & Integration
```bash
bun test
# or
npm test
```

### End-to-End (Playwright)
```bash
npx playwright test
```

## 📄 License
This project is private and intended for specific clinical use.
