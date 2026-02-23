# Site Audit – Answers (sikkimgamelogin.com)

This document answers common audit questions about the Sikkim Game SEO site.

---

## 1. How many pages/posts does the site have, and what type of content are they?

**Total: 38 content pages** (excluding utility routes `sitemap.xml` and `robots.txt`).

### By type

| Type | Count | Examples |
|------|--------|----------|
| **Login / Register (CTA + guides)** | 2 | `/login`, `/register` |
| **Guides** | 3 | `/guide`, `/sikkim-game-register-bonus-guide`, `/sikkim-game-login-guide` |
| **Bonus / promo** | 4 | `/bonus`, `/gift-code`, `/invite-code`, `/referral` |
| **Keyword landing pages** (`/k/`) | 17 | `/k/sikkim-game-5000-bonus`, `/k/sikkim-game-apk`, `/k/sikkim-game-login`, etc. |
| **Trust / legitimacy** | 2 | `/real-or-fake`, `/safe-or-not` |
| **Support / legal / policy** | 5 | `/contact`, `/faqs`, `/customer-support`, `/withdrawal`, `/kyc`, `/privacy` |
| **About** | 1 | `/about-sikkim-game` |
| **Blog** | 1 | `/blogs` (listing page; links to 2 guide posts) |
| **Download** | 1 | `/download` |
| **Home** | 1 | `/` (index) |

**Note:** The sitemap currently lists only **11 URLs** (home, guide, login, register, blogs, 2 guide slugs, about, contact, faqs, privacy). The **17 `/k/` keyword pages** and several other routes (e.g. bonus, download, withdrawal, kyc, referral, gift-code, invite-code, real-or-fake, safe-or-not, customer-support) are **not** in the sitemap and may be under-indexed.

---

## 2. Was content AI-generated or scraped/copied?

- **No scraping in the codebase.** There are no scrapers, external content fetchers, or copy-paste from other domains in the project.
- **Content is written specifically for this site:** same components (`PageLayout`, `getPageSEO`), shared FAQ/data files (`lib/faq-data.ts`), and consistent structure (H1 → intro → steps/sections → FAQs → internal links).
- **Keyword pages (`/k/*)`** follow a clear template: unique SEO meta + short, repetitive body (e.g. “Sikkim Game ₹5000 bonus… eligibility… terms…”). That pattern is typical of **templated or AI-assisted content**, but the repo does not record whether it was written by a human, AI, or both.

**Summary:** Original to this site; no evidence of scraping. Likely templated and/or AI-assisted; cannot be confirmed from code alone.

---

## 3. What affiliate program is being promoted?

- **Brand:** **Sikkim Game** (gaming / prediction / lottery-style platform: WinGo, Aviator, Big-Small, etc.).
- **Destination:** Official registration URL **`https://www.sikkimgg.cc/#/register?invitationCode=384636381064`** (used in CTA buttons and guides).
- **Model:** Invite/referral code **384636381064** is embedded in register links, so the site is acting as an **affiliate/referral** channel for Sikkim Game (sikkimgg.cc), not a separate “casino brand” — it promotes this single gaming brand.

---

## 4. What CMS are you using?

- **No traditional CMS.** The site is a **Next.js 14** (React) app.
- **Content is in code:** pages are `.tsx` files under `pages/`, with shared config in `lib/` (e.g. `seo-config.ts`, `faq-data.ts`). No WordPress, Strapi, or other CMS; no database-driven posts.

---

## 5. Current site structure – what pages exist?

### Root-level routes

| Path | Purpose |
|------|--------|
| `/` | Home |
| `/login` | Login guide + CTA |
| `/register` | Registration guide + CTA |
| `/guide` | Main Sikkim Game guide |
| `/sikkim-game-register-bonus-guide` | Register + ₹500 bonus guide |
| `/sikkim-game-login-guide` | Login guide (blog-style) |
| `/bonus` | Bonus info |
| `/download` | Download/APK info |
| `/blogs` | Blog index (2 linked guides) |
| `/faqs` | FAQ page |
| `/contact` | Contact |
| `/about-sikkim-game` | About Sikkim Game |
| `/privacy` | Privacy policy |
| `/gift-code` | Gift code info |
| `/invite-code` | Invite code info |
| `/referral` | Referral program |
| `/customer-support` | Support info |
| `/withdrawal` | Withdrawal guide |
| `/kyc` | KYC info |
| `/real-or-fake` | Legitimacy / “real or fake” |
| `/safe-or-not` | Safety / “safe or not” |

### Keyword subfolder `/k/`

| Path | Purpose |
|------|--------|
| `/k/sikkim-gaming` | Keyword: Sikkim Gaming |
| `/k/sikkim-game` | Keyword: Sikkim Game |
| `/k/sikkim-game-register` | Keyword: Register |
| `/k/sikkim-game-logo` | Keyword: Logo |
| `/k/sikkim-game-login` | Keyword: Login |
| `/k/sikkim-game-lottery` | Keyword: Lottery |
| `/k/sikkim-game-online` | Keyword: Online |
| `/k/sikkim-game-download` | Keyword: Download |
| `/k/sikkim-game-link-2025` | Keyword: Link 2025 |
| `/k/sikkim-game-download-app` | Keyword: Download app |
| `/k/sikkim-game-apk` | Keyword: APK |
| `/k/sikkim-game-5000-bonus` | Keyword: ₹5000 bonus |
| `/k/sikkim-game-40-bonus` | Keyword: ₹40 bonus |
| `/k/sikkim-game-30-bonus` | Keyword: ₹30 bonus |
| `/k/sikkim-game-100-deposit` | Keyword: ₹100 deposit |
| `/k/sikkim-game-100-deposit-screenshot` | Keyword: ₹100 deposit screenshot |
| `/k/sikkim-game-2025` | Keyword: 2025 |

### Utility routes (not content pages)

| Path | Purpose |
|------|--------|
| `/sitemap.xml` | XML sitemap (currently 11 URLs) |
| `/robots.txt` | Crawler instructions |

---

## Summary

| Question | Answer |
|----------|--------|
| **Page count** | 38 content pages (22 main + 17 under `/k/`; sitemap has 11) |
| **Content types** | Guides, login/register CTAs, bonus/promo, keyword pages, trust, support, about, blog index, download |
| **Content source** | Written for this site; no scraping; likely templated/AI-assisted |
| **Affiliate program** | Sikkim Game (sikkimgg.cc), invite code 384636381064 |
| **CMS** | None – Next.js (React) with content in code |
| **Site structure** | As in tables above; consider adding all public URLs to the sitemap |
