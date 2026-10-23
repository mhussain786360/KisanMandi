import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ShadingType,
  Header,
  Footer,
  PageNumber
} from 'docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const doc = new Document({
  creator: "Muhammad Mubasher Hussain",
  title: "KisanMandi Project Report",
  description: "Sindh Mandi Wholesale Benchmarks, Price Forecasting & Direct Produce Marketplace",
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 1440, // 1 inch
            bottom: 1440,
            left: 1440,
            right: 1440,
          },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "KisanMandi — Sindh Mandi Prices & Produce Marketplace",
                  italics: true,
                  size: 18,
                  color: "666666",
                }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Page ",
                  size: 18,
                  color: "666666",
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  size: 18,
                  color: "666666",
                }),
                new TextRun({
                  text: " of ",
                  size: 18,
                  color: "666666",
                }),
                new TextRun({
                  children: [PageNumber.TOTAL_PAGES],
                  size: 18,
                  color: "666666",
                }),
              ],
            }),
          ],
        }),
      },
      children: [
        // Title block
        new Paragraph({
          text: "🌾 KisanMandi (سندھ کسان منڈی)",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 },
          children: [
            new TextRun({
              text: "Sindh Mandi Wholesale Benchmarks, Price Forecasting & Direct Produce Marketplace\n",
              bold: true,
              size: 24,
              color: "143825",
            }),
            new TextRun({
              text: "Team Member: Muhammad Mubasher Hussain | Date: October 2026\n",
              italics: true,
              size: 20,
              color: "555555",
            }),
            new TextRun({
              text: "14/14 Test Suites Passed | 98/98 Unit & Integration Tests Passing (100%)\n",
              bold: true,
              size: 20,
              color: "20653D",
            }),
          ],
        }),

        // 1. Executive Summary
        new Paragraph({
          text: "1. Executive Summary & Vision",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "Smallholder agricultural producers in Sindh, Pakistan operate under intense market vulnerabilities. Facing fragmented local markets, lack of transparent wholesale price intelligence, and heavy reliance on intermediaries (arhtis/commission agents), farmers often realize prices significantly below fair market value.",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: "KisanMandi is a mobile-first progressive web application engineered to level the playing field. It provides smallholder farmers and agricultural buyers with real-time wholesale mandi benchmarks across major regional trading hubs (Hyderabad, Sukkur, Mirpurkhas), 14-day price history trends, customizable threshold-based price alerts, an interactive agricultural profit calculator with what-if simulations (±20%), and a peer-to-peer produce marketplace with automatic benchmark badges (Below / At / Above market) and direct 1-tap WhatsApp and phone calling integrations.",
            }),
          ],
        }),

        // 2. Problem Statement
        new Paragraph({
          text: "2. Problem Statement & Objectives",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Key Agricultural Challenges in Sindh:\n",
              bold: true,
            }),
            new TextRun({
              text: "• Information Asymmetry: Rural farmers lack visibility into commodity rates in neighboring wholesale mandis, forcing them to sell at distressed prices.\n",
            }),
            new TextRun({
              text: "• Intermediary Exploitation: Middlemen capture disproportionate margins while producers shoulder all input, climate, and transport risks.\n",
            }),
            new TextRun({
              text: "• Lack of Decision Support: Farmers lack simple computational tools to forecast whether transport costs to distant mandis will be offset by price differentials.\n",
            }),
            new TextRun({
              text: "• Cultural & Language Barriers: Existing digital tools rarely offer native Urdu (Nastaliq) or Sindhi cultural familiarity, hindering rural adoption.",
            }),
          ],
        }),

        // 3. Methodology & Technical Approach
        new Paragraph({
          text: "3. Methodology: Technical Approach & Stack Justification",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "3.1 Technical Approach & Engineering Principles\n",
              bold: true,
              size: 22,
              color: "143825",
            }),
            new TextRun({
              text: "Our methodology focuses on five fundamental architectural tenets:\n",
            }),
            new TextRun({
              text: "1. Mobile-First Progressive Architecture: Built strictly for 375px–414px mobile constraints with ≥44px touch targets, bottom navigation, and zero horizontal scrolling, scaling smoothly up to desktop screens.\n",
            }),
            new TextRun({
              text: "2. Strict RESTful Separation of Concerns: The frontend communicates solely via HTTP REST endpoints. Zero hard-coded mock domain JSON is bundled into the client.\n",
            }),
            new TextRun({
              text: "3. Minimal LocalStorage Footprint: LocalStorage is reserved solely for authentication identifiers (currentUserId), language preference, and theme/cultural toggles. Domain data is never stored in browser storage to avoid stale cache bugs.\n",
            }),
            new TextRun({
              text: "4. Defensive Engineering & Strict Typing: Full TypeScript domain definitions across all collections, numeric validation, zero division guards, and timezone-immune ISO date comparisons.\n",
            }),
            new TextRun({
              text: "5. Deterministic Data Seeding: A seeded PRNG (mulberry32) generates 14 consecutive days of realistic price fluctuations ending on the current date, guaranteeing reproducible and reliable test runs.",
            }),
          ],
        }),

        new Paragraph({
          spacing: { before: 100, after: 120 },
          children: [
            new TextRun({
              text: "3.2 Technology Stack Justification & Rationale\n",
              bold: true,
              size: 22,
              color: "143825",
            }),
          ],
        }),

        // Stack Table
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  shading: { fill: "143825", type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "Technology", bold: true, color: "FFFFFF" })] })],
                }),
                new TableCell({
                  shading: { fill: "143825", type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "Role", bold: true, color: "FFFFFF" })] })],
                }),
                new TableCell({
                  shading: { fill: "143825", type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "Why Chosen to Solve Problem Statement", bold: true, color: "FFFFFF" })] })],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "React 18", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Frontend Framework" })] }),
                new TableCell({ children: [new Paragraph({ text: "Component-based architecture allows reactive UI states across calculators, live alert badges, and interactive charts. Concurrent features deliver smooth 60fps performance on budget mobile devices." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "TypeScript 5.6", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Programming Language" })] }),
                new TableCell({ children: [new Paragraph({ text: "Enforces strict type safety across all 6 relational models (Crop, Market, Price, User, Listing, Alert), preventing undefined property errors and runtime crashes." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Vite 6", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Build & Dev Engine" })] }),
                new TableCell({ children: [new Paragraph({ text: "Provides sub-second HMR and optimized Rollup tree-shaking for minimal bundle footprint over rural 3G/4G connections." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Tailwind CSS", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Utility Styling" })] }),
                new TableCell({ children: [new Paragraph({ text: "Delivers a lightweight, mobile-first design system with custom agricultural tokens (forest, mint, neon), cultural CSS variables (--ajrak-crimson, --ajrak-indigo), and Nastaliq font typography." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "TanStack React Query v5", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Server State Cache" })] }),
                new TableCell({ children: [new Paragraph({ text: "Declarative caching, optimistic updates, background re-fetching on window focus, and seamless integration with pull-to-refresh mobile gestures." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Recharts 2.15", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Data Visualization" })] }),
                new TableCell({ children: [new Paragraph({ text: "Responsive SVG line charting for 14-day price trends with custom date formatting, currency tooltips, and min/max markers without canvas blurriness." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "React Hook Form + Zod", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Validation Engine" })] }),
                new TableCell({ children: [new Paragraph({ text: "Declarative schema validation with instant inline feedback. Handles Pakistani mobile number normalization and double-submit prevention." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "json-server 0.17", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Mock REST API" })] }),
                new TableCell({ children: [new Paragraph({ text: "Standard REST endpoints with query sorting and filtering, ensuring true client-server decoupling." })] }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Vitest 2.1", bold: true })] })] }),
                new TableCell({ children: [new Paragraph({ text: "Test Runner" })] }),
                new TableCell({ children: [new Paragraph({ text: "Executes 98 automated assertions in seconds directly using the project's Vite/TypeScript configuration." })] }),
              ],
            }),
          ],
        }),

        // 4. Functionality & Milestones
        new Paragraph({
          text: "4. Functionality & Milestones Met",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "The project successfully met and verified all six development milestones as defined in the project specification:\n",
            }),
          ],
        }),

        // Milestone 1
        new Paragraph({
          spacing: { before: 80, after: 60 },
          children: [
            new TextRun({ text: "• Milestone 1: User Roles & Price Discovery (SPEC §5)\n", bold: true, color: "143825" }),
            new TextRun({ text: "  - User Profile Setup: Captures name, validated Pakistani phone (0300... or +92300...), Sindh district dropdown, and Farmer/Buyer role selection.\n" }),
            new TextRun({ text: "  - 1-Click Demo Personas: Quick login featuring 6 pre-seeded profiles (4 farmers, 2 buyers) for instant demonstration.\n" }),
            new TextRun({ text: "  - Role-Based Navigation: Farmers access 5 destinations (Prices, Marketplace, Alerts with live badge, My Listings, Calculator); Buyers access 2 tabs (Prices, Marketplace). Unauthorized routes redirect buyers automatically.\n" }),
            new TextRun({ text: "  - Mandi Price Board: Live rates across Hyderabad, Sukkur, and Mirpurkhas with 250ms debounced search, category filter chips, day-over-day price delta (PKR and %), and touch pull-to-refresh.\n" }),
          ],
        }),

        // Milestone 2
        new Paragraph({
          spacing: { before: 80, after: 60 },
          children: [
            new TextRun({ text: "• Milestone 2: 14-Day Trends & Mandi Comparison (SPEC §6)\n", bold: true, color: "143825" }),
            new TextRun({ text: "  - 14-Day Trend Chart: Responsive Recharts line graph with 'dd MMM' date formatting and PKR currency tooltips.\n" }),
            new TextRun({ text: "  - Statistical Summary Cards: Instant min, max, and 14-day period average price calculations.\n" }),
            new TextRun({ text: "  - Mandi Price Comparison: Compares current prices across all 3 mandis, sorted highest first, highlighting the highest paying market with the '🏆 Best place to sell today' badge.\n" }),
          ],
        }),

        // Milestone 3
        new Paragraph({
          spacing: { before: 80, after: 60 },
          children: [
            new TextRun({ text: "• Milestone 3: Real-Time Price Alerts (SPEC §7)\n", bold: true, color: "143825" }),
            new TextRun({ text: "  - Threshold Evaluation Engine: Dynamically evaluates 'Above' (price >= target) and 'Below' (price <= target) rules, including strict equality boundary cases.\n" }),
            new TextRun({ text: "  - Alerts Dashboard: Prioritizes triggered alerts at the top; supports full CRUD (Create, Edit target, Toggle active/pause, Delete with ConfirmDialog).\n" }),
            new TextRun({ text: "  - Dynamic Alert Badge: Real-time badge counter on navigation tabs reflecting active triggered alerts, accompanied by toast notifications on price refreshes.\n" }),
          ],
        }),

        // Milestone 4
        new Paragraph({
          spacing: { before: 80, after: 60 },
          children: [
            new TextRun({ text: "• Milestone 4: Produce Marketplace & Direct Buyer-Seller Dealings (SPEC §8)\n", bold: true, color: "143825" }),
            new TextRun({ text: "  - Listing Creation: Validated form with live market benchmark preview chip under the price input.\n" }),
            new TextRun({ text: "  - Multi-Filter Marketplace: Filter by crop, district, quality grade (A/B/C) with Newest and Price sorting.\n" }),
            new TextRun({ text: "  - Market Benchmark Classifiers: Automatic labeling of produce as 'Below market' (<-5%), 'At market' (±5%), or 'Above market' (>+5%).\n" }),
            new TextRun({ text: "  - 1-Tap Buyer Actions: Native telephone calling (tel:<phone>) and formatted WhatsApp messaging (wa.me/92XXXXXXXXXX) with pre-filled greeting.\n" }),
            new TextRun({ text: "  - Triple-Layer Ownership Safeguards: Enforces ownership at UI, route guard, and logic mutation layers.\n" }),
          ],
        }),

        // Milestone 5
        new Paragraph({
          spacing: { before: 80, after: 60 },
          children: [
            new TextRun({ text: "• Milestone 5: Agricultural Profit Forecaster (SPEC §9)\n", bold: true, color: "143825" }),
            new TextRun({ text: "  - Pre-filled Interactive Calculator: URL query pre-filling (?crop=&market=).\n" }),
            new TextRun({ text: "  - What-If Sensitivity Slider: Shifts benchmark prices from -20% to +20% with 1-tap snap buttons.\n" }),
            new TextRun({ text: "  - Live Financial Analytics: Instant calculations for Gross Revenue, Production Cost, Net Profit/Loss, and Profit Margin %.\n" }),
            new TextRun({ text: "  - Scenario Comparison Matrix: Side-by-side table evaluating Bear (-20%), Base (0%), and Bull (+20%) scenarios with absolute zero/NaN protection.\n" }),
          ],
        }),

        // Milestone 6
        new Paragraph({
          spacing: { before: 80, after: 60 },
          children: [
            new TextRun({ text: "• Milestone 6: Architectural Compliance, Regional Polish & QA (SPEC §10–14)\n", bold: true, color: "143825" }),
            new TextRun({ text: "  - Sindhi Cultural Art: Handcrafted SVG illustrations (Sindhi Topi Farmer, Bullock Cart, Indus Landscape, Rilli Quilt) and geometric Ajrak borders with a user-controlled toggle.\n" }),
            new TextRun({ text: "  - Full Bilingual Localization: English and Urdu (Nastaliq script) with dynamic RTL document layout switching.\n" }),
            new TextRun({ text: "  - Dark Mode: Full light/dark mode theme with persistent user preferences.\n" }),
            new TextRun({ text: "  - Quality Assurance: 14 test suites, 98/98 unit and integration tests passing in Vitest with zero failures.\n" }),
          ],
        }),

        // 5. Verification & Testing
        new Paragraph({
          text: "5. Verification & Automated Testing Results",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "Vitest automated testing results across all 14 test files:\n",
              bold: true,
            }),
            new TextRun({
              text: "• priceMath.test.ts: 14 tests passed (14-day stats, daily change, zero-division protection)\n",
            }),
            new TextRun({
              text: "• validators.test.ts: 13 tests passed (Pakistani mobile format, Sindh districts, dates)\n",
            }),
            new TextRun({
              text: "• alertEval.test.ts: 12 tests passed (Above/Below thresholds, equality cases, active toggle)\n",
            }),
            new TextRun({
              text: "• marketLabel.test.ts: 8 tests passed (Below/At/Above -5% and +5% boundary classification)\n",
            }),
            new TextRun({
              text: "• Marketplace.test.ts: 8 tests passed (filters, sorting, listing cards)\n",
            }),
            new TextRun({
              text: "• Prices.test.ts: 6 tests passed (mandi switcher, category chips, debounced search)\n",
            }),
            new TextRun({
              text: "• Alerts.test.ts: 6 tests passed (triggered sort, toggle active, unread count badge)\n",
            }),
            new TextRun({
              text: "• profitMath.test.ts: 6 tests passed (revenue, profit, margin %, zero guards)\n",
            }),
            new TextRun({
              text: "• i18n.test.ts: 6 tests passed (English/Urdu dictionary resolution, RTL direction)\n",
            }),
            new TextRun({
              text: "• ProfitCalculator.test.ts: 5 tests passed (slider recalculation, scenario comparison)\n",
            }),
            new TextRun({
              text: "• ListingDetail.test.ts: 5 tests passed (WhatsApp & phone action link formatting)\n",
            }),
            new TextRun({
              text: "• CropDetail.test.ts: 4 tests passed (14-day Recharts series, highest paying mandi)\n",
            }),
            new TextRun({
              text: "• client.test.ts: 4 tests passed (8s timeout, ApiError handling, JSON headers)\n",
            }),
            new TextRun({
              text: "• setup.test.ts: 1 test passed (Vitest test environment sanity)\n",
            }),
            new TextRun({
              text: "Summary: 14 Test Files Passed | 98 Tests Passed | 0 Failures (100% Pass Rate)",
              bold: true,
              color: "20653D",
            }),
          ],
        }),

        // 6. Assumptions & Architectural Decisions
        new Paragraph({
          text: "6. Key Architectural Decisions & Assumptions",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "1. Standardized Agricultural Measurement Unit: All mandi wholesale benchmarks and produce asking prices are standardized in PKR per 40 kg (1 maund). All crop harvest quantities are represented in maunds (Rs X,XXX / maund).\n",
            }),
            new TextRun({
              text: "2. Listing Timestamp Sorting: Produce listings include a UTC ISO timestamp (created_at) to enable deterministic sorting by 'Newest' on the marketplace feed.\n",
            }),
            new TextRun({
              text: "3. Availability Date Validation on Edit: The 'not in past' rule is enforced strictly for newly created listings or when an existing date is actively changed, allowing farmers to edit pricing or quantity on lapsed lots without blocking.\n",
            }),
            new TextRun({
              text: "4. Deterministic Mock REST Seed: Seeded PRNG generates 14 consecutive daily records ending on today's execution date, eliminating date gaps or test drift.",
            }),
          ],
        }),

        // 7. Conclusion
        new Paragraph({
          text: "7. Conclusion",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: "KisanMandi demonstrates how thoughtful software engineering, rigorous testing, and regional cultural empathy can empower marginalized agricultural communities. By replacing market opacity with transparent wholesale data, automated alerts, financial forecasting, and direct trading, KisanMandi establishes a robust digital foundation for the farming families of Sindh.",
            }),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  const outputPath = path.join(rootDir, 'PROJECT_REPORT.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Successfully generated Word Document: ${outputPath}`);
});
