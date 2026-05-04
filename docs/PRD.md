# Arena Africa Product Requirements Document (PRD)

## 1) Document Control

- **Product:** Arena Africa
- **Prepared by:** Product/Engineering
- **Version:** 1.0
- **Status:** Draft for execution
- **Intended audience:** Founders, Product, Design, Frontend Engineering, Backend Engineering, Data/Analytics, QA, Growth, Partnerships

---

## 2) Executive Summary

Arena Africa is a mobile-first esports and live-streaming platform focused on Nigeria first, then broader Africa. The current product is a high-conversion launch landing page with an early-access waitlist capture flow backed by Supabase.

This PRD defines the complete target product from **marketing acquisition to core platform operations**, with explicit requirements for both frontend and backend systems. The goal is to ship an MVP that can:

1. Acquire and qualify players/creators.
2. Run tournaments with reliable bracket and result workflows.
3. Support low-data live stream discovery and playback.
4. Enable payouts and compliance-ready transaction records.
5. Provide moderation, anti-cheat, and trust tooling.

---

## 3) Problem Statement

African gamers and creators face fragmented experiences:

- Tournament organization is mostly manual and inconsistent.
- Discovery and monetization are weak for local creators.
- Payments are slow and unstructured.
- Fair-play enforcement is inconsistent.

Arena Africa solves this by combining tournament operations, stream discovery, and payouts in one platform optimized for local constraints (mobile devices, variable bandwidth, local payment rails).

---

## 4) Product Vision & Principles

### Vision

> Build Africa’s most trusted platform where gamers can compete, stream, and earn.

### Product Principles

1. **Mobile-first always** (most usage is mobile).
2. **Low-friction participation** (join in under 60 seconds).
3. **Trust by design** (identity, anti-cheat, dispute resolution).
4. **Fast payout reliability** (clear status, transparent history).
5. **Data-light experiences** (adaptive quality and caching).

---

## 5) Goals, Non-Goals, and Success Metrics

### Goals (MVP)

- Convert landing traffic into waitlist and verified accounts.
- Launch weekly tournaments across core titles (CODM, PUBG Mobile, EA FC, Free Fire).
- Provide stream listing + watch flows with game/category filtering.
- Support prize pool setup and payout execution via local processors.
- Introduce basic moderation + anti-cheat evidence capture.

### Non-Goals (MVP)

- Building a custom live-streaming CDN from scratch.
- Deep social graph features (DMs, clans, advanced feed ranking).
- Multi-country legal/tax automation at launch (start with Nigeria-first policies).

### North Star Metric

- **Monthly Earning Participants (MEP):** Unique users who either win prize money or receive creator payouts in a month.

### Supporting KPIs

- Waitlist conversion rate
- KYC completion rate
- Tournament completion rate
- Match dispute rate
- Stream watch minutes per active user
- Payout success rate and payout settlement time
- 30-day retention for players and creators

---

## 6) Target Users & Personas

1. **Competitive Player (16–30):** Wants quick tournament entry, fair results, and prompt payouts.
2. **Mobile Streamer/Creator:** Wants easy go-live tools and audience discovery.
3. **Tournament Admin/Referee:** Needs bracket controls, match verification, and dispute tooling.
4. **Sponsor/Partner (future-facing):** Needs inventory, audience insights, and campaign reporting.

---

## 7) Current State (As-Is)

The existing app already provides:

- A polished Next.js landing page with hero, feature blocks, streams section, and waitlist CTA.
- Waitlist form fields: name, email, gamer tag (optional), and primary game.
- Client-side submit flow with success/error status handling.
- Backend API route validating payload with Zod and upserting into Supabase `waitlist` table keyed by email.

This PRD extends that foundation into a full platform roadmap.

---

## 8) Scope Overview

### In Scope (MVP + Phase 2)

- Public marketing web app
- Authenticated user app (player/creator)
- Tournament operations module
- Stream directory + watch experience
- Wallet/payout operations
- Admin/moderation console
- Analytics and observability baseline

### Out of Scope (for now)

- Native iOS/Android apps (web/PWA first)
- AI content recommendations at scale
- Real-money betting/gambling mechanics

---

## 9) Functional Requirements

## 9.1 Frontend Requirements

### FE-01: Marketing & Acquisition Site

- Responsive, mobile-first, high-performance landing pages.
- Sections: value prop, featured tournaments, live streams teaser, partner logos, waitlist.
- CTA persistence (sticky mobile CTA).
- SEO metadata (Open Graph/Twitter cards), sitemap, robots.
- Localization-ready content structure (English now, expandable later).

**Acceptance criteria:**

- Largest Contentful Paint <= 2.5s on 4G-equivalent profiles.
- CTA visible without friction on mobile and desktop.
- Form submission errors are user-readable.

### FE-02: Authentication & Onboarding

- Sign-up/sign-in via email OTP and OAuth options (Google/Apple where available).
- Progressive onboarding:
  - Gamer profile: handle, game preferences, region.
  - Creator profile (optional): stream links, payout setup.
- KYC status display and gating for withdrawals.

**Acceptance criteria:**

- New account creation <= 90 seconds median.
- Onboarding state persists across sessions.

### FE-03: Player Dashboard

- Upcoming tournaments, joined tournaments, match times, alerts.
- Match result submission flow.
- Prize and payout status card.

### FE-04: Tournament Browsing & Registration

- Filter by game, prize pool, skill level, region, format.
- Tournament detail page with rules, brackets, schedule, fees/prizes.
- Join/leave workflows with eligibility checks.

### FE-05: Bracket & Matchroom UI

- Bracket visualization (single elim/double elim support roadmap).
- Matchroom includes:
  - Opponent details
  - Match timer
  - Result submission by both parties
  - Evidence upload (screenshots/video link)
- Dispute initiation flow.

### FE-06: Stream Discovery + Watch

- Live stream cards with game, viewers, title, tags.
- Filters for game and region.
- Watch page with playback embed/player surface.
- Adaptive quality indicators for low bandwidth.

### FE-07: Wallet & Payout UX

- Wallet ledger (credits/debits).
- Pending/processing/completed payout states.
- Withdraw flow with account selection and confirmations.
- Error states and support escalation.

### FE-08: Notifications

- In-app notifications for registration, match start, result status, payout status.
- Email notifications for major lifecycle events.

### FE-09: Admin/Referee Console (Web)

- Tournament CRUD
- Participant management
- Match override tools
- Dispute queue
- Payout approval queue
- Abuse/moderation reporting

---

## 9.2 Backend Requirements

### BE-01: API Architecture

- Use Next.js route handlers (or a dedicated service split when scale requires).
- Versioned API surface (`/api/v1/...`).
- Strict schema validation (Zod) on all writable endpoints.
- Idempotency keys for payout and sensitive mutation endpoints.

### BE-02: Data Model (Core Entities)

Minimum entities:

- `users`
- `profiles` (player/creator metadata)
- `waitlist`
- `games`
- `tournaments`
- `tournament_rules`
- `registrations`
- `matches`
- `match_results`
- `disputes`
- `streams`
- `wallets`
- `wallet_ledger`
- `payout_requests`
- `payout_transactions`
- `notifications`
- `audit_logs`

Requirements:

- Soft delete where operationally useful.
- Timestamps (`created_at`, `updated_at`) across mutable tables.
- Foreign key integrity and indexed lookup paths.

### BE-03: AuthN/AuthZ

- Supabase Auth (initially) with JWT-based session handling.
- Role-based permissions: `player`, `creator`, `referee`, `admin`, `finance_admin`.
- Row-level security policies for user-owned data.

### BE-04: Tournament Engine Services

- Tournament creation with configurable format.
- Automatic bracket seeding.
- Match generation and state transitions.
- Deadline and no-show auto-resolution rules.
- Result consensus logic (both players submit) with escalation.

### BE-05: Dispute & Moderation Services

- Dispute creation with evidence links.
- SLA queueing and assignment to referees.
- Final verdict and immutable audit log.
- Abuse report endpoints and blocklists.

### BE-06: Streaming Integrations

- Persist stream metadata and online status.
- Ingest stream status updates from provider webhooks.
- Track viewer count snapshots for analytics.

### BE-07: Wallet & Payout Services

- Ledger-based accounting model (append-only transaction rows).
- Prize issuance pipeline from tournament results.
- Payout request lifecycle:
  - Requested -> KYC check -> Approval -> Processor dispatch -> Settled/Failed
- Integration with Paystack/Flutterwave adapters.
- Retry and reconciliation jobs.

### BE-08: Notification Services

- Event-driven notification dispatcher.
- Channels: in-app + email first, SMS/push later.
- Template system with localization-ready keys.

### BE-09: Admin APIs

- Protected endpoints for tournament ops, disputes, payout approval, and moderation.
- Full audit trails for administrative actions.

### BE-10: Analytics & Event Pipeline

- Structured event logging for product analytics.
- Track funnel events: page view, signup, join tournament, submit result, watch stream, payout request.
- Basic data mart tables/views for dashboards.

---

## 10) Non-Functional Requirements

### Performance

- P95 API read latency <= 400ms for core user reads.
- P95 API write latency <= 700ms for standard writes.
- Support 10k MAU baseline with burst traffic during tournament finals.

### Reliability

- 99.9% monthly uptime target for user-facing APIs.
- Graceful degradation for third-party outages (payment/streaming).

### Security

- OWASP-aligned secure coding standards.
- Rate limiting and abuse prevention on public endpoints.
- Secrets from environment vaults only; no hardcoded credentials.
- Encryption in transit and at rest.

### Privacy/Compliance

- GDPR-like data handling principles and clear data retention policy.
- Consent capture for marketing communications.
- Regional legal review for contest rules and payouts.

### Accessibility

- WCAG 2.1 AA baseline for key user journeys.
- Keyboard navigation and visible focus states.

### Observability

- Centralized logs, metrics, traces.
- Alerting for API error spikes, payout failures, and queue backlogs.

---

## 11) API Contract (Illustrative MVP Endpoints)

- `POST /api/v1/waitlist`
- `POST /api/v1/auth/signup`
- `POST /api/v1/auth/login`
- `GET /api/v1/tournaments`
- `POST /api/v1/tournaments/:id/register`
- `GET /api/v1/matches/:id`
- `POST /api/v1/matches/:id/result`
- `POST /api/v1/disputes`
- `GET /api/v1/streams/live`
- `POST /api/v1/payouts/request`
- `GET /api/v1/wallet`
- `GET /api/v1/notifications`
- `POST /api/v1/admin/tournaments`

All mutation endpoints must enforce schema validation and auth checks.

---

## 12) Data & Storage Requirements

- Primary relational DB: Supabase Postgres.
- Object storage: evidence files and optional media artifacts.
- Data retention defaults:
  - Audit logs: 24 months minimum.
  - Match evidence: configurable (default 6 months).
  - Transaction data: per financial compliance requirements.

---

## 13) User Journeys (Critical Paths)

1. **Acquisition -> Waitlist -> Account activation**
2. **Discover tournament -> Register -> Play -> Submit result -> Get payout**
3. **Discover stream -> Watch -> Follow creator -> Participate in next event**
4. **Match dispute -> Referee review -> Final resolution**
5. **Payout request -> Processor settlement -> Receipt confirmation**

Each path must have analytics instrumentation and fallback error UX.

---

## 14) Release Plan

### Phase 0 (Current)

- Landing page + waitlist capture.

### Phase 1 (MVP)

- Auth + onboarding
- Tournament listing/registration
- Basic brackets and result submission
- Admin operations for tournaments and disputes
- Wallet ledger + manual payout operations

### Phase 2

- Stream provider integration and robust watch surfaces
- Automated payout reconciliation
- Advanced moderation and anti-cheat tooling
- Sponsor activation modules

### Phase 3

- Multi-region expansion
- Mobile app shells
- Advanced creator monetization

---

## 15) Risks & Mitigations

1. **Payment failures / settlement delays**  
   Mitigation: retries, reconciliation jobs, transparent user status.

2. **Cheating and match fraud**  
   Mitigation: evidence requirements, referee workflows, account penalties.

3. **Infrastructure cost from media operations**  
   Mitigation: third-party stream platforms first, optimize later.

4. **Regulatory complexity**  
   Mitigation: country-by-country launch playbooks, legal reviews before expansion.

5. **Cold-start creator supply**  
   Mitigation: seed creator program and sponsored tournaments.

---

## 16) Open Questions

1. What KYC provider will be used for payout gating?
2. Are tournament entry fees in MVP in scope or delayed?
3. Which streaming providers are first-class integrations?
4. What is the first anti-cheat stack beyond evidence uploads?
5. What SLAs are promised publicly for dispute resolution and payouts?

---

## 17) Definition of Done (MVP)

MVP is complete when all of the following are true:

- Users can register/login, onboard, and join at least one tournament format.
- Matches can be completed with result submission and admin adjudication.
- Prize amounts post to wallet ledger and payout requests can settle successfully.
- Stream listings are visible with at least one provider integration.
- Admin console supports tournament operations, disputes, and payout approvals.
- Core analytics dashboards show full funnel conversion and operational health.

---

## 18) Appendix: Current Implementation Mapping

- Frontend stack: Next.js App Router + React + Tailwind + Framer Motion.
- Backend currently includes API route for waitlist submission with Zod validation and Supabase upsert.
- Existing data points in waitlist flow: `name`, `email`, `handle`, `game`, timestamp, user-agent metadata.

This mapping is the baseline from which the phased roadmap above should be executed.
