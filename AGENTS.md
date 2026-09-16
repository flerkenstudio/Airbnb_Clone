# Playpower Labs Airbnb Clone — Agent Instructions

## Mission
Build an original, desktop-only, pixel-accurate recreation of the supplied Airbnb listing reference page and its two overlay experiences:
1. Listing Page
2. Photo Tour
3. Lightbox

The reference is the visual and behavioral source of truth. Do not copy or lift source code from the reference.

## Non-negotiable requirements
- Match layout, spacing, typography, colors, icons, assets, interactions, animations and transitions as closely as possible.
- Support keyboard navigation, focus management and accessibility.
- Photo Tour opens from "Show all photos" or a hero image.
- Lightbox opens from gallery photos and supports previous/next arrows plus keyboard Left/Right navigation.
- Desktop only; do not spend implementation time on a mobile-specific design.
- Backend is optional. Prefer a focused frontend implementation.
- Include the production-scale architecture diagram requested by the assignment.
- Include AI sub-agent/skill configuration files and the sequence of AI prompts used.
- Do not publish the submission code to a public GitHub repository.

## Engineering principles
- Reconstruct behavior and UI from observation; never copy implementation code.
- Prefer simple, reusable components over premature abstraction.
- Keep listing data and gallery data separate from presentation.
- Use semantic HTML and real buttons/links for interactive controls.
- Keep state transitions predictable and easy to test.
- Avoid adding features that are not useful to the required experience.
- Prioritize visual fidelity over feature count.

## Recommended stack
- Next.js + TypeScript
- Tailwind CSS
- Framer Motion for motion where useful
- Lucide React or another consistent icon source

The stack is flexible; change it only when there is a clear benefit.

## Suggested structure
app/
components/listing/
components/gallery/
components/ui/
components/accessibility/
data/
hooks/
lib/
public/images/
.ai/agents/
.ai/skills/
.ai/prompts/
architecture/
tests/

## Definition of done
A reviewer can:
- Open the listing page and see a close visual match.
- Open Photo Tour from the required entry points.
- Open any gallery photo in the Lightbox.
- Navigate previous/next with buttons and Left/Right keys.
- Close the Lightbox with Escape.
- Use keyboard focus correctly.
- Observe matching/appropriate transitions and hover states.
- Run the project without console errors.
- Inspect the architecture diagram and AI workflow files.
