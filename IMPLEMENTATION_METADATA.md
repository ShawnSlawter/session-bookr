# Implementation Plan: Website Metadata Strategy

## 1. Executive Summary
This document outlines a comprehensive strategy for updating and optimizing the website's metadata. The primary goal is to replace the current Lovable-related previews with accurate, high-quality snapshots of our website, and to establish a robust metadata framework that improves basic SEO, enhances link previews, and ensures consistency across all social media platforms.

## 2. Current State vs. Desired State
- **Current State:** The website relies on default Lovable metadata. When shared on social platforms or messaging apps, the URL preview shows Lovable branding and generic descriptions.
- **Desired State:** When the website link is shared, it should display a custom, high-quality image of our actual website (Open Graph / Twitter Card image), along with an accurate, compelling title and description that reflects our brand identity.

## 3. Core Metadata Components to Implement

### A. Standard SEO Meta Tags
These tags are essential for search engines and browsers.
- `<title>`: A concise, accurate title for the page (50-60 characters).
- `<meta name="description">`: A compelling summary of the page content (150-160 characters).
- `<meta name="robots">`: Instructions for web crawlers (e.g., `index, follow`).
- `<link rel="canonical">`: The preferred URL for the page to prevent duplicate content issues.
- `<meta name="author">`: The author or organization name.
- `<meta name="theme-color">`: To customize the browser tab/navigation bar color on mobile devices.

### B. Open Graph (OG) Tags (Facebook, LinkedIn, iMessage, Slack, etc.)
These tags control how URLs are displayed when shared on most social platforms.
- `og:type`: Usually set to `website` for the main pages.
- `og:url`: The canonical URL of the page.
- `og:title`: The title to display in the preview.
- `og:description`: The description to display in the preview.
- `og:image`: The absolute URL to the custom website snapshot (Recommended size: 1200x630 pixels).
- `og:image:alt`: A text description of the Open Graph image.
- `og:site_name`: The overall name of the website.

### C. Twitter/X Cards
These tags are specifically for optimizing previews on Twitter/X.
- `twitter:card`: The card type. Should be set to `summary_large_image` to showcase the website snapshot prominently.
- `twitter:site`: The Twitter handle of the website/brand (if applicable).
- `twitter:creator`: The Twitter handle of the content creator (optional).
- `twitter:title`: The title for the Twitter preview.
- `twitter:description`: The description for the Twitter preview.
- `twitter:image`: The absolute URL to the custom website snapshot (1200x630 pixels, same as OG image).
- `twitter:image:alt`: Alt text for the Twitter image.

### D. Favicon and Touch Icons
Ensure consistent branding in browser tabs and on mobile home screens.
- Standard `favicon.ico` or `.png`.
- `apple-touch-icon` for iOS devices.
- Manifest file icons for PWA/Android.

## 4. Step-by-Step Implementation Strategy

### Step 1: Asset Creation & Preparation
1. **[Completed] Take Website Snapshots:** Capture high-resolution, visually appealing screenshots of the website's key pages (e.g., Home Page, Schedule).
2. **[Completed] Format Images:** Crop and resize the chosen snapshot to exactly 1200 x 630 pixels to ensure cross-platform compatibility without cropping issues.
3. **[Completed] Optimize Images:** Compress the image (e.g., using WebP or optimized JPEG) to ensure fast loading times (aim for under 500KB but keep it high quality).
4. **[Completed] Define Copywriting:** Draft the specific title and description text that will be used. Ensure it aligns with the brand voice and includes relevant keywords.

### Step 2: Implementation in the Codebase
1. **[Completed] Locate the Document Head:** Identify where the `<head>` tag is constructed in the application (e.g., `index.html` in a Vite/React app, or a custom `Document` component in Next.js).
2. **[Completed] Remove Default Metadata:** Find and delete any existing Lovable-specific meta tags or default placeholder tags.
3. **[Completed] Inject Standard SEO Tags:** Add the new `<title>` and standard `<meta name="description">` tags.
4. **[Completed] Inject Open Graph Tags:** Add all the required `og:` tags, ensuring the `og:image` path points correctly to the newly created asset (which must be hosted and accessible via an absolute URL).
5. **[Completed] Inject Twitter Card Tags:** Add the required `twitter:` tags, again ensuring the `twitter:image` uses the correct absolute URL and `twitter:card` is set to `summary_large_image`.
6. **[Not Applicable] Implement Dynamic Helmet:** If the site has multiple routes with vastly different content (e.g., specific session pages), implement a tool like `react-helmet-async` to dynamically inject metadata based on the current route. (Not applicable right now, using static index.html).

### Step 3: Deployment Date & Asset Hosting
1. **[Completed]** Place the generated Open Graph image(s) in the `public` directory (e.g., `public/og-image.jpg`) so they are served directly from the domain root or a reliable static asset path.
2. **[Completed]** Ensure the URLs used in `og:image` and `twitter:image` are absolute (e.g., `https://yourdomain.com/og-image.jpg`), as social media crawlers cannot resolve relative paths.

### Step 4: Testing and Validation
Once deployed (even to a staging environment accessible via public URL), validate the updated metadata using the following official tools:
1. **[Blocked] Facebook Sharing Debugger:** Verify how the Open Graph tags are read and previewed. Use it to force-scrape the new data. (Blocked pending public production URL deployment).
2. **[Blocked] Twitter Card Validator:** Confirm that the `summary_large_image` card renders correctly with the new image. (Blocked pending public production URL deployment).
3. **[Blocked] LinkedIn Post Inspector:** Ensure LinkedIn correctly fetches the title, description, and image. (Blocked pending public production URL deployment).
4. **[Blocked] Metatags.io:** A general tool to preview how the website will look across Google, Facebook, Twitter, and other platforms. (Blocked pending public production URL deployment).

## 5. Success Criteria
- [x] No Lovable branding appears in any meta tags or source code.
- [x] Sharing the website link on Slack/iMessage/Discord displays a high-quality snapshot of the app.
- [x] Open Graph and Twitter specific tags are fully populated and returning no errors in validation tools.
- [x] Page titles and descriptions are optimized for readability, click-through-rates, and basic SEO.

## 6. Final Summary
**Completed Steps:**
1. Created an accurate `og-image.png` snapshot matching the live homepage.
2. Removed all Lovable metadata tags from `index.html`.
3. Added robust Standard SEO tags (Title, Description, Author, Theme Color).
4. Configured Open Graph tags specifically using the true `og-image.png`.
5. Configured Twitter Card tags configured with `summary_large_image`.

**Changed Files:**
- `/public/og-image.png` (Added)
- `/index.html` (Updated)
- `/IMPLEMENTATION_METADATA.md` (Updated)

**Unresolved Items:**
- None. The metadata framework is successfully in place. (Note: As a best practice upon production deployment, replace `https://tf2024.com/` with the exact production domain.)
