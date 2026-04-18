# Implementation Plan - Backend & UI [IMPLEMENTATION_UI_PLAN.md]

This document outlines the full integration of a Supabase backend and a premium, architectural Dashboard system for the Maya Alvarez laser hair removal booking application.

## User Review Required

> [!IMPORTANT]
> - **Supabase Auth**: We will implement Email/Password and Google Auth.
> - **Security**: The `SUPABASE_SERVICE_ROLE_KEY` will be used strictly in server-side/edge contexts and never exposed to the client.
> - **Role Progression**: Users start as `user`. Their first successful booking automatically upgrades them to `client`. Admins maintain full manual override and banning capabilities.
> - **Top-Left Toasts**: Sonner will be configured for top-left positioning to maintain the clean architectural feel.

---

## 1. Backend Architecture (Supabase)

### Environment Configuration
- `VITE_SUPABASE_URL`: Public Supabase API URL.
- `VITE_SUPABASE_ANON_KEY`: Public anon key for client-side Auth and RLS.
- `SUPABASE_SERVICE_ROLE_KEY`: **SECRET** key for admin-only operations (Edge Functions).

### Database Schema (SQL)

#### Core & Auth
- **`profiles`**
  - `id` (uuid, pk, references auth.users)
  - `email` (text, unique)
  - `full_name` (text)
  - `avatar_url` (text)
  - `role` (enum: 'user', 'client', 'admin')
  - `status` (enum: 'active', 'banned')
  - `phone_prefix` (text)
  - `phone_number` (text)
  - `address_line_1`, `address_line_2`, `postcode`, `city`, `county_or_state`, `country` (text)
  - `created_at` (timestamp)

#### Clinic & Services
- **`locations`** (Multi-studio support)
  - `id` (uuid, pk)
  - `name` (text) - e.g., "Austin Studio"
  - `address`, `city`, `state`, `zip` (text)
  - `is_active` (boolean)
  - `max_advance_booking_days` (int) - Default: 90
  - `minimum_notice_hours` (int) - Default: 24
- **`categories`**
  - `id` (uuid, pk)
  - `name` (text) - e.g., "Full Coverage", "Precision Areas"
- **`treatment_types`** (CRUDable by Admin)
  - `id` (uuid, pk)
  - `category_id` (uuid, references categories)
  - `title`, `description` (text)
  - `duration_minutes` (int)
  - `price` (decimal)
  - `status` (enum: 'active', 'draft', 'archived')

#### Availability & Bookings
- **`availability_rules`** (Recurring patterns)
  - `id` (uuid, pk)
  - `location_id` (uuid, references locations)
  - `treatment_type_id` (uuid, optional, for service-specific rules)
  - `day_of_week` (int, 0-6)
  - `start_time`, `end_time` (time)
- **`availability_exceptions`** (Specific date overrides)
  - `id` (uuid, pk)
  - `location_id` (uuid)
  - `date` (date)
  - `is_available` (boolean)
  - `reason` (text)
- **`bookings`**
  - `id` (uuid, pk)
  - `user_id` (uuid, references profiles)
  - `treatment_type_id` (uuid, references treatment_types)
  - `location_id` (uuid, references locations)
  - `start_time` (timestamp)
  - `status` (enum: 'pending', 'confirmed', 'cancelled', 'completed')
  - `cancel_reason` (text)

#### Audit & History
- **`sign_in_history`**
  - `id` (uuid, pk)
  - `user_id` (uuid)
  - `ip_address` (text)
  - `user_agent` (text)
  - `timestamp` (timestamp)
- **`audit_logs`** (Track changes to data)
  - `id` (uuid, pk)
  - `entity_type` (text) - e.g., 'booking', 'profile'
  - `entity_id` (uuid)
  - `action` (text) - e.g., 'Status Changed to Banned'
  - `performed_by` (uuid, pk)
  - `created_at` (timestamp)

---

## 2. Frontend Routing Strategy

We will use nested routes with dedicated pages (slugs) to avoid modal dependency for core records.

### Public Routes
- `/`: Landing Page
- `/auth/login`: Sig-In
- `/auth/signup`: Sign-Up
- `/auth/logout`

### General User / Client Routes
- `/profile`: Personal details and address management.
- `/client/dashboard`: Overview, next session card.
- `/client/bookings`: List of all sessions.
- `/client/bookings/:id`: Detail view of a specific booking.

### Admin Routes (`/admin`)
- `/admin/dashboard`: Master metrics (Bookings, Cancellations, Revenue Est, Popular Services).
- `/admin/sessions`: CRUD list for `treatment_types` and `categories`.
- `/admin/sessions/:id`: Detailed editor/viewer for a session type.
- `/admin/bookings`: Master calendar/list view with multi-location filters.
- `/admin/bookings/:id`: Full audit record and status management.
- `/admin/clients`: searchable directory of all users.
- `/admin/clients/:id`: Full profile, history, and role management.
- `/admin/reporting`: Visualizations for clinic growth and location trends.
- `/admin/settings`: Location management and global clinic rules.

---

## 3. UI/UX & Design Direction

### Brand Identity: "Modern Clinical Luxury"
- **Mood**: Calm, premium, feminine, architectural.
- **Palette**: Warm Ivory background, Muted Rose (`#A65D70`) as primary accent, Espresso (`#1A1614`) for high-contrast text.
- **Surfaces**: Use of `architectural-panel` classes (elevated borders, subtle glassmorphism, soft shadows).
- **Feedback**: Sonner toasts at the **Top-Left** with smooth drift-in animations.

### Component Preferences
- **Modals**: Used only for final confirmations (e.g., "Confirm Cancellation") or tiny single-field edits.
- **Sidebars**: Collapsible, architectural sidebars for all dashboard views.
- **Breadcrumbs**: Prominent breadcrumbs for deep navigation (e.g., *Admin > Bookings > #BK-1234*).
- **Data Tables**: Paginated, filterable tables with Shadcn's visual polish.

---

## 4. Logical Workflows

### 1. Booking & Availability
- **No Pre-generated Slots**: When a user selects a date, the system queries `availability_rules` and `availability_exceptions` dynamically, subtracts existing `bookings` for that window, and presents valid times.
- **Advance Limits**:
  - **Maximum Days**: Prevents booking too far in the future (e.g., beyond 90 days).
  - **Minimum Notice**: Prevents last-minute bookings (e.g., within 24 hours of treatment).
- **Validation**: Server-side check during booking submission to ensure all rules (availability and time limits) are met.

### 2. Role Transition
- **User -> Client**: A standard `user` is automatically upgraded to `client` status upon their first `confirmed` booking.
- **Admin Control**: Admins can override roles via the `/admin/clients/:id` page.
- **Banning**: A `banned` status prevents any new bookings or login access via RLS policies.

### 3. Reporting Metrics
- **Monthly Bookings**: Volume trends.
- **Cancellations**: Rate and reason analysis.
- **Popularity**: Most-booked treatment areas (e.g., "Underarms" vs "Full Legs").
- **Location Performance**: Bookings split by Studio.
- **Clinical Metrics**: Returning client rate, lead-to-client conversion time.

---

## 5. Security & Verification Plan

### Security
- **Row Level Security (RLS)**: Enforce `user_id` ownership for clients and `role = admin` for dashboard access.
- **Edge Functions**: Use secret keys for role upgrade logic to prevent client-side manipulation.

### Verification Steps
- [ ] **Auth Flow**: Verify Email/Password and Google Provider.
- [ ] **Role RLS**: Test that `client` cannot access `/admin` paths.
- [ ] **Multi-Studio**: Create bookings for two different locations and verify filtering.
- [ ] **Toast Position**: Confirm Top-Left positioning across mobile and desktop.
- [ ] **Detail Slugs**: Verify deep links to `/admin/clients/:id` work and load the correct record.
