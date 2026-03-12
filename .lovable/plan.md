

# Build Alex Moreno Personal Trainer Website

The project is currently a blank starter. The full site needs to be built from scratch per the original brief, with particular attention to making the Hero and Trust sections visually strong.

## Files to Create/Modify

### `src/index.css` — Update design tokens
- Dark base: `--background: 0 0% 4%`, orange accent `--primary: 24 95% 53%`
- Neutral grays for cards, borders, muted text

### `src/pages/Index.tsx` — Main page assembling all sections

### `src/components/Header.tsx` — Sticky header
- Logo text "ALEX MORENO", nav links (Schedule, About, Location), orange "Book Your Session" button
- Compact on mobile (smaller padding, hamburger or minimal nav)
- Background becomes solid on scroll

### `src/components/HeroSection.tsx` — Hero (Section 2 focus)
- Large headline: "Structured Strength Training That Fits Your Life"
- Subtitle mentioning indoor studio + outdoor Barcelona sessions
- Orange "Book Your Session" CTA + "View Schedule" text link with smooth scroll
- Full-width SVG/CSS hero image placeholder — a distinctive dark gradient composition with geometric shapes suggesting a training environment, not a generic gray box
- Strong vertical rhythm, generous whitespace

### `src/components/ScheduleSection.tsx` — Schedule grid
- Static demo data: 6-8 sessions across the week
- Desktop: clean table with columns (Time, Class, Focus, Location, Format, Duration, Availability, Action)
- Mobile: stacked cards
- Orange "Book" buttons triggering demo toast
- Tags for Studio/Outdoor, 1-on-1/Small Group

### `src/components/TrustSection.tsx` — Coach profile (Section 4 focus)
- Two-column layout: coach portrait placeholder (left) + bio text (right)
- Portrait: distinctive SVG placeholder with warm tones, suggesting a person silhouette — not the same gray box used elsewhere
- 3 credibility bullets with icons: "10+ years coaching experience", "NSCA-CSCS certified", "Trained 500+ clients across 3 countries"
- Below: two image placeholders side by side — one for indoor studio (cool/structured feel), one for outdoor Barcelona (warm/natural feel) — each with distinct color treatments and overlaid labels

### `src/components/TestimonialsSection.tsx` — Social proof
- 3 testimonial cards in a row (stacked on mobile)
- Each: quote, name, age, profession
- Subtle card styling, no photos needed
- Community training placeholder image strip or accent

### `src/components/LogisticsSection.tsx` — Practical info
- Grid of 4-5 info blocks: Base Location, Outdoor Spots, Session Length, What to Bring, Who It's For
- Icons + short text, clean layout

### `src/components/FooterCTA.tsx` — Final CTA + footer
- Large "Ready to Train?" heading, orange "Book Your Session" button
- Minimal footer: Instagram link, copyright

## Key Design Decisions
- All booking buttons use `sonner` toast: "Demo mode — booking not yet connected"
- Smooth scroll via `scrollIntoView` for nav links
- Orange used only for CTAs, availability indicators, and key highlights
- Each image placeholder uses different SVG compositions/colors to feel distinct
- Mobile-first responsive approach throughout

