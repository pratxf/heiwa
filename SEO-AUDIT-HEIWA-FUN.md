# Heiwa.fun SEO Audit

**Audit date:** 29 June 2026  
**Scope:** Live production site plus the local Next.js source  
**Site type:** iOS sleep-sounds application / product marketing site  
**Provisional SEO health:** **72/100**

The site is crawlable, server-rendered, HTTPS-only, mobile configured, and has solid page-level titles, descriptions, headings, internal links, and useful product content. The main technical defect is domain inconsistency: production resolves on `https://www.heiwa.fun`, while metadata, canonicals, sitemap entries, robots directives, and structured data declare `https://heiwa.fun`. Consequently, all nine submitted sitemap URLs redirect and their canonicals do not match the final indexed URLs.

The score is provisional because this audit had no Google Search Console, GA4, backlink-provider, CrUX, or PageSpeed API access. Core Web Vitals and rankings therefore are not scored as verified facts.

## Executive priorities

| Priority | Finding | SEO impact | Recommended action |
|---|---|---|---|
| High | Apex/`www` inconsistency across all canonical signals | Wastes crawl requests and gives search engines conflicting consolidation signals | Choose one hostname. Since production currently serves `www`, change all generated absolute URLs to `https://www.heiwa.fun`, or change Vercel's primary domain to the apex and redirect `www` to it. |
| High | Sitemap `lastmod` is regenerated as the current time for every URL | Search engines cannot distinguish genuinely changed pages; repeated false freshness weakens the signal | Use stable content modification dates, sourced from content or release data, and omit `lastmod` when no accurate value exists. |
| High | Large source raster assets (about 0.8-2.7 MB each) | Can increase image transformation cost and may degrade LCP if responsive delivery or caching misses | Export source images closer to display size, use AVIF/WebP, retain Next Image responsive sizing, and verify with PageSpeed Insights. |
| Medium | Schema only covers `SoftwareApplication` and `FAQPage` on the homepage | Brand/site identity is less explicit to search and answer engines | Add `Organization` and `WebSite`; connect entities with stable `@id` values. Validate the application offer and subscription claims against the App Store listing. |
| Medium | The `/blogs` page is an index only; no crawlable article routes were found | Very little informational-search surface exists despite three article teasers | Publish each article at a stable URL with original, expert-reviewed content, author/reviewer, dates, and Article schema. Do not create thin pages merely to target keywords. |
| Medium | Security headers beyond HSTS are absent in sampled responses | Mostly security/quality hygiene, with indirect trust and resilience value | Add CSP, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and frame protection (`frame-ancestors` in CSP). |
| Low | `/llms.txt` returns 404 | Optional discoverability aid; not a Google ranking requirement | Add only if it can be maintained. Prioritize indexable content, clear entities, and strong citations first. |

## Verified live findings

### Crawlability and indexability

- All nine intended HTML routes returned `200` after following redirects.
- `/robots.txt`, `/sitemap.xml`, and `/manifest.webmanifest` returned `200` on `www`.
- The apex homepage returns a `307` to `https://www.heiwa.fun/`.
- Robots allows the site and blocks `/api/`; no accidental site-wide block was found.
- HTTPS and HSTS are active.
- HTML is prerendered by Next.js (`X-Nextjs-Prerender: 1`), so primary content does not depend on client-only rendering.

### Canonical and sitemap defect

The code defines `metadataBase`, Open Graph URL, schema URL, robots host, robots sitemap, and all sitemap entries on the apex hostname. Vercel resolves public pages on `www`. This produces:

- nine redirected sitemap URLs;
- nine canonical/final-URL mismatches;
- an apex robots and sitemap request that redirects before the actual file is served;
- fragmented brand/entity URLs in Open Graph and JSON-LD.

This is the first fix to ship. Either hostname is acceptable; consistency is what matters. A permanent `308` is preferable for the non-primary host once the primary domain is settled.

### On-page SEO

Strengths:

- Unique, descriptive metadata exists for the homepage and the three core SEO landing pages.
- Core landing pages use one clear topic and substantial explanatory sections.
- The viewport and language declarations are present.
- Open Graph and Twitter metadata are configured globally.
- Internal navigation exposes product, support, and legal routes.

Opportunities:

- Legal/support descriptions are extremely terse. This is not a ranking emergency, but more informative snippets would improve clarity.
- Verify that each page has exactly one visible H1 in rendered output during regression testing.
- Ensure the three blog cards link to real articles; an index without article URLs cannot earn rankings for those subjects.
- Add visible company/about information and a real support/business identity. For a wellness-adjacent product, clarity about who operates the app improves trust.

### Structured data

The homepage includes `SoftwareApplication` and `FAQPage` JSON-LD. FAQ markup is syntactically reasonable, but Google generally limits FAQ rich results to authoritative government and health sites. Keep it only when the questions and answers remain visible and useful; do not expect a commercial rich result.

Recommended graph:

- `Organization` with name, canonical URL, logo, and verified social/App Store identity;
- `WebSite` pointing to the publisher organization;
- `SoftwareApplication` linked to that organization via `publisher` and a stable `@id`;
- `Article` only after genuine article detail pages exist.

Do not add ratings or review schema unless the displayed testimonials are independently verifiable and eligible under Google's structured-data policies.

### Images and performance risk

The repository contains several very large PNG originals: `curated-forest.png` is about 2.7 MB; `hero-phone-scene.png` about 1.8 MB; several other assets are 1.3-1.7 MB. Next Image can serve optimized variants, so source size alone does not prove poor field performance. It does create risk and should be tested rather than converted into invented LCP/INP claims.

Actions:

1. Run PageSpeed Insights on homepage plus each acquisition landing page on mobile and desktop.
2. Confirm the actual LCP element and delivered transfer size.
3. Keep `priority` only for the true above-the-fold LCP image.
4. Supply accurate `sizes` for every fill/responsive image.
5. Re-export photographic assets as high-quality AVIF/WebP and keep dimensions near realistic maximum display sizes.
6. Reduce client-side animation and hydration on the homepage if Lighthouse shows main-thread pressure; `LandingPage.tsx` is a large client component using Framer Motion.

No reliable field LCP, INP, or CLS values were available in this audit. Values emitted by heuristic tooling are intentionally excluded.

### Content and topical growth

The existing acquisition pages target sensible intents: sleep sounds, soundscape app, and rain sounds for sleep. They are a useful base but form a very small topic cluster.

Next content should answer product-relevant questions with firsthand expertise rather than generic SEO prose. Good candidates include how to build a bedtime sound mix, white noise versus brown noise, using timers without interrupting sleep routines, and offline soundscape use. Each article should have a named author or reviewer, a meaningful updated date, references where health claims are made, screenshots or original examples, and links to the most relevant product page.

Avoid medical promises. Position Heiwa as a relaxation/wellness tool unless claims are supported by appropriate evidence.

## 30-day action plan

### Week 1

1. Select the canonical hostname and align `metadataBase`, canonical tags, Open Graph, JSON-LD, robots, sitemap, and Vercel redirects.
2. Replace dynamic sitemap timestamps with accurate stable dates.
3. Validate all nine sitemap URLs: direct `200`, self-canonical, indexable, and included only when valuable.
4. Submit the corrected sitemap in Google Search Console and Bing Webmaster Tools.

### Week 2

1. Run PageSpeed Insights for the homepage and three SEO landing pages.
2. Optimize the true LCP asset and the largest delivered images based on measured waterfalls.
3. Add the baseline security headers and regression-test the app.
4. Validate JSON-LD with Schema.org Validator and Google's Rich Results Test.

### Weeks 3-4

1. Add the `Organization`/`WebSite` entity graph.
2. Publish the first three real article detail pages and link them from `/blogs` and relevant product pages.
3. Add a clear operator/about identity and editorial attribution where appropriate.
4. Establish a Search Console baseline: indexed pages, queries, impressions, CTR, and page-level trends.

## Measurement plan

Track these after deployment:

- sitemap URLs discovered versus indexed;
- canonical selected by Google versus user-declared canonical;
- mobile Core Web Vitals using CrUX/Search Console field data;
- branded and non-branded impressions;
- organic App Store outbound clicks;
- indexed article count and queries per article;
- crawl errors and redirect hits on sitemap URLs.

## Audit limitations

- No authenticated Search Console or Analytics data was supplied.
- No paid keyword, SERP, or backlink dataset was available.
- No CrUX/PageSpeed API result was available, so performance findings are risk-based rather than asserted field metrics.
- Visual browser automation was unavailable in the installed audit environment.

## Remediation status — 30 June 2026

The following changes were implemented and verified against a production Next.js build. This section records code-level remediation; live production behavior must be rechecked after deployment.

| Audit finding | Status | Resolution |
|---|---|---|
| Apex/`www` canonical conflict | Fixed in code | All metadata, Open Graph, schema, robots, and sitemap URLs now use `https://www.heiwa.fun`; a permanent apex-to-`www` redirect is configured. |
| Redirected and mismatched sitemap URLs | Fixed in code | Sitemap contains 15 canonical `www` URLs and all corresponding local production routes return `200`. |
| Unreliable dynamic `lastmod` values | Fixed | Stable page-specific dates replace build-time timestamps; `priority` and `changeFrequency` were removed. |
| Missing baseline security headers | Fixed in code | CSP with `frame-ancestors`, MIME-sniffing protection, referrer policy, and permissions policy are configured and present in local production responses. |
| Limited entity schema | Fixed | Added linked Organization, WebSite, WebPage, SoftwareApplication, Article, and Breadcrumb entities with stable IDs. |
| Missing article detail pages | Fixed | Published the supplied authored article plus two supporting guides and added crawlable links from the blog hub. |
| Limited low-difficulty keyword coverage | Fixed | Added three product-intent pages and expanded existing pages using a documented one-intent-per-URL keyword map. |
| Missing `llms.txt` | Fixed | Added a maintained file containing canonical product, guide, support, and policy URLs. |
| Oversized source artwork | Fixed | Added six WebP variants and changed live page references; combined artwork weight fell from approximately 10.4 MB to 0.53 MB. |
| Weak internal content architecture | Fixed | Header, footer, blog hub, product pages, articles, related guides, and CTAs now form a crawlable topic cluster. |
| Field Core Web Vitals | Measurement required | Run PageSpeed Insights and review Search Console CrUX data after deployment; no heuristic values are presented as field data. |
| Google-selected canonicals and indexing | Measurement required | Resubmit the sitemap and inspect canonical/index coverage in Search Console after deployment. |
| Search performance and backlinks | Measurement required | Requires Search Console and a backlink/keyword data provider; no results were invented. |

### Keyword ownership map

| URL | Primary intent |
|---|---|
| `/soundscape-app` | soundscape app |
| `/sleep-sounds` | sleep sound mixer app |
| `/rain-sounds-for-sleep` | rain sleep sounds |
| `/offline-sleep-sounds-app` | offline sleep sounds app |
| `/sleep-sounds-app-with-timer` | sleep sounds app with timer |
| `/brown-noise-and-rain-for-sleep` | brown noise and rain sounds |
| `/blogs/best-sleep-sounds-for-falling-asleep-faster` | best sleep sounds for falling asleep faster |
| `/blogs/how-to-create-your-own-sleep-sound-mix` | how to create your own sleep sound mix |
| `/blogs/white-noise-vs-brown-noise-vs-pink-noise` | white noise vs brown noise vs pink noise |

### Deployment checklist

1. Deploy the verified build and confirm `heiwa.fun` permanently redirects to `www.heiwa.fun` in Vercel.
2. Test all canonical URLs, headers, `/robots.txt`, `/sitemap.xml`, and `/llms.txt` on production.
3. Submit the new sitemap in Google Search Console and request indexing for the six new content URLs.
4. Validate the homepage and article JSON-LD using Schema.org Validator and Google Rich Results Test.
5. Run mobile and desktop PageSpeed Insights on the homepage and six acquisition pages, then prioritize measured LCP, INP, and CLS findings.
