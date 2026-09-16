# Production-Scale Vacation Rental System Architecture

## Architecture Diagram (Mermaid)

```mermaid
graph TB
    subgraph Tier1["Tier 1: Desktop Web Client (Next.js 15 App Router)"]
        Page["Listing Page (SSR/Hydration)"]
        Gallery["Hero Gallery (5-Photo Responsive Grid)"]
        PhotoTour["Interactive Photo Tour (Category Anchors)"]
        Lightbox["Full-Screen Lightbox (Keyboard & A11y Trap)"]
        BookingWidget["Booking & Pricing Sticky Sidebar"]
    end

    subgraph Tier2["Tier 2: Global Edge & CDN (Cloudflare)"]
        EdgeDNS["Anycast Edge DNS & Geo-Routing"]
        WAF["Edge WAF, Bot Shield & TLS 1.3"]
        CDN["Image CDN & Edge Cache (AVIF/WebP)"]
    end

    subgraph Tier3["Tier 3: Gateway & Microservices"]
        APIGateway["Envoy / Kong API Gateway"]
        ListingService["Listing Catalog Service (Go / Node)"]
        PricingService["Pricing & Calendar Engine"]
        BookingService["Booking & Checkout Service"]
        MediaService["Image & Asset Optimization Pipeline"]
    end

    subgraph Tier4["Tier 4: Distributed Data & Storage Layer"]
        Postgres[("PostgreSQL 16 Multi-AZ (Listings & Bookings)")]
        Redis[("Redis 7 Cluster (Session & Hold Locks)")]
        Elastic[("OpenSearch / Elasticsearch (Geo & Amenities)")]
        S3[("AWS S3 / Cloudflare R2 (Original Media Assets)")]
    end

    subgraph Tier5["Tier 5: Observability & CI/CD"]
        Datadog["Datadog APM & Core Web Vitals RUM"]
        Prometheus["Prometheus & Grafana Cluster Metrics"]
        CI["GitHub Actions & Playwright Regression QA"]
    end

    %% Client to Edge
    Page --> EdgeDNS
    Gallery --> CDN
    PhotoTour --> CDN
    Lightbox --> CDN

    %% Edge to Gateway
    EdgeDNS --> WAF
    WAF --> APIGateway

    %% Gateway to Microservices
    APIGateway --> ListingService
    APIGateway --> PricingService
    APIGateway --> BookingService
    CDN --> MediaService

    %% Microservices to Data Stores
    ListingService --> Postgres
    ListingService --> Elastic
    PricingService --> Redis
    BookingService --> Postgres
    BookingService --> Redis
    MediaService --> S3

    %% Observability Connections
    Page -.-> Datadog
    APIGateway -.-> Datadog
    ListingService -.-> Prometheus
    BookingService -.-> Prometheus
    CI -.-> Page
```

## Architectural Highlights

### 1. High Availability & Concurrency
- **Zero-Downtime Blue/Green Deployments:** Managed via Kubernetes (EKS) and GitHub Actions.
- **Edge Anycast Routing:** Cloudflare Anycast routes global users to the nearest Point of Presence (PoP) with sub-10ms DNS resolution.
- **Microservices Isolation:** Failure in booking or third-party payment processing does not degrade listing catalog or media viewing.

### 2. High-Resolution Media Delivery
- **Responsive Image Negotiation:** Edge CDN dynamically negotiates AVIF and WebP based on client Accept headers.
- **Progressive Blur Placeholders:** Next.js `<Image />` component renders inline SVG blur data URLs for instant perceptual paint (LCP < 1.2s).
- **Immutable CDN Caching:** Processed image variants are cached with `Cache-Control: public, max-age=31536000, immutable`.

### 3. Real-Time Reservation Locks
- **Redis Redlock Pattern:** Dynamic night availability locks hold selected reservation dates for 15 minutes during checkout to eliminate double-booking race conditions.
- **Idempotency Keys:** Payment requests carry unique UUIDv4 idempotency keys preventing duplicate debits during network retries.

### 4. Accessibility & Core Web Vitals SLA
- **Largest Contentful Paint (LCP):** < 1.2s (Priority hero image loading).
- **Cumulative Layout Shift (CLS):** 0.000 (Explicit image aspect ratios and fixed container heights).
- **Interaction to Next Paint (INP):** < 50ms (Optimized React 19 synthetic event handling and zero heavy script blocking).
- **WCAG 2.1 AA Compliance:** Full keyboard trap in modals, ARIA dialog roles, live announcer counters, and focus restoration upon Escape.
