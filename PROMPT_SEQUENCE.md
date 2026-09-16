# AI Prompt Sequence & Multi-Agent Orchestration Log

This document records the exact prompt sequence, sub-agent roles, reasoning, and validation milestones executed during the reverse-engineering and construction of the Airbnb Listing, Photo Tour, and Lightbox take-home assignment for Playpower Labs.

---

## Orchestration Overview

The engineering workflow was divided into **8 structured phases**, each driven by specialized sub-agent roles:
1. **Lead Architect & Reverse-Engineering Specialist:** Reference visual analysis, layout coordinate extraction, ground truth specification.
2. **Scaffolding Engineer:** Next.js 15 App Router initialization, Tailwind CSS v4 configuration, directory structure layout.
3. **Frontend UI Engineer:** Listing page reconstruction (Navbar, Hero 5-photo grid, Guest Favourite card, Host Info, Amenities, Sticky Booking Widget).
4. **Gallery Engineer:** Interactive Photo Tour (Fullscreen modal, 9 category thumbnails, sticky sub-header, 2-column stream).
5. **Viewer Specialist:** Lightbox implementation (White `#FFFFFF` backdrop, 9-dot grid button, room title, "X of 43" counter, circular arrows, caption).
6. **Accessibility Engineer:** WCAG 2.1 AA focus trap, body scroll lock, Escape dismissal, Left/Right arrow key listeners, aria-labels.
7. **Visual QA Specialist:** Automated Playwright test suite capturing 9 distinct application states, measuring pixel alignment against reference images.
8. **Release & Review Engineer:** Production architecture diagram generation (PDF + Mermaid), zero-console-error verification, and submission packaging.

---

## Chronological Prompt Sequence

### Prompt 01: Reference Visual Analysis & Ground Truth Extraction
- **Agent Role:** Lead Architect & Reverse-Engineering Specialist
- **Agent Skill:** `pixel-perfect-ui`, `reference-analysis`
- **User Intent:** Inspect the supplied Playpower Labs assignment document and reference URL `https://airbnb-clone-umber-two.vercel.app` to extract exact layout dimensions, typography, colors, and behaviors without copying source code.
- **Action Taken:**
  - Evaluated target URL. Encountered Kasada BotID anti-scraping protection on the reference URL (which blocks automated scraping bots).
  - Recognized that the official assignment document (`Playpower Labs Frontend Take-Home.pdf`) contains the authoritative visual ground truth screenshots (`image1.png` - Listing, `image2.png` - Photo Tour, `image3.png` - Lightbox).
  - Used Python / Pillow to measure exact pixel coordinates:
    - Navbar: Sticky top, 80px height, 1px border `#EBEBEB`, centered 1120px–1280px container.
    - Hero Gallery: 5 photos in 4-column 2-row CSS grid, `h-[469px]`, 8px gaps, 12px outer corner radius, "Show all photos" pill button bottom-right.
    - Photo Tour: 9 categories, 43 photos total, 2-column layout with category info on left, featured + paired photos on right.
    - Lightbox: White `#FFFFFF` backdrop, 9-dot grid icon, centered category name, counter "X of 43", close "X", circular nav buttons at `x=1400`.
- **Output Artifact:** `REFERENCE_SPEC.md` and `implementation_plan.md`.

---

### Prompt 02: Project Scaffolding & Design System
- **Agent Role:** Scaffolding Engineer
- **Agent Skill:** `scaffolding`, `tailwind-v4`
- **User Intent:** Initialize a clean Next.js 15 application with TypeScript, Tailwind CSS v4, Lucide React icons, and Framer Motion.
- **Action Taken:**
  - Created `apps/web` with Next.js 15 App Router (`app/layout.tsx`, `app/page.tsx`, `app/globals.css`).
  - Configured `@tailwindcss/postcss` and Tailwind v4 CSS theme variables (`--font-sans`, Airbnb coral `#FF385C`, text `#222222`, borders `#DDDDDD` / `#EBEBEB`).
  - Extracted 43 high-resolution property photos across 9 categories (`Living room 1`, `Living room 2`, `Full kitchen`, `Bedroom`, `Full bathroom`, `Gym`, `Exterior`, `Pool`, `Additional photos`).
  - Built centralized mock data models in `data/listingData.ts` and `data/galleryData.ts`.
- **Verification:** Clean `npm run build` with 0 type errors.

---

### Prompt 03: Listing Page Implementation
- **Agent Role:** Frontend UI Engineer
- **Agent Skill:** `pixel-perfect-ui`, `component-design`
- **User Intent:** Implement the listing page components matching `image1.png`.
- **Action Taken:**
  - `Header.tsx`: Airbnb Bélo logo SVG, center pill search bar ("Anywhere | Anytime | Add guests"), right user menu pill.
  - `ListingHeader.tsx`: Property title H1 ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"), interactive Share (clipboard toast) and Save (heart toggle) buttons.
  - `HeroGallery.tsx`: 5-photo grid with hover brightness transitions, keyboard accessible photo triggers, and "Show all photos" floating button.
  - `PropertySummary.tsx`: Property type and capacity subtitles.
  - `GuestFavouriteCard.tsx`: Laurel wreath SVGs, rating 4.95, 19 reviews link.
  - `HostInfo.tsx`: Host Mirashya profile badge, local SVG avatar.
  - `ListingHighlights.tsx`: Dedicated workspace, self check-in, jacuzzi highlights.
  - `DescriptionSection.tsx`: Formatted property description with "Show more" toggle.
  - `SleepingArrangement.tsx`: Bedroom layout cards with bed icon.
  - `AmenitiesSection.tsx`: 10 key amenities (Hot water, Wifi, Free parking, Private pool, Jacuzzi, Kitchen, AC, etc.).
  - `BookingCard.tsx`: Sticky booking sidebar with ₹28,500 calculation, date picker inputs, guest selector, price breakdown table.
  - `PromoBanner.tsx`: 10% coupon claim banner above booking card.

---

### Prompt 04: Interactive Photo Tour Implementation
- **Agent Role:** Gallery Engineer
- **Agent Skill:** `gallery-system`
- **User Intent:** Implement the full-screen Photo Tour overlay matching `image2.png`.
- **Action Taken:**
  - `CategoryTabs.tsx`: Horizontal thumbnail bar featuring all 9 room categories with thumbnail images, category names, and smooth-scroll triggers.
  - `PhotoTour.tsx`: Full-screen modal (`fixed inset-0 z-50 bg-white overflow-y-auto`).
  - Top navigation bar: Back chevron, "Photo tour" heading, Share, and Save buttons.
  - 2-Column Section Layout: Left column presents category title and subtitle/amenities list; right column displays featured large photo and paired sub-photos.
  - Click-through: Clicking any photo opens the Lightbox focused on that exact image.

---

### Prompt 05: Full-Screen Lightbox Implementation
- **Agent Role:** Viewer Specialist
- **Agent Skill:** `gallery-system`
- **User Intent:** Implement the single-photo Lightbox viewer matching `image3.png`.
- **Action Taken:**
  - White `#FFFFFF` backdrop (matching ground truth reference screenshot `image3.png`).
  - Header: 9-dot grid icon (left), dynamic room category title (center), photo counter "X of 43" (right), and close "X" button.
  - Center viewport: High-resolution image (`object-contain`) with subtle scale/opacity transitions.
  - Bottom caption: Room description and feature details.
  - Navigation controls: Floating circular Left and Right arrow buttons with hover states, disabled styling at boundaries (`id=1` or `id=43`).

---

### Prompt 06: Accessibility, Keyboard Navigation & State Management
- **Agent Role:** Accessibility Engineer
- **Agent Skill:** `accessibility`, `wcag-compliance`
- **User Intent:** Ensure comprehensive keyboard accessibility, focus trapping, and body scroll locking.
- **Action Taken:**
  - `useScrollLock.ts`: Freezes `document.body` scroll when Photo Tour or Lightbox is open, preserving scroll position upon close.
  - `useFocusTrap.ts`: Traps Tab / Shift+Tab cycling within active modal; restores focus to trigger element upon closing.
  - Keyboard Listeners:
    - `Escape`: Closes Lightbox; second `Escape` closes Photo Tour.
    - `ArrowLeft` / `ArrowRight`: Steps backward and forward through the 43 photos in Lightbox.
  - ARIA attributes: `role="dialog"`, `aria-modal="true"`, `aria-label`, `aria-live="polite"` for photo counter updates.

---

### Prompt 07: Visual QA & Automated Regression Testing
- **Agent Role:** Visual QA Specialist
- **Agent Skill:** `visual-testing`, `playwright-qa`
- **User Intent:** Verify visual parity across all states and capture high-resolution screenshots.
- **Action Taken:**
  - Authored automated Playwright test script (`run_visual_qa.js`) simulating user journeys across 1440x900 viewport.
  - Captured 8 distinct state screenshots in `qa_screenshots/`:
    1. `state_01_listing_page.png` — Hero grid, navbar, booking widget, guest favourite card.
    2. `state_02_gallery_hover.png` — Interactive hover states on hero images.
    3. `state_03_photo_tour_initial.png` — Photo tour initial view with 9 category pills.
    4. `state_04_photo_tour_scrolled.png` — Category tab click and smooth scroll to Pool.
    5. `state_05_lightbox_first.png` — Lightbox open at photo 1 of 43.
    6. `state_06_lightbox_middle.png` — Lightbox middle photo navigation.
    7. `state_07_lightbox_last.png` — Lightbox at photo 43 of 43 (disabled next arrow).
    8. `state_09_restored_listing.png` — Modal close and restored listing page.
  - Console error monitoring: Verified **0 console errors** and **0 network failures**.

---

### Prompt 08: Production Architecture & Final Submission Package
- **Agent Role:** Release & Review Engineer
- **Agent Skill:** `architecture-design`, `devops`
- **User Intent:** Produce production-scale architecture diagram (PDF + Mermaid) and finalize project documentation.
- **Action Taken:**
  - Generated native vector PDF `architecture/architecture-diagram.pdf` and companion PNG `architecture/architecture-diagram.png`.
  - Authored Mermaid architecture diagram in `architecture/architecture-diagram.md`.
  - Configured multi-agent definition files in `.ai/agents/` and skills in `.ai/skills/`.
  - Enriched `README.md` with complete technical specifications, design tokens, and quickstart commands.
