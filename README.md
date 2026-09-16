# Airbnb Listing Recreation — Playpower Labs Take-Home Assignment

An original, pixel-accurate, desktop-only recreation of the Airbnb listing reference (*"Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"*) featuring the **Listing Page**, **Interactive Photo Tour**, and **Full-Screen Lightbox**.

Built strictly from visual reverse-engineering and behavioral observation. **Zero source code was scraped or lifted from the reference website.**

---

## Deliverables Summary

| Deliverable | Location | Description |
| :--- | :--- | :--- |
| **Frontend Web App** | `apps/web/` | Next.js 15 App Router, TypeScript, Tailwind CSS v4, Lucide React, Framer Motion |
| **Backend API Server** | `apps/api/` | Express.js, TypeScript, Prisma ORM |
| **Live Database** | Supabase | Managed PostgreSQL Database (`airbnb-clone`) with full table schema and seeded data |
| **Architecture Diagram** | `architecture/architecture-diagram.pdf` | Vector PDF illustrating production-scale vacation-rental marketplace architecture |
| **AI Multi-Agent Setup** | `.ai/agents/` | Agent role definitions for UI, Gallery, Accessibility, Visual QA, and Code Review |
| **Chronological Prompt Log** | `PROMPT_SEQUENCE.md` | Detailed log of prompts, agent actions, reasoning, and test milestones |

---

## 1. Quick Start (Full-Stack Monorepo)

### Prerequisites
- Node.js 18.x or higher (Node.js 20+ / 24+ recommended)
- npm 9.x or higher

### Local Development Run
Since the project is structured as a monorepo, you can run the frontend and backend simultaneously or independently.

**To run the Frontend (Next.js):**
```bash
cd apps/web
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**To run the Backend (Express API):**
```bash
cd apps/api
npm install
npm run dev
```
The backend API server will run on [http://localhost:4000](http://localhost:4000).

*(Note: The `apps/api/.env` is configured to connect to our newly created live Supabase database instance).*

---

## 2. Full-Stack Implementation Details

### A. Frontend Experience (`apps/web`)
- **Listing Page:** Pixel-perfect rendering of the hero gallery, property summary, host details, amenities, and sticky booking card.
- **Photo Tour:** Interactive fullscreen modal with a sticky thumbnail navigation bar and smooth auto-scrolling to room categories.
- **Lightbox:** Isolated fullscreen image viewer with Next/Prev controls, counter, and keyboard navigation.
- **Accessibility:** Full WCAG 2.1 AA compliance with focus trapping (`useFocusTrap`), body scroll locking (`useScrollLock`), and ARIA attributes.

### B. Backend & Database Setup (`apps/api` & Supabase)
- **Express API:** Scaffolding complete with health checks and modular routing. 
- **Prisma ORM:** Strict TypeScript database models established in `schema.prisma`.
- **Live Supabase PostgreSQL:** We successfully provisioned a live Supabase database hosted in Mumbai (`ap-south-1`).
- **Data Seeding:** The database is fully initialized with the exact relational schema (`hosts`, `listings`, `highlights`, `amenities`, `images`) and populated with the mock listing data for immediate consumption.

---

## 3. Production-Scale Architecture

The complete system architecture for a high-concurrency vacation-rental marketplace is documented in:
- **PDF Diagram:** `architecture/architecture-diagram.pdf`
- **Visual PNG:** `architecture/architecture-diagram.png`

### Architecture Overview (5 Tiers)
1. **Client Tier:** Next.js 15 App Router, React 19 Server Components, Tailwind CSS v4.
2. **Edge & CDN Tier:** Cloudflare Global Anycast Network (DDoS mitigation, Edge WAF, SSL termination).
3. **Gateway & Microservices Tier:** Envoy / Kong API Gateway, Listing Catalog Service (Go), Pricing & Calendar Engine (Redis locks), Booking & Payments Service.
4. **Data & Storage Tier:** PostgreSQL 16 Multi-AZ (primary/replica), Redis 7 Cluster, OpenSearch, AWS S3.
5. **Observability & CI/CD Tier:** Datadog APM & RUM, Prometheus/Grafana metrics, GitHub Actions CI/CD.

---

## 4. Visual QA & Verification Results

Automated regression tests were executed using Playwright (`1440x900` desktop viewport):

| State | Tested Condition | Console Errors | Result |
| :---: | :--- | :---: | :---: |
| **01** | Initial Listing Page (Hero grid, header, booking card) | 0 | PASSED |
| **02** | Hero Gallery Hover (Brightness filter transition) | 0 | PASSED |
| **03** | Photo Tour Initial (9 category thumbnail pills) | 0 | PASSED |
| **04** | Photo Tour Scrolled (Smooth anchor scroll to Pool) | 0 | PASSED |
| **05** | Lightbox Photo 1 (Counter "1 of 43", 9-dot icon, white bg) | 0 | PASSED |
| **06** | Lightbox Middle (ArrowRight navigation to photo 5) | 0 | PASSED |
| **07** | Lightbox Photo 43 (Counter "43 of 43", disabled next arrow) | 0 | PASSED |
| **08** | Escape Key Dismissal (Modal close, scroll unlock, focus restore) | 0 | PASSED |

Screenshots are saved in `qa_screenshots/` for reviewer inspection.

---

## 5. Compliance & Anti-Plagiarism Statement

- **Strictly Original Implementation:** All React components, Tailwind styling, TypeScript types, custom hooks, and backend APIs were authored from scratch.
- **Zero Scraped Code:** No DOM tree, CSS stylesheet, or JavaScript bundle was copied or extracted from the reference deployment.
- **Desktop Only:** Engineered specifically for desktop display as requested by the assignment.
- **Privacy Notice:** In compliance with assignment rules, this code is not published to any public repository.
