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
  - [ ] Optionally add a simple section divider (border or gradient) between key sections.

**Acceptance Criteria**
- [x] The page feels full-width where intended, with content constrained by inner containers.
- [x] Sections are visually distinct but cohesive, with consistent vertical rhythm.

---

### 2. Navigation & Header UX

**Goals**
- Improve usability of the fixed header, especially on mobile.
- Clarify navigation and reinforce the primary CTA without overuse.

**Tasks**
- [ ] Audit header behavior at different scroll positions and breakpoints.
- [ ] Refine brand name styling and responsiveness:
  - [ ] Ensure logo text never wraps awkwardly on small screens.
  - [ ] Adjust font size or tracking for mobile if needed.
- [ ] Implement current-section highlighting:
  - [ ] Add a way to detect which section is in view (e.g., Intersection Observer hook).
  - [ ] Apply a distinct state (color/underline) to the corresponding nav item.
- [ ] Improve mobile nav menu:
  - [ ] Consider adding a semi-transparent overlay behind the open menu.
  - [ ] Close the menu when clicking outside or selecting a link.
- [ ] Rationalize “Book” CTAs in the header:
  - [ ] Decide whether header “Book Your Session” should scroll to the schedule or open a (future) booking UI.
  - [ ] Update behavior to reduce duplicate toasts or confusing demo state.

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
- [ ] Review hero image composition and cropping on mobile and desktop.
- [ ] Ensure overlays balance readability with image visibility.
- [ ] Add a concise “Promise strip” under the main CTA:
  - [ ] Define 2–3 short bullets or badges (e.g., session frequency, equipment, philosophy).
  - [ ] Implement a compact visual treatment that works on all breakpoints.
- [ ] Add explicit session type hints (e.g., Strength / Conditioning / Mobility) near the hero copy.
- [ ] Add a subtle scroll cue:
  - [ ] Decide on pattern (e.g., “Scroll to schedule” link with arrow).
  - [ ] Verify it visually points to the schedule section.
- [ ] Confirm that the hero remains performant (image sizing, loading strategy).

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
- [ ] Add a brief weekly summary above the table (e.g., “7 weekly sessions · Studio & Outdoor”).
- [ ] Convert focus text into visually distinct badges:
  - [ ] Define a consistent badge style for Strength, Conditioning, Mobility.
  - [ ] Ensure colors remain accessible on the card background.
- [ ] Highlight 1–2 sessions as “New” or “Popular”:
  - [ ] Choose appropriate sessions and label style.
  - [ ] Ensure labels don’t dominate the layout.
- [ ] Confirm tabular data aligns cleanly and is easy to scan.

#### 4.2 Mobile Cards

**Tasks**
- [ ] Group sessions by day on mobile:
  - [ ] Add day headers (e.g., “Monday”, “Tuesday”) above clusters of cards.
  - [ ] Avoid redundant day labels inside each card if day headers are added.
- [ ] Add simple client-side filters:
  - [ ] Decide which filters to support initially (e.g., All / Studio / Outdoor / 1-on-1 / Small Group).
  - [ ] Implement filter controls (chips/buttons) that filter the schedule array.
  - [ ] Ensure filter state is obvious and easy to reset.
- [ ] Consider a sticky sub-header (“Next sessions”) when scrolling the mobile list.

#### 4.3 Future Booking UI Preparation (Frontend Only)

**Tasks**
- [ ] Define a reusable pattern for “Session details” (e.g., dialog or drawer).
- [ ] Add a non-functional “More details” interaction that reuses this pattern.
- [ ] Add microcopy near the schedule like “Not sure where to start? Try Barbell Fundamentals or Movement & Mobility.”

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
- [ ] Audit current copy for clarity and tone; keep “no motivational noise” positioning.
- [ ] Surface key trust signals near the coach name:
  - [ ] Certifications (e.g., NSCA-CSCS).
  - [ ] Languages spoken.
  - [ ] Years of experience and number of clients.
- [ ] Add a short “Philosophy” subsection:
  - [ ] Define 2–3 bullet points that align with brand (structured, evidence-based, no-nonsense).
- [ ] Consider a small stats card overlay on the portrait:
  - [ ] Show 2–3 key metrics (years coaching, clients, countries).
  - [ ] Ensure contrast and legibility on the image.
- [ ] Add subtle entry animation for portrait and bullets (non-intrusive, respects reduced-motion preferences).
- [ ] Verify mobile stacking order keeps the coach’s face and core text early in the scroll.

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
- [ ] Group logistics items conceptually (e.g., Location, Session Format, Expectations).
- [ ] Add visual differentiation between groups if helpful (subheadings or subtle color usage).
- [ ] Refine the “Not For” card:
  - [ ] Ensure tone is firm but not off-putting.
  - [ ] Consider a distinct but subtle visual treatment (e.g., muted red accent).
- [ ] Add a short “How booking works” line:
  - [ ] Mention intake form / intro session as the first step (even if not wired yet).

**Acceptance Criteria**
- [ ] Common questions about where, how long, and for whom are answered at a glance.
- [ ] Prospective clients understand what to expect before hitting “Book.”

---

### 8. Visual Design & Microtypography

**Goals**
- Polish the visual system for consistency and readability.

**Tasks**
- [ ] Review typography across headings, body, and labels:
  - [ ] Ensure maximum line length for paragraphs (~65–70 characters on large screens).
  - [ ] Adjust `muted-foreground` tone if needed for better comfort on dark background.
  - [ ] Revisit letter-spacing on all-caps labels for mobile readability.
- [ ] Audit border radii:
  - [ ] Align card and badge radii to a small set of tokens (e.g., `rounded-xl`, `rounded-full`).
- [ ] Ensure consistent icon sizes and alignment across sections.
- [ ] Verify color palette usage:
  - [ ] Confirm primary and accent hues match branding.
  - [ ] Avoid introducing ad-hoc colors without tokens.

**Acceptance Criteria**
- [ ] Typography feels cohesive and easy to read across sections.
- [ ] Icons, radii, and colors look unified.

---

### 9. Motion, Interactions & States

**Goals**
- Add subtle motion and clear feedback without distraction.

**Tasks**
- [ ] Audit current hover/focus states for all interactive elements (buttons, links, filters).
- [ ] Enhance primary CTA hover:
  - [ ] Slight scale or shadow change.
  - [ ] Ensure these effects respect reduced-motion settings.
- [ ] Add light hover/active states to cards (lift/scale or border/overlay change).
- [ ] Ensure keyboard focus is clearly visible on all key actions:
  - [ ] Buttons.
  - [ ] Links (especially nav and schedule controls).
  - [ ] Filter chips.
- [ ] Confirm smooth scrolling behavior feels natural and doesn’t conflict with focus management.

**Acceptance Criteria**
- [ ] All interactive elements provide clear, accessible feedback on hover, focus, and press.
- [ ] Motion adds polish but remains subtle and respectful of accessibility settings.

---

### 10. Accessibility & Copy Clarity

**Goals**
- Maintain good accessibility and ensure copy supports UX.

**Tasks**
- [ ] Run an accessibility pass:
  - [ ] Check contrast ratios for key text/background combinations.
  - [ ] Add `aria-label`s where needed (e.g., icon-only buttons).
  - [ ] Verify heading hierarchy is logical.
- [ ] Ensure all images have meaningful `alt` text or are marked decorative if needed.
- [ ] Review copy for:
  - [ ] Clear next steps (“How it works”).
  - [ ] Transparency about pricing expectations (even if not listing explicit numbers).
  - [ ] Consistent voice and tense across sections.

**Acceptance Criteria**
- [ ] The site passes basic accessibility checks for color and semantics.
- [ ] Users understand what happens when they click “Book” and what the journey looks like.

---

### 11. Frontend Architecture & Reusability

**Goals**
- Make the UI easy to evolve as new pages and real booking logic are added.

**Tasks**
- [ ] Identify repeating patterns (section headers, cards, badges, schedule rows/cards).
- [ ] Extract a shared `SectionHeader` component:
  - [ ] Supports label, title, and optional description.
  - [ ] Used by schedule, trust, testimonials, logistics, etc.
- [ ] Extract schedule-specific UI components:
  - [ ] `SessionRow` for the table.
  - [ ] `SessionCard` for mobile.
  - [ ] Optional shared session type badge.
- [ ] Consider stubbing routes for future pages (e.g., `/about`, `/pricing`, `/faq`) that currently scroll or show existing content.

**Acceptance Criteria**
- [ ] Shared visual patterns live in reusable components.
- [ ] Adding a new section or page reuses existing building blocks with minimal duplication.

---

### 12. Tracking Progress

**Process Checklist**
- [ ] Before starting each work session, select 1–3 subsections from this document to focus on.
- [ ] After completing a change, update the relevant checkboxes here.
- [ ] Periodically review the entire checklist and reprioritize remaining items based on:
  - [ ] Impact on conversions (hero, schedule, CTAs).
  - [ ] Impact on trust (about, testimonials, logistics).
  - [ ] Impact on accessibility and maintainability.

Once all high-priority items are complete, revisit this document to define the next phase (e.g., actual booking flow, pricing page, or expanded FAQ) as a separate plan.

