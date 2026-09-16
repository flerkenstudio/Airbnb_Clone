# Reference Specification: Airbnb Listing Clone (Playpower Labs)

**Reference Source of Truth:**
- Reference URL: https://airbnb-clone-umber-two.vercel.app
- Listing Target: **Romantic Jacuzzi 1BHK Candolim | Mirashya UG10**
- Documented Visual Source: Official Playpower Labs Assignment Reference Capture Set (`image1.png`, `image2.png`, `image3.png`)

---

## 1. Overall Page Architecture & Geometry

### Viewport & Content Container
- **Target Desktop Viewport:** 1440px wide x 900px tall (standard desktop baseline).
- **Max Content Width:** 1120px to 1280px (Airbnb standard container is max-w-[1120px] or max-w-[1280px] depending on breakpoint, centered horizontally with `margin: 0 auto`).
- **Page Horizontal Padding:** 40px (`px-10`) on 1120px - 1440px displays, expanding to 80px (`px-20`) on wider viewports (>1440px).
- **Vertical Rhythm & Section Margins:**
  - Header to Title: 24px vertical gap.
  - Title to Hero Gallery: 16px - 20px vertical gap.
  - Hero Gallery to Main Content Split: 32px - 40px vertical gap.
  - Sections separation inside left column: 32px - 48px with `1px solid #EBEBEB` border dividers.
  - Section title to section content: 16px - 24px.

---

## 2. Header Component Specification

### Geometry & Layout
- **Height:** 80px fixed height, sticky or static top with `border-b: 1px solid #EBEBEB`, background `#FFFFFF`.
- **Z-Index:** `z-30` so content scrolls under it cleanly.

### Elements:
1. **Brand Logo (Left):**
   - Airbnb logo icon (Bélo) + wordmark "airbnb" in brand coral-red: `#FF385C`.
   - Height: ~32px.
   - Interactive: Cursor pointer, accessible label `Airbnb homepage`.
2. **Compact Search Bar (Center):**
   - Pill-shaped container: height 48px, rounded-full (`rounded-full`), border `1px solid #DDDDDD`, subtle shadow `0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)`.
   - Hover state: Shadow darkens slightly to `0 2px 4px rgba(0,0,0,0.18)`, smooth 150ms transition.
   - Inner segments:
     - Icon: Small home/door glyph in rounded container.
     - "Anywhere" (font-weight 600, font-size 14px, #222222).
     - Vertical divider: 24px height, `1px solid #DDDDDD`.
     - "Anytime" (font-weight 600, font-size 14px, #222222).
     - Vertical divider: 24px height, `1px solid #DDDDDD`.
     - "Add guests" (font-weight 400, font-size 14px, #717171).
     - Search button: 32px diameter circle, background `#FF385C`, white search/magnifying glass icon (16px), right margin 7px.
3. **User / Host Controls (Right):**
   - "Become a host" link/button (14px font-weight 600, #222222, hover: rounded-full hover:bg-gray-100 px-3.5 py-2.5).
   - Globe / Language icon button (16px icon, rounded-full hover:bg-gray-100 p-2.5).
   - User menu pill button: height 42px, border `1px solid #DDDDDD`, rounded-full, px-3, flex items-center gap-3, hover: shadow-md.
     - Contains: Hamburger menu icon (16px, #222222) + generic circular user profile avatar glyph (30px diameter, #717171 fill).

---

## 3. Listing Header & Metadata

### Typography & Layout
- **Listing Title (`h1`):**
  - Text: `Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`
  - Font: Semi-bold / bold (weight 600 or 700), font-size 26px, line-height 30px, color `#222222`.
- **Top Actions (Right-aligned with title):**
  - Flex row, gap 16px, items-center.
  - **Share Button:**
    - Icon: Arrow pointing out of tray / share icon (16px).
    - Text: "Share" (14px font-weight 600, underline on hover).
  - **Save Button:**
    - Icon: Heart outline icon (16px).
    - Text: "Save" (14px font-weight 600, underline on hover).
    - Interactive: Clicking toggles heart fill to active state (#FF385C).

---

## 4. Hero Gallery Grid

### Dimensions & Proportions
- **Total Height:** 410px - 460px (responsive to container width, approx 16:9 ratio across 5 images or fixed 440px height).
- **Grid Structure:**
  - Left Hero: 1 image taking 50% width (`w-1/2` or `col-span-2` in a 4-column CSS grid), 100% height.
  - Right Grid: 4 images in a 2x2 grid taking 50% width (`w-1/2`), each taking 50% of the remaining width and 50% height.
  - Gap: Exactly 8px between all images.
- **Corner Radii (Reference Image 1):**
  - Overall outer border radius: 12px (`rounded-xl`).
  - Large Hero (left): `rounded-l-xl` (top-left 12px, bottom-left 12px).
  - Top-right image: `rounded-tr-xl` (12px).
  - Bottom-right image: `rounded-br-xl` (12px).
  - Inner corners: 0px (sharp square).
- **Hover Transitions:**
  - Subtle brightness dimming on hover: `hover:brightness-95` or `hover:opacity-90` with 200ms ease transition.
  - Cursor pointer indicating clickability.
- **"Show all photos" Button:**
  - Position: Bottom-right corner of the 5th image (`bottom-4 right-4`).
  - Appearance: White background (`#FFFFFF`), border `1px solid #222222`, rounded-lg (8px), padding 7px 15px.
  - Content: 3x3 grid dots icon (9 dots glyph) + text `Show all photos`.
  - Font: 14px, font-weight 500, color `#222222`.
  - Shadow: `0 1px 2px rgba(0,0,0,0.08)`.
  - Hover: `hover:bg-gray-50` or slight scale/shadow increase.
  - Interaction: Opens **Photo Tour** modal.
  - Clicking any of the 5 hero images also opens the Photo Tour or Lightbox directly.

---

## 5. Main Content Split

Two-column layout below gallery:
- **Left Column:** ~63% width (approx 680px - 720px in 1120px container).
- **Right Column:** ~37% width (approx 380px - 400px), contains the sticky booking card.

### Left Column Sections:
1. **Property Subheading & Capacity:**
   - `h2`: `Entire serviced apartment in Candolim, India` (22px font-weight 600, #222222).
   - Capacity string: `3 guests · 1 bedroom · 1 bed · 1 bathroom` (16px, #222222).
2. **Guest Favourite Card (Image 1):**
   - Bordered card: `1px solid #DDDDDD`, rounded-xl, padding 16px 24px, flex items-center justify-between.
   - Left side: Left & right laurel wreath branch icons enclosing bold text `Guest favourite` (stacked 2 lines).
   - Center text: `One of the most loved homes on Airbnb, according to guests`.
   - Right side metrics:
     - Rating: `4.95` (bold, 18px) with 5 filled stars glyphs below.
     - Divider: Vertical line `1px solid #DDDDDD` height 36px.
     - Reviews: `19` (bold, 18px) with underlined text `Reviews` below.
3. **Host Profile Snippet:**
   - Avatar of host (Mirashya) with superhost badge, host name `Hosted by Mirashya`, `Superhost · 3 years hosting`.
4. **Listing Highlights:**
   - Jacuzzi / Hot Tub highlight with whirlpool icon: `Dive right in - This is one of the few places in the area with a private jacuzzi.`
   - Dedicated workspace highlight with laptop icon.
   - Self check-in highlight with key/door lock icon: `Check yourself in with the lockbox.`
5. **Description Area:**
   - "About this space" heading.
   - Text describing the romantic getaway in Candolim, lush greenery, jacuzzi, modern amenities.
   - "Show more >" expandable trigger.
6. **Where You'll Sleep:**
   - Card representing Bedroom 1: `1 king bed`, bed icon, rounded-xl border `1px solid #DDDDDD`, padding 16px.
7. **Amenities Section:**
   - "What this place offers" heading.
   - 2-column grid of 10 featured amenities with SVG icons:
     - Courtyard view
     - Kitchen
     - Wifi – 50 Mbps
     - Dedicated workspace
     - Free parking on premises
     - Private hot tub / jacuzzi
     - Shared outdoor pool
     - 43" HDTV with Netflix
     - Air conditioning
     - Carbon monoxide alarm
   - "Show all 45 amenities" button (outlined, rounded-lg, 14px font-weight 600, padding 13px 23px).

### Right Column (Sticky Booking Sidebar):
1. **Promo Banner (Image 1 top right):**
   - Bordered card: `1px solid #EBEBEB`, rounded-xl, p-4, flex items-center justify-between, mb-4.
   - Green discount tag icon.
   - Text: `Get 10% off your next stay.` + link `Terms apply` (underlined).
   - Action: `Claim` button (rounded-lg, px-4 py-2, bg-gray-100 hover:bg-gray-200 text-sm font-medium).
2. **Floating Reservation Widget:**
   - Sticky top: `top-28`, border `1px solid #DDDDDD`, rounded-2xl, p-6, shadow-`xl` (`0 6px 16px rgba(0,0,0,0.12)`).
   - Price display:
     - `₹28,499` (bold 22px) `for 5 nights` (or `₹5,700 / night`).
   - Date & Guest Box:
     - 2-part grid: Check-in / Checkout top row, Guests bottom row.
     - Bordered container with inner dividers.
   - Primary Action Button:
     - Text: `Reserve`
     - Color: Gradient brand pink/red: `linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)`.
     - Height: 48px, rounded-lg, text-white, font-semibold 16px.
   - Subtitle: `You won't be charged yet` (text-center, 14px, #717171, mt-2).
   - Pricing breakdown calculation:
     - Nights subtotal (`₹5,700 x 5 nights` = `₹28,500`)
     - Cleaning fee (`₹1,200`)
     - Airbnb service fee (`₹3,980`)
     - Total before taxes with bold sum.

---

## 6. Photo Tour Specification (Experience 2)

**Visual Ground Truth:** Reference Screenshot `image2.png`.

### Entry Points
1. "Show all photos" button on hero gallery.
2. Clicking any photo in the hero grid.

### Overlay Shell
- **Placement:** Fullscreen overlay covering entire viewport (`fixed inset-0 z-50 bg-white`).
- **Scroll Behavior:** Main window background scroll locked (`overflow: hidden` on body). Modal interior scrolls vertically.
- **Top Header:**
  - Sticky / fixed top (`sticky top-0 bg-white z-20 h-16 border-b border-gray-200 flex items-center justify-between px-6`).
  - Left: Back Chevron button (`<`) with rounded-full hover effect. Closes Photo Tour and restores scroll + focus to trigger button.
  - Center: Title `Photo tour` (font-semibold, 16px, #222222).
  - Right: Share button and Save/Heart button.

### Room / Category Navigation Bar (Image 2)
- Horizontal thumbnail navigation:
  - Categories:
    1. `Living room 1`
    2. `Living room 2`
    3. `Full kitchen`
    4. `Bedroom`
    5. `Full bathroom`
    6. `Gym`
    7. `Exterior`
    8. `Pool`
    9. `Additional photos`
  - Each item consists of:
    - Small preview image (approx 90px x 68px, `rounded-xl`, object-cover).
    - Text label directly below (13px, font-medium, color #222222).
  - Clicking any category smoothly scrolls the page down to that section.

### Gallery Stream & Section Layout (Image 2)
- Below thumbnail bar, full width container (~1120px centered):
  - Each category renders as a distinct section:
    - Section Header:
      - Category name `h2` (e.g. `Living room 1`, font-bold, 26px).
      - Sub-details / amenities line (e.g. `Sofa · Air conditioning · Ceiling fan · TV`, text-gray-500, 14px).
    - Image arrangement:
      - Asymmetrical editorial grid matching Airbnb reference:
      - Featured hero image on right (large, `rounded-2xl`, object-cover, height ~460px).
      - Paired images below: 2 photos side by side (each 50% width, height ~320px, `rounded-2xl`).
- **Interaction:**
  - Clicking ANY photo inside the Photo Tour opens **Experience 3 (Lightbox)** at that specific photo index!
  - Hover on images: Cursor pointer, subtle brightness/opacity feedback.

---

## 7. Lightbox Specification (Experience 3)

**Visual Ground Truth:** Reference Screenshot `image3.png`.

### Entry Points
1. Clicking any photo from the Photo Tour.
2. Clicking a hero image directly if configured.

### Geometry & Styling
- **Background:** Clean solid white `#FFFFFF` (as shown in reference screenshot `image3.png`).
- **Container:** Fullscreen `fixed inset-0 z-50 bg-white flex flex-col justify-between`.
- **Background Interaction:** Completely disabled; body scroll strictly locked.

### Top Navigation Bar (Image 3)
- Height: 64px, flex items-center justify-between, px-6.
- **Left:** Grid icon button (9 dots / 3x3 square glyph, 18px).
  - Accessible name: "Show all photos" / "Back to gallery".
  - Action: Returns to the Photo Tour grid view.
- **Center:** Category / Room Title:
  - Text: e.g. `Living room 1` (font-semibold, 15px, #222222).
- **Right:**
  - Counter: `1 of 43` (14px, #222222, font-normal).
  - Close button (`X` glyph): Accessible button, `w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100`.
  - Accessible name: "Close".
  - Action: Closes Lightbox, returns to Photo Tour or Listing page.

### Main Stage (Image 3)
- **Active Image Container:**
  - Centered vertically and horizontally in the viewport.
  - Maximum dimensions: `max-h-[82vh]`, `max-w-[85vw]` or `1050px`.
  - Image styling: `object-contain`, sharp, crisp rendering.
  - Transition: Smooth crossfade / slide transition when changing images (duration ~200ms ease-out).

### Navigation Arrow Controls (Image 3)
- **Previous Button (`<` ChevronLeft):**
  - Position: Left edge, vertically centered (`left-6`).
  - Shape: Circular button, 40px diameter, white background, border `1px solid #B0B0B0`, shadow-md.
  - Icon: ChevronLeft (18px, #222222).
  - Hover: `hover:scale-105 hover:border-black`.
  - Edge behavior: Disabled or hidden on first image (`index === 0`). When disabled, subtle opacity (`opacity-30 cursor-not-allowed`).
- **Next Button (`>` ChevronRight):**
  - Position: Right edge, vertically centered (`right-6`).
  - Shape: Circular button, 40px diameter, white background, border `1px solid #B0B0B0`, shadow-md.
  - Icon: ChevronRight (18px, #222222).
  - Hover: `hover:scale-105 hover:border-black`.
  - Edge behavior: Disabled on last image (`index === total - 1`).

### Keyboard Navigation & Accessibility (Non-negotiable)
- **Left Arrow (`ArrowLeft`):** Navigates to previous image (if index > 0).
- **Right Arrow (`ArrowRight`):** Navigates to next image (if index < total - 1).
- **Escape (`Escape`):** Closes the Lightbox immediately.
- **Focus Management:**
  - Focus moved immediately into the Lightbox upon opening (e.g. Next button or Close button).
  - Tab cycle is trapped within Lightbox controls (Close, Grid, Prev, Next).
  - Focus restored back to the initiating gallery photo upon closing.

---

## 8. Complete State Inventory

| State ID | View / Experience | Description & Key Assertions |
| :--- | :--- | :--- |
| **STATE 01** | Listing Page — Initial | Default view. Header, Title, 5-photo hero gallery, Show all photos button, Host info, Guest favourite card, Amenities, Sticky Booking Card. |
| **STATE 02** | Listing Page — Gallery Hover | Hovering any photo in the hero grid applies subtle 95% brightness and cursor-pointer; Show all photos button hover effect. |
| **STATE 03** | Photo Tour — Initial | Triggered by "Show all photos" or hero photo. Fullscreen modal with top bar, horizontal category thumbnail carousel, and Living room 1 section in view. |
| **STATE 04** | Photo Tour — Scrolled | User scrolls down the Photo Tour; header remains sticky; sections for Kitchen, Bedroom, Bathroom, Pool, etc. scroll into view smoothly. |
| **STATE 05** | Lightbox — First Image (1 of 43) | Opened from clicking a photo. Shows image 1, counter "1 of 43", Left arrow disabled/hidden, Right arrow active, Close button visible. |
| **STATE 06** | Lightbox — Middle Image (e.g. 5 of 43) | Both Left and Right arrows active. Category title reflects current room. Image transitions smoothly on change. |
| **STATE 07** | Lightbox — Last Image (43 of 43) | Right arrow disabled/hidden, Left arrow active, counter "43 of 43". |
| **STATE 08** | Lightbox — Keyboard Navigation | Pressing ArrowRight advances image; ArrowLeft retreats; Tab stays trapped inside controls; focus ring visible on focused control. |
| **STATE 09** | Lightbox — Closing & Restoration | Escape key or X button pressed. Lightbox unmounts cleanly; scroll lock released; focus restored to the photo trigger that opened it. |

---

## 9. Design Tokens & Visual Specifications

### Colors
- **Brand Primary:** `#FF385C` (Airbnb coral red)
- **Brand Gradient (Reserve button):** `linear-gradient(90deg, #E61E4D 0%, #E31C5F 50%, #D70466 100%)`
- **Text Primary:** `#222222`
- **Text Secondary / Muted:** `#717171`
- **Border Light:** `#EBEBEB`
- **Border Medium / Controls:** `#DDDDDD`
- **Border Dark / Active:** `#B0B0B0`
- **Surface / Background:** `#FFFFFF`
- **Surface Light Gray:** `#F7F7F7`
- **Success / Badge Green:** `#008A05`

### Typography (System Font Stack mimicking Airbnb Cereal)
- Font family: `"Airbnb Cereal", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif`
- Title: 26px / 30px, Bold (600 / 700)
- Section Headers: 22px / 26px, Semi-bold (600)
- Body text: 16px / 24px, Regular (400)
- Secondary / Captions: 14px / 18px, Regular (400) or Medium (500)
- Microcopy: 12px / 16px, Regular (400)

### Border Radii
- Buttons / Small pills: `8px` (`rounded-lg`)
- Cards / Highlights / Thumbnails: `12px` (`rounded-xl`)
- Sticky booking card / Large modal cards: `16px` to `24px` (`rounded-2xl`)
- Circular controls / Avatars / Search pill: `9999px` (`rounded-full`)

---

## 10. Verification & Accessibility Matrix

| Requirement | Implementation Strategy | Verification Test |
| :--- | :--- | :--- |
| **Semantic HTML** | Use `<header>`, `<main>`, `<section>`, `<h1>`, `<h2>`, `<button>` | Inspect accessibility tree & landmark roles. |
| **Keyboard Nav** | `onKeyDown` listeners for `ArrowLeft`, `ArrowRight`, `Escape` | Test tab cycling, arrow navigation, escape dismissal. |
| **Focus Trap** | Custom hook `useFocusTrap` locking Tab / Shift+Tab inside Lightbox | Tab through modal; focus cannot leak to background page. |
| **Focus Restoration** | Store `triggerRef` when opening overlay, call `triggerRef.current?.focus()` on close | Close overlay; focus returns to the exact photo button clicked. |
| **Scroll Locking** | Custom hook `useScrollLock` setting `overflow: hidden` with padding compensation | Open overlay; verify background cannot be scrolled with wheel or keyboard. |
| **Accessible Labels** | Every icon button has `aria-label` (e.g. "Close photo tour", "Next photo") | Screen reader / DOM attribute check on all controls. |
| **High Contrast Focus** | Standard Airbnb visible focus outline (`focus-visible:ring-2 focus-visible:ring-black`) | Tab onto buttons; verify crisp, unmistakable focus indicator. |
