# Diecast Collection - Edge Delivery Services

## Project Overview
This is **Approach 2** of a comparison study between two headless CMS approaches for a vintage diecast car blog:
1. **Contentstack + Next.js + Vercel** — [Completed](https://diecast-cstask.vercel.app/) | [Repo](https://github.com/smcauliffe/diecast-cstask)
2. **Adobe Document Authoring + Edge Delivery Services** — This project

Goal: Compare Lighthouse scores and developer experience between the two approaches.

## Key Constraints
- **Vanilla CSS only** — No Tailwind or CSS frameworks (fair Lighthouse comparison)
- **Minimal scope** — Basic blog functionality only
- **Visual parity** — Must look and function exactly like the Next.js site

---

## Claude Instructions
- **Never push to git** — Only the user pushes. Claude can commit but must wait for the user to push.

---

## URLs

| Environment | URL |
|-------------|-----|
| Content Authoring (DA.live) | https://da.live/#/smcauliffe/diecast-eds |
| Preview | https://main--diecast-eds--smcauliffe.aem.page/ |
| Live | https://main--diecast-eds--smcauliffe.aem.live/ |

---

## Target: Next.js Site Reference

The EDS site must replicate this functionality:

### Pages
1. **Home page** (`/`) — Grid of car cards with image, title, brand badge, year
2. **Car detail page** (`/cars/[slug]`) — Full car details with back link

### Content Model: Car
| Field | Type | Description |
|-------|------|-------------|
| title | text | Car name |
| slug | text | URL identifier |
| main_image | image | Photo |
| description | rich text | Details |
| year | number | Year manufactured |
| brand | select | Hot Wheels / Matchbox / Other |

### Sample Data (3 entries)
1. 1971 Hot Wheels Redline Beatnik Bandit (`beatnik-bandit-1971`)
2. 1970 Matchbox Superfast Ford Mustang (`matchbox-mustang-1970`)
3. 1976 Hot Wheels Flying Colors Corvette Stingray (`corvette-flying-colors-1976`)

### Baseline Lighthouse Scores (Next.js site, Mobile)
| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Home | 100 | 95 | 100 | 100 |
| Car Detail | 100 | 95 | 100 | 100 |

---

## Edge Delivery Services Notes

### Content Authoring with DA.live
DA.live (Document Authoring) is Adobe's web-based content editor for Edge Delivery Services. Content created in DA.live is automatically synced and available at the preview URL.

**Workflow:**
1. Create/edit content at https://da.live/#/smcauliffe/diecast-eds
2. Preview changes at https://main--diecast-eds--smcauliffe.aem.page/
3. Publish to live at https://main--diecast-eds--smcauliffe.aem.live/

### Project Structure (EDS Boilerplate)
```
diecast-eds/
├── CLAUDE.md                 # This file
├── blocks/                   # Custom blocks (components)
│   ├── cards/
│   ├── columns/
│   ├── footer/
│   ├── fragment/
│   ├── header/
│   └── hero/
├── scripts/
│   ├── aem.js               # Core EDS library
│   ├── scripts.js           # Site-specific JS
│   └── delayed.js           # Deferred loading
├── styles/
│   ├── styles.css           # Main styles
│   ├── fonts.css            # Font definitions
│   └── lazy-styles.css      # Deferred styles
├── head.html                # Custom <head> content
├── 404.html                 # Error page
└── icons/                   # SVG icons
```

### How EDS Works
- **Document-based authoring**: Content is authored in DA.live, Google Docs, or Microsoft Word
- **No build step**: Content is served directly from documents via CDN
- **Blocks**: Reusable components defined as tables in documents
- **Code Sync**: GitHub repo syncs code (blocks, scripts, styles) automatically

### Local Development
```bash
npm install -g @adobe/aem-cli
aem up  # Opens http://localhost:3000
```

### Content-Driven Development (CDD) Principles
Per Adobe's AI coding agent guidelines (https://www.aem.live/developer/ai-coding-agents):

1. **Author needs come before developer needs** — Design content models for easy authoring, even if it increases code complexity
2. **Start with content, not code** — Test content must exist before block development begins
3. **Content modeling is an art** — Four model types: Standalone, Collection, Configuration, Auto-Blocked
4. **Table structure constraints** — Maximum 4 cells per row, semantic formatting, use variants over config cells
5. **Reference existing blocks** — Check Block Collection and Block Party before building new blocks

### Block Development Workflow
1. Design content model (how authors will structure content in tables)
2. Create test content in DA.live
3. Search Block Collection/Party for similar implementations
4. Create block directory (`blocks/{name}/`) with JS and CSS
5. Transform HTML using DOM APIs (vanilla JS only)
6. Apply scoped, responsive CSS (mobile-first)
7. Test and document

---

## Content Models

See `content-models.md` for detailed authoring instructions including:
- Navigation structure (`/nav`)
- Home page with Cards block (`/index`)
- Car detail page structure (`/cars/{slug}`)
- Sample car data and descriptions

---

## Implementation Progress

### Phase 1: Setup
- [x] Verify GitHub + AEM Code Sync integration
- [x] Set up DA.live for content authoring
- [x] Connect content source to EDS project
- [x] Design content models

### Phase 2: Content Structure
- [x] Create `/nav` document
- [x] Create `/index` home page with Cards block
- [x] Create `/cars/beatnik-bandit-1971`
- [x] Create `/cars/matchbox-mustang-1970`
- [x] Create `/cars/corvette-stingray-1976`

**Note:** HTML files for import are in `/import/` folder.

### Phase 3: Styling
- [x] Match header styling (simplified gray bar)
- [x] Match car grid layout (cards block)
- [x] Match car card styling (image, title, hover effects)
- [x] Match car detail page layout (back link, hero image, meta)
- [x] Implement dark mode support
- [x] Update color palette and typography to match Next.js site
- [x] Switch to system fonts (removed Roboto)

### Phase 4: Testing
- [ ] Run Lighthouse tests
- [ ] Compare scores with Next.js baseline
- [ ] Document findings

---

## Issues Encountered & Solutions

*(To be documented as we build)*

---

## Lighthouse Scores (EDS)

*(To be measured after deployment)*

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Home | - | - | - | - |
| Car Detail | - | - | - | - |

---

## Comparison Summary

*(To be completed after both implementations)*

| Metric | Next.js + Contentstack | EDS + Document Authoring |
|--------|------------------------|--------------------------|
| Performance (Home) | 100 | - |
| Performance (Detail) | 100 | - |
| Build complexity | npm install, env vars | - |
| Content authoring | CMS UI | - |
| Deployment | Vercel | - |
