### Frontend Improvements Implementation Plan

This document tracks implementation of the proposed frontend improvements for the session booking site.  
Scope: **frontend only** (UX, UI, accessibility, and component structure). No backend work.

---

### 1. Global Layout & Structure

**Goals**
- Align page layout with full-bleed hero and fixed header.
- Standardize section spacing and visual separation.

**Tasks**
- [x] Review current `#root` styles in `App.css` and how they interact with Tailwind layout classes.
- [x] Decide on layout strategy: full-bleed sections with inner `max-w-6xl` container.
- [x] Adjust global layout so the root element does not impose conflicting `max-width`, padding, or centering.
- [x] Verify hero, schedule, trust, testimonials, and logistics sections render consistently across breakpoints.
- [x] Introduce subtle section separation patterns:
  - [x] Confirm which sections use `bg-background`, `bg-card/50`, or other variants.
  - [x] Optionally add a simple section divider (border or gradient) between key sections.

**Acceptance Criteria**
- [x] The page feels full-width where intended, with content constrained by inner containers.
- [x] Sections are visually distinct but cohesive, with consistent vertical rhythm.

---

### 2. Navigation & Header UX

**Goals**
- Improve usability of the fixed header, especially on mobile.
- Clarify navigation and reinforce the primary CTA without overuse.

**Tasks**
- [x] Audit header behavior at different scroll positions and breakpoints.
- [x] Refine brand name styling and responsiveness:
  - [x] Ensure logo text never wraps awkwardly on small screens.
  - [x] Adjust font size or tracking for mobile if needed.
- [x] Implement current-section highlighting:
  - [x] Add a way to detect which section is in view (e.g., Intersection Observer hook).
  - [x] Apply a distinct state (color/underline) to the corresponding nav item.
- [x] Improve mobile nav menu:
  - [x] Consider adding a semi-transparent overlay behind the open menu.
  - [x] Close the menu when clicking outside or selecting a link.
- [x] Rationalize “Book” CTAs in the header:
  - [x] Decide whether header “Book Your Session” should scroll to the schedule or open a (future) booking UI.
  - [x] Update behavior to reduce duplicate toasts or confusing demo state.

**Acceptance Criteria**
- [ ] Navigation clearly indicates the current section during scroll.
- [ ] Mobile menu feels responsive and easy to dismiss.
- [ ] Header CTA behavior is consistent and understandable.

---

### 3. Hero Section & Above-the-Fold Experience

**Goals**
- Make value proposition immediately clear.
- Encourage scrolling and discovery of the schedule.

**Tasks**
- [x] Review hero image composition and cropping on mobile and desktop.
- [x] Ensure overlays balance readability with image visibility.
- [x] Add a concise “Promise strip” under the main CTA:
  - [x] Define 2–3 short bullets or badges (e.g., session frequency, equipment, philosophy).
  - [x] Implement a compact visual treatment that works on all breakpoints.
- [x] Add explicit session type hints (e.g., Strength / Conditioning / Mobility) near the hero copy.
- [x] Add a subtle scroll cue:
  - [x] Decide on pattern (e.g., “Scroll to schedule” link with arrow).
  - [x] Verify it visually points to the schedule section.
- [x] Confirm that the hero remains performant (image sizing, loading strategy).

**Acceptance Criteria**
- [ ] Above-the-fold content communicates what, for whom, and how to start.
- [ ] Users have a clear visual cue to scroll to the schedule.

---

### 4. Schedule Section (Core Conversion Area)

**Goals**
- Make it easy to choose and understand sessions.
- Prepare UI for a future real booking flow.

#### 4.1 Table View (Desktop)

**Tasks**
- [x] Add a brief weekly summary above the table (e.g., “7 weekly sessions · Studio & Outdoor”).
- [x] Convert focus text into visually distinct badges:
  - [x] Define a consistent badge style for Strength, Conditioning, Mobility.
  - [x] Ensure colors remain accessible on the card background.
- [x] Highlight 1–2 sessions as “New” or “Popular”:
  - [x] Choose appropriate sessions and label style.
  - [x] Ensure labels don’t dominate the layout.
- [x] Confirm tabular data aligns cleanly and is easy to scan.

#### 4.2 Mobile Cards

**Tasks**
- [x] Group sessions by day on mobile:
  - [x] Add day headers (e.g., “Monday”, “Tuesday”) above clusters of cards.
  - [x] Avoid redundant day labels inside each card if day headers are added.
- [x] Add simple client-side filters:
  - [x] Decide which filters to support initially (e.g., All / Studio / Outdoor / 1-on-1 / Small Group).
  - [x] Implement filter controls (chips/buttons) that filter the schedule array.
  - [x] Ensure filter state is obvious and easy to reset.
- [x] Implement sticky day headers (“Monday”, “Tuesday”) for better scannability when scrolling the mobile list.

#### 4.3 Future Booking UI Preparation (Frontend Only)

**Tasks**
- [x] Define a reusable pattern for “Session details” (e.g., dialog or drawer).
- [x] Add a non-functional “More details” interaction that reuses this pattern.
- [x] Add microcopy near the schedule like “Not sure where to start? Try Barbell Fundamentals or Movement & Mobility.”

**Acceptance Criteria**
- [ ] Users can quickly scan sessions and understand focus, format, and location.
- [ ] Mobile experience is as legible and filterable as desktop.
- [ ] The schedule UI is ready to plug into a real booking backend later.

---

### 5. Trust / About (Coach Section)

**Goals**
- Strengthen trust and relatability.
- Surface key credentials and philosophy quickly.

**Tasks**
- [x] Audit current copy for clarity and tone; keep “no motivational noise” positioning.
- [x] Surface key trust signals near the coach name:
  - [x] Certifications (e.g., NSCA-CSCS).
  - [x] Languages spoken.
  - [x] Years of experience and number of clients.
- [x] Add a short “Philosophy” subsection:
  - [x] Define 2–3 bullet points that align with brand (structured, evidence-based, no-nonsense).
- [ ] Consider a small stats card overlay on the portrait:
  - [ ] Show 2–3 key metrics (years coaching, clients, countries).
  - [ ] Ensure contrast and legibility on the image.
- [x] Add subtle entry animation for portrait and bullets (non-intrusive, respects reduced-motion preferences).
- [x] Verify mobile stacking order keeps the coach’s face and core text early in the scroll.

**Acceptance Criteria**
- [ ] Users quickly understand who Alex is and why to trust them.
- [ ] The section feels personal and professional without being noisy.

---

### 6. Testimonials & Social Proof

**Goals**
- Make testimonials feel human, varied, and scannable.

**Tasks**
- [x] Add persona tags to each testimonial (e.g., “Expat”, “Beginner to lifting”, “Tech professional”).
- [x] Optionally add avatar placeholders:
  - [x] Decide on style (initials-based avatar with neutral background).
  - [x] Ensure it doesn’t require real photos at this stage.
- [x] Slightly vary testimonial card content length so grid feels more organic while staying aligned.
- [x] Revisit the “Community training” image strip:
  - [x] Confirm caption and overlay are legible.
  - [x] Decide if additional microcopy is needed (e.g., “Group sessions offered on request”).

**Acceptance Criteria**
- [x] Testimonials convey diverse, believable client stories.
- [x] The section enhances trust without overwhelming the user.

---

### 7. Logistics & Practical Info

**Goals**
- Clarify practical details and set expectations before booking.

**Tasks**
- [x] Group logistics items conceptually (e.g., Location, Session Format, Expectations).
- [x] Add visual differentiation between groups if helpful (subheadings or subtle color usage).
- [x] Refine the “Not For” card:
  - [x] Ensure tone is firm but not off-putting.
  - [x] Consider a distinct but subtle visual treatment (e.g., muted red accent).
- [x] Add a short “How booking works” line:
  - [x] Mention intake form / intro session as the first step (even if not wired yet).

**Acceptance Criteria**
- [x] Common questions about where, how long, and for whom are answered at a glance.
- [x] Prospective clients understand what to expect before hitting “Book.”

---

### 8. Visual Design & Microtypography

**Goals**
- Polish the visual system for consistency and readability.

**Tasks**
- [x] Review typography across headings, body, and labels:
  - [x] Ensure maximum line length for paragraphs (~65–70 characters on large screens).
  - [x] Adjust `muted-foreground` tone if needed for better comfort on dark background.
  - [x] Revisit letter-spacing on all-caps labels for mobile readability.
- [x] Audit border radii:
  - [x] Align card and badge radii to a small set of tokens (e.g., `rounded-xl`, `rounded-full`).
- [x] Ensure consistent icon sizes and alignment across sections.
- [x] Verify color palette usage:
  - [x] Confirm primary and accent hues match branding.
  - [x] Avoid introducing ad-hoc colors without tokens.

**Acceptance Criteria**
- [x] Typography feels cohesive and easy to read across sections.
- [x] Icons, radii, and colors look unified.

---

### 9. Motion, Interactions & States

**Goals**
- Add subtle motion and clear feedback without distraction.

**Tasks**
- [x] Audit current hover/focus states for all interactive elements (buttons, links, filters).
- [x] Enhance primary CTA hover:
  - [x] Slight scale or shadow change.
  - [x] Ensure these effects respect reduced-motion settings.
- [x] Add light hover/active states to cards (lift/scale or border/overlay change).
- [x] Ensure keyboard focus is clearly visible on all key actions:
  - [x] Buttons.
  - [x] Links (especially nav and schedule controls).
  - [x] Filter chips.
- [x] Confirm smooth scrolling behavior feels natural and doesn’t conflict with focus management.

**Acceptance Criteria**
- [x] All interactive elements provide clear, accessible feedback on hover, focus, and press.
- [x] Motion adds polish but remains subtle and respectful of accessibility settings.

---

### 10. Accessibility & Copy Clarity

**Goals**
- Maintain good accessibility and ensure copy supports UX.

**Tasks**
- [x] Run an accessibility pass:
  - [x] Check contrast ratios for key text/background combinations.
  - [x] Add `aria-label`s where needed (e.g., icon-only buttons).
  - [x] Verify heading hierarchy is logical.
- [x] Ensure all images have meaningful `alt` text or are marked decorative if needed.
- [x] Review copy for:
  - [x] Clear next steps (“How it works”).
  - [x] Transparency about pricing expectations (even if not listing explicit numbers).
  - [x] Consistent voice and tense across sections.

**Acceptance Criteria**
- [x] The site passes basic accessibility checks for color and semantics.
- [x] Users understand what happens when they click “Book” and what the journey looks like.

---

### 11. Frontend Architecture & Reusability

**Goals**
- Make the UI easy to evolve as new pages and real booking logic are added.

**Tasks**
- [x] Identify repeating patterns (section headers, cards, badges, schedule rows/cards).
- [x] Extract a shared `SectionHeader` component:
  - [x] Supports label, title, and optional description.
  - [x] Used by schedule, trust, testimonials, logistics, etc.
- [x] Extract schedule-specific UI components:
  - [x] `SessionRow` for the table.
  - [x] `SessionCard` for mobile.
  - [x] Optional shared session type badge.
- [x] Consider stubbing routes for future pages (e.g., `/about`, `/pricing`, `/faq`) that currently scroll or show existing content.

**Acceptance Criteria**
- [x] Shared visual patterns live in reusable components.
- [x] Adding a new section or page reuses existing building blocks with minimal duplication.

---

### 12. Tracking Progress

**Process Checklist**
- [x] Before starting each work session, select 1–3 subsections from this document to focus on.
- [x] After completing a change, update the relevant checkboxes here.
- [x] Periodically review the entire checklist and reprioritize remaining items based on:
  - [x] Impact on conversions (hero, schedule, CTAs).
  - [x] Impact on trust (about, testimonials, logistics).
  - [x] Impact on accessibility and maintainability.

Once all high-priority items are complete, revisit this document to define the next phase (e.g., actual booking flow, pricing page, or expanded FAQ) as a separate plan.

