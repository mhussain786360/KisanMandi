# 🌾 Project Report: KisanMandi (سندھ کسان منڈی)
### Sindh Mandi Wholesale Benchmarks, Price Forecasting & Direct Produce Marketplace

**Project Name:** KisanMandi  
**Target Region:** Sindh, Pakistan (Hyderabad, Sukkur, Mirpurkhas, Karachi, and rural districts)  
**Author / Team Member:** Muhammad Mubasher Hussain  
**Date:** October 2026  
**Repository:** `lahootix/submission/team-lahootix/KisanMandi`  
**Test Coverage:** 14 Test Suites, 98/98 Unit & Integration Tests Passing (100%)  
**Production Build:** Clean (`tsc && vite build` passing with zero errors)  

---

## 1. Executive Summary & Vision

Smallholder agricultural producers in Sindh, Pakistan operate under intense market vulnerabilities. Facing fragmented local markets, lack of transparent wholesale price intelligence, and heavy reliance on intermediaries (arhtis/middlemen), farmers often realize prices significantly below fair market value.

**KisanMandi** is a mobile-first progressive web application engineered to level the playing field. It provides smallholder farmers and agricultural buyers with:
1. **Transparent Wholesale Mandi Benchmarks:** Live commodity rates across major regional hubs (Hyderabad, Sukkur, Mirpurkhas).
2. **14-Day Price History Analytics:** Trend visualization and cross-market price discovery highlighting the optimal market to sell produce each day.
3. **Automated Price Threshold Alerts:** Configurable real-time notifications alerting farmers when target prices are reached.
4. **Interactive Agricultural Profit Calculator:** What-if price fluctuation simulations (±20%) and scenario forecasting (Bear, Base, Bull) with zero divide-by-zero or NaN risks.
5. **Direct Produce Marketplace:** P2P farmer-to-buyer transactions featuring market benchmark classification (*Below, At, or Above market*) and instant 1-tap WhatsApp and Phone calling integrations.
6. **Cultural & Regional Inclusivity:** Native Sindhi Ajrak design elements, cultural motif toggles, Dark/Light modes, and full bilingual English and Urdu (Nastaliq script) with automatic Right-to-Left (RTL) layout switching.

---

## 2. Problem Statement & Objectives

### The Problem
- **Information Asymmetry:** Farmers in rural Sindh lack real-time price awareness across competing mandis, leading them to sell produce locally at depressed rates.
- **Intermediary Dependency:** Layers of commission agents take substantial margins, while farmers bear production and transportation risks.
- **Lack of Decision-Support Tools:** Farmers lack accessible calculation tools to evaluate whether holding produce or transporting it to another mandi covers logistics costs.
- **Language & Cultural Barriers:** Most agricultural digital tools ignore local regional languages (Urdu, Sindhi) and fail to reflect cultural familiarity, hindering adoption.

### Project Objectives
- Build an ultra-responsive, mobile-first web application functioning smoothly even on low-end smartphones.
- Implement role-based workflows customized separately for **Farmers** and **Buyers**.
- Ensure reliable price data trends using standard measurement units (**PKR per maund / 40 kg**).
- Provide automated market classification to protect buyers and sellers from unrealistic pricing.
- Deliver an intuitive bilingual interface (English / Urdu Nastaliq) with cultural pride.

---

## 3. Methodology & Technical Approach

### 3.1 Architectural Principles
The project was designed adhering to modern software engineering best practices:
- **Mobile-First Responsive Layout:** Designed primarily for 375px–414px mobile viewport constraints (large ≥44px touch targets, mobile bottom navigation, zero horizontal scrolling) while seamlessly scaling up to tablets and desktops.
- **Pure RESTful Data Decoupling:** Complete separation of concerns between client and server. The client communicates exclusively via HTTP with the REST API. **Zero hard-coded domain mock data exists in the frontend codebase.**
- **Stateless Client Session Management:** `localStorage` is restricted strictly to holding the active user identifier (`currentUserId`), selected language, theme, and cultural motif preferences. No business domain entities or stale prices are cached in web storage.
- **Defensive Engineering:** Strict numerical validation, division-by-zero guards, date timezone immutability via ISO date strings, and triple-layer authorization safeguarding produce listings and alerts.

### 3.2 Technology Stack Justification

| Technology | Role | Justification & Problem-Solving Rationale |
|---|---|---|
| **React 18** | Frontend Framework | Component-based modularity enables rapid composition of complex interactive workflows (calculators, charts, alert boards). React 18's concurrent features ensure buttery smooth 60fps UI transitions. |
| **TypeScript 5.6** | Programming Language | Enforces strict compile-time type safety across all 6 relational domain entities (`User`, `Crop`, `Market`, `Price`, `Listing`, `Alert`). Completely eliminates runtime type mismatches and undefined property errors. |
| **Vite 6** | Build Tool & Dev Server | Ultra-fast Hot Module Replacement (HMR) and optimized Rollup tree-shaking produce a minimal, highly performant production bundle suitable for rural mobile connections. |
| **Tailwind CSS 3.4** | Utility-First Styling | Guarantees atomic styling without stylesheet bloat. Configured with a dedicated agricultural color palette (`forest`, `mint`, `neon`), cultural color variables (`--ajrak-crimson`, `--ajrak-indigo`), and native Nastaliq font stacks. |
| **TanStack React Query v5** | Server-State Management | Provides declarative caching, automatic background re-validation on window focus, optimistic UI updates on mutations, and seamless integration with touch pull-to-refresh gestures. |
| **Recharts 2.15** | Data Visualization | SVG-based responsive charting library tailored for rendering 14-day chronological price fluctuations with interactive hover cards, min/max bounds, and zero canvas-scaling artifacts on retina screens. |
| **React Hook Form + Zod** | Form State & Validation | Declarative schema validation eliminating unnecessary re-renders. Automatically validates Pakistani mobile numbers, future dates, and positive quantities while enforcing double-submit prevention. |
| **json-server 0.17** | Mock REST Backend | Serves 6 relational collections with standard REST conventions (GET, POST, PATCH, DELETE) and query filters (`_sort`, `_order`), mimicking a production microservice architecture. |
| **mulberry32 PRNG** | Deterministic Data Seeding | Seeded pseudo-random number generator ensuring that every seed execution generates 14 consecutive days of realistic price fluctuations ending on the current date, guaranteeing zero test drift. |
| **Vitest 2.1** | Testing Framework | Native Vite-powered test runner executing 98 automated assertions in under 2 seconds directly using the project's TypeScript configuration. |

---

## 4. Functionality & Milestones

The project was executed through a rigorous 6-milestone development lifecycle, meeting 100% of the functional and technical requirements specified in the project charter:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MILESTONE EXECUTION MAP                         │
├──────────────┬───────────────────────────────┬─────────────────────────┤
│ Milestone    │ Functional Scope              │ Verification Status     │
├──────────────┼───────────────────────────────┼─────────────────────────┤
│ Milestone 1  │ User Roles & Price Discovery  │ Fully Met (6/6 Tests)   │
│ Milestone 2  │ Trends & Market Comparison    │ Fully Met (18/18 Tests) │
│ Milestone 3  │ Real-Time Price Alerts        │ Fully Met (18/18 Tests) │
│ Milestone 4  │ Produce Listings & Market     │ Fully Met (21/21 Tests) │
│ Milestone 5  │ Agricultural Profit Forecaster│ Fully Met (11/11 Tests) │
│ Milestone 6  │ Architectural QA & Polish     │ Fully Met (24/24 Tests) │
└──────────────┴───────────────────────────────┴─────────────────────────┘
```

### Milestone 1: User Roles & Price Discovery (SPEC §5)
- **Onboarding Experience:** Implemented in `src/pages/Onboarding.tsx`. Captures user profile (Name 2–60 chars, validated Pakistani mobile, Sindh district selector, and Farmer/Buyer role).
- **1-Click Demo Profiles:** Provides instant profile switching across 6 pre-seeded personas (4 farmers across Hyderabad, Sukkur, Mirpurkhas, Badin; 2 buyers in Karachi and Hyderabad).
- **Role-Based Navigation:**
  - *Farmers* receive 5 navigation destinations: Prices, Marketplace, Alerts (with live counter badge), My Listings, and Profit Calculator.
  - *Buyers* receive a streamlined 2-tab interface: Prices and Marketplace.
  - *Route Guards:* Unauthorized attempts by buyers to access farmer paths (`/alerts`, `/calculator`, `/my-listings`, `/listings/new`) immediately redirect to `/prices`.
- **Live Wholesale Price Hub:** Implemented in `src/pages/Prices.tsx`.
  - Mandi switcher dynamically loads rates for Hyderabad, Sukkur, or Mirpurkhas.
  - Synchronizes selection with URL query parameter (`?market=ID`).
  - Search bar with 250ms debounce coupled with category filter chips (*All, Grains, Cash Crops, Vegetables, Fruits*).
  - Day-over-day price delta indicators showing green $\blacktriangle$, red $\blacktriangledown$, or neutral "–".
  - Custom mobile touch Pull-to-Refresh gesture and desktop manual refresh with "Updated hh:mm" timestamp.

### Milestone 2: 14-Day Trends & Mandi Comparison (SPEC §6)
- **Historical Trend Line Chart:** Implemented in `src/pages/CropDetail.tsx`.
  - Recharts line graph plotting 14 consecutive daily data points.
  - Customized date axis (`dd MMM`), currency-formatted Y-axis, and informative hover tooltip.
- **Statistical Analytics Cards:** Uses `src/lib/priceMath.ts` to compute:
  - 14-day Minimum Price
  - 14-day Maximum Price
  - 14-day Period Average Price
- **Cross-Mandi Arbitrage Comparison:**
  - Fetches the latest price across all 3 mandis for the selected crop.
  - Sorts mandis in descending order (highest paying market first).
  - Renders a prominent **"🏆 Best place to sell today"** badge on the top market, allowing farmers to identify arbitrage opportunities immediately.
  - Direct quick-links for farmers: *"Set Alert"* and *"Calculate Profit"*.

### Milestone 3: Real-Time Price Alerts System (SPEC §7)
- **Autonomous Alert Evaluation Engine:** Implemented in `src/lib/alertEval.ts`.
  - Evaluates `Above` conditions ($\text{current\_price} \ge \text{target\_price}$) and `Below` conditions ($\text{current\_price} \le \text{target\_price}$).
  - Strictly tests equality boundaries and ensures inactive/paused alerts never trigger.
- **Farmer Alert Management:** Implemented in `src/pages/Alerts.tsx` and `AlertForm.tsx`.
  - Categorizes alerts by status: *Triggered*, *Waiting*, and *Paused*.
  - Triggered alerts are sorted to the top with vivid highlighting.
  - One-tap toggle switch to pause or activate alerts.
  - Full CRUD capabilities: Create new alerts, Edit target prices, and Delete alerts backed by an accessible confirmation dialog (`src/components/ConfirmDialog.tsx`).
- **Live Visual Notification Badge & Toast:**
  - Unread triggered alert count badge displayed on both mobile bottom bar and desktop navigation.
  - Automatically triggers an informative toast notification when a price update causes new alerts to fire.

### Milestone 4: Produce Listings & Direct Marketplace (SPEC §8)
- **Validated Listing Creation Form:** Implemented in `src/pages/ListingForm.tsx`.
  - Enforces quantity $>0$ maunds, price $>0$ PKR/maund, grade (`A`, `B`, `C`), district, contact mobile, and future availability date.
  - **Live Benchmark Classifier:** While the farmer types an asking price, the form calculates the current market average across mandis and displays a preview chip (*Below, At, or Above market*).
- **Public Produce Marketplace:** Implemented in `src/pages/Marketplace.tsx`.
  - Filterable by crop, district, and quality grade with text search.
  - Sorting options: *Newest first* (by `created_at` timestamp) and *Lowest price first*.
  - **Market Benchmark Tags (`src/lib/marketLabel.ts`):**
    - **Below market** ($<-5\%$): Green badge indicating discount/bargain.
    - **At market** ($-5\%$ to $+5\%$): Neutral badge indicating fair benchmark.
    - **Above market** ($>+5\%$): Amber/red badge indicating premium lot.
- **1-Tap Direct Buyer-Seller Actions:** Implemented in `src/pages/ListingDetail.tsx`.
  - **Direct Calling:** Native `tel:<phone>` action.
  - **Direct WhatsApp:** Formats phone number into international Pakistani format (`923XXXXXXXXX`) and pre-fills an Urdu/English conversation starter: *"Assalam o Alaikum, I saw your listing for {qty} maunds of {crop} on KisanMandi."*
  - Automatically disables contact buttons and renders a "Sold" banner if the listing is marked as sold.
- **Triple-Layer Ownership Safeguards:**
  1. *UI Layer:* Edit, Delete, and Mark as Sold actions only render if `listing.user_id === currentUser.id`.
  2. *Route Guard:* Direct URL access to an unauthorized edit page is blocked with an error toast and redirection.
  3. *Logic Layer:* Mutation helpers verify ownership prior to sending HTTP PATCH or DELETE requests.

### Milestone 5: Agricultural Profit Forecaster (SPEC §9)
- **Interactive Financial Simulation Hub:** Implemented in `src/pages/ProfitCalculator.tsx`.
  - Pre-fills seamlessly from URL parameters (`?crop=ID&market=ID`).
  - Inputs: Crop, Mandi, Harvest Quantity (maunds), and Production Cost per maund.
  - **Interactive Sensitivity Slider:** Dynamic range slider shifting benchmark selling prices from $-20\%$ to $+20\%$ with 1-tap snap buttons ($-20\%$, $-10\%$, $0\%$, $+10\%$, $+20\%$).
- **Real-Time Financial Metrics (`src/lib/profitMath.ts`):**
  - Expected Gross Revenue: $\text{Quantity} \times \text{Adjusted Price}$
  - Total Production Expenses: $\text{Quantity} \times \text{Cost per Maund}$
  - Net Profit or Loss: $\text{Revenue} - \text{Total Cost}$ (color-coded green for profit, red for loss)
  - Profit Margin Percentage: $(\text{Profit} / \text{Revenue}) \times 100$
- **Market Scenario Comparison Matrix:**
  - Displays a clean comparative table evaluating Bear Market ($-20\%$), Benchmark Market ($0\%$), and Bull Market ($+20\%$).
  - Complete zero/NaN immunity: Displays clean "–" placeholders when revenue or quantity is zero.

### Milestone 6: Cultural Heritage, Regional Polish & QA (SPEC §10–14)
- **Authentic Sindhi Cultural Design System:**
  - Geometric Ajrak block-print borders and headers (`src/components/AjrakPattern.tsx`).
  - Cultural motif toggle in the user menu allowing users to toggle patterns on or off (`src/context/CultureContext.tsx`).
  - Custom handcrafted SVG illustrations: Sindhi Topi Farmer, Bullock Cart, Indus Landscape, and Rilli Quilt.
- **Complete Bilingual English & Urdu (Nastaliq RTL):**
  - Implemented in `src/i18n/`.
  - Rich locale dictionaries (`en.json`, `ur.json`) with nested key resolution and fallback mechanisms.
  - Instant Right-to-Left (RTL) layout transformation and typography adaptation.
- **Dark Mode Support:** Full dark mode with persistent user preference storage.
- **Rigorous Quality Assurance:** Zero console errors, zero React key warnings, and complete verification across 375px, 414px, and 1024px screen widths.

---

## 5. System Architecture & Relational Data Model

### 5.1 Relational Collections in `server/db.json`

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     /crops      │       │    /markets     │       │     /prices     │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ id (PK)         │◄──┐   │ id (PK)         │◄──┐   │ id (PK)         │
│ name            │   └───┼─────────────────┼───┼───│ crop_id (FK)    │
│ category        │       │ name            │   └───│ market_id (FK)  │
│ base_price      │       │ district        │       │ date            │
└─────────────────┘       └─────────────────┘       │ price           │
                                                    └─────────────────┘
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     /users      │       │    /listings    │       │     /alerts     │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ id (PK)         │◄──┐   │ id (PK)         │       │ id (PK)         │
│ name            │   ├───│ user_id (FK)    │   ┌───│ user_id (FK)    │
│ phone           │   │   │ crop_id (FK)────┼───┤   │ crop_id (FK)    │
│ district        │   │   │ quantity        │   └───│ market_id (FK)  │
│ role            │   │   │ asking_price    │       │ condition       │
└─────────────────┘   │   │ grade           │       │ target_price    │
                      │   │ available_from  │       │ active_status   │
                      │   │ status          │       └─────────────────┘
                      └───│ created_at      │
                          └─────────────────┘
```

### 5.2 Deterministic Seeding Engine (`server/seed.js`)
- Uses the `mulberry32` pseudo-random number generator to ensure consistent, repeatable data generation.
- Generates 14 consecutive daily records for every crop-market pair (8 crops $\times$ 3 markets $\times$ 14 days = **336 records**) ending on the exact date of execution.
- Bounded random walk: daily fluctuations of $\pm3\%$, clamped within $\pm15\%$ of the crop base price, ensuring varied market leaders and realistic trends without anomalies.

---

## 6. Verification, Testing & Quality Metrics

Automated test execution using `npm test` runs 14 test suites covering 98 unit and integration assertions:

| Test Suite File | Assertions | Core Functionality Validated |
|---|---|---|
| `src/lib/priceMath.test.ts` | 14 tests | 14-day min/max/avg stats, latest/previous price extraction, daily change delta and percentage, zero division protection. |
| `src/lib/validators.test.ts` | 13 tests | Pakistani phone normalization (`0300...` vs `+92300...`), Sindh district lookup, ISO date comparisons. |
| `src/lib/alertEval.test.ts` | 12 tests | Above/Below trigger conditions, equality boundary conditions, inactive alert isolation. |
| `src/lib/marketLabel.test.ts` | 8 tests | Market classification boundaries ($-5.0\%$, $+5.0\%$, $-5.01\%$, $+5.01\%$). |
| `src/lib/profitMath.test.ts` | 6 tests | Revenue, cost, net profit, margin formula clamping, zero quantity/revenue guards. |
| `src/i18n/i18n.test.ts` | 6 tests | Translation key lookup, fallback handling, RTL language configurations. |
| `src/pages/Marketplace.test.ts` | 8 tests | Multi-attribute filtering, sorting by date and price, listing card rendering. |
| `src/pages/Prices.test.ts` | 6 tests | Mandi selector query synchronization, category filtering, debounced search. |
| `src/pages/Alerts.test.ts` | 6 tests | Alert list sorting (triggered first), toggle active status, unread count logic. |
| `src/pages/ProfitCalculator.test.ts`| 5 tests | Dynamic slider price recalculation, scenario table generation. |
| `src/pages/ListingDetail.test.ts`| 5 tests | WhatsApp link encoding, telephone launcher, ownership action buttons. |
| `src/pages/CropDetail.test.ts` | 4 tests | 14-day Recharts series mapping, highest paying mandi identification. |
| `src/api/client.test.ts` | 4 tests | 8-second request timeout, structured `ApiError` throwing, JSON header serialization. |
| `src/setup.test.ts` | 1 test | Vitest environment verification. |
| **Total** | **98 tests** | **100% Passed (0 Failures, 0 Skipped)** |

---

## 7. Assumptions & Key Architectural Decisions (from `NOTES.md`)

1. **Produce Listings Timestamp (`created_at`):**
   - Listings include a UTC ISO timestamp (`created_at`) to enable deterministic sorting by "Newest" on the Marketplace feed.
2. **Standardized Agricultural Measurement Unit:**
   - All wholesale mandi benchmark prices and farmer produce asking prices are standardized in **PKR per 40 kg (1 maund)**. All harvest quantities are represented in **maunds**.
3. **Availability Date Validation on Listing Edit:**
   - The "not in past" date validation rule applies strictly to newly created listings or when an existing listing's availability date is explicitly altered. Editing other fields (e.g. quantity or price) on an existing listing whose date has lapsed is not blocked.
4. **Deterministic Mock Backend:**
   - The seeded PRNG guarantees consecutive 14-day history ending on the current system date, eliminating date gaps or stale trends.

---

## 8. Conclusion & Future Roadmap

**KisanMandi** successfully bridges agricultural technology with grassroots rural utility in Sindh, Pakistan. By uniting real-time mandi benchmarks, predictive profit forecasting, automated threshold alerts, and direct peer-to-peer commerce under an authentic cultural identity, the platform empowers smallholder farmers to maximize their livelihood.

### Future Roadmap
- **SMS & Voice Alerts:** Automated IVR voice calls and SMS alerts for farmers without active mobile data connections.
- **Logistics Pooling:** Shared transportation booking allowing neighboring farmers in the same district to pool tractor-trolleys to higher-paying mandis.
- **Cold Storage Directory:** Real-time visibility into localized cold storage availability and tariff rates.
