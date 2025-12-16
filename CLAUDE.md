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

### Project Structure
```
diecast-eds/
├── CLAUDE.md                 # This file - project documentation
├── content-models.md         # Content authoring instructions
├── import/                   # HTML files for DA.live import
│   ├── nav.html
│   ├── index.html
│   └── cars/
│       ├── beatnik-bandit-1971.html
│       ├── matchbox-mustang-1970.html
│       └── corvette-stingray-1976.html
├── blocks/                   # Custom blocks (components)
│   ├── cards/               # Car grid block (customized)
│   ├── columns/
│   ├── footer/
│   ├── fragment/
│   ├── header/              # Simplified header (customized)
│   └── hero/
├── scripts/
│   ├── aem.js               # Core EDS library (don't modify)
│   ├── scripts.js           # Site-specific JS
│   └── delayed.js           # Deferred loading
├── styles/
│   ├── styles.css           # Main styles (customized)
│   ├── fonts.css            # Empty (using system fonts)
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

### 1. GitHub Deploy Key Limitation
**Issue:** Could not push to repository - "Permission denied to deploy key"
**Cause:** The SSH key was already used as a deploy key on another repository (diecast-cstask). GitHub does not allow the same SSH key to be used as a deploy key on multiple repositories.
**Solution:** Instead of adding the key as a repository-specific deploy key, add it to your GitHub account settings (https://github.com/settings/keys). Account-level SSH keys work across all repositories the account has access to.

### 2. GitHub HTTPS vs SSH Authentication
**Issue:** `git push` failed with "Permission denied to seanathero" when the repo belonged to smcauliffe
**Cause:** HTTPS remote URL was using cached credentials for the wrong GitHub account
**Solution:** Switch to SSH remote with a host alias configured in `~/.ssh/config`:
```bash
git remote set-url origin git@github-smcauliffe:smcauliffe/diecast-eds.git
```
The SSH config uses `IdentityFile` to specify which key to use for which GitHub account.

### 3. DA.live HTML Import
**Discovery:** Instead of manually creating content in DA.live's visual editor, you can import HTML files directly. This is much faster for initial content setup.
**How:** Create semantic HTML files with the expected EDS structure (blocks as `<div class="blockname">`) and import them via DA.live's import feature.
**Files created:** `import/nav.html`, `import/index.html`, `import/cars/*.html`

### 4. CSS Lint: Selector Specificity Order
**Issue:** Stylelint error "Expected selector X to come before selector Y" (no-descending-specificity)
**Cause:** CSS selectors with lower specificity appeared after selectors with higher specificity that targeted overlapping elements
**Solution:** Reorder selectors so that more general selectors come before more specific ones. For example, `main .section h1 + p` must come before `main .section > div > p:has(picture)`.

### 5. CSS Lint: Color Function Notation
**Issue:** Stylelint errors about color notation (`rgba` vs `rgb`, `0.1` vs `10%`)
**Cause:** Stylelint enforces modern CSS color function notation
**Solution:** Use `rgb(0 0 0 / 10%)` instead of `rgba(0, 0, 0, 0.1)`. Run `npm run lint:css -- --fix` to auto-fix most issues.

### 6. CSS Lint: Complex :not() Notation
**Issue:** Stylelint error "Expected complex :not() pseudo-class notation"
**Cause:** Using multiple `:not()` selectors instead of combining them
**Solution:** Use `:not(:first-child, :has(picture))` instead of `:not(:first-child):not(:has(picture))`

### 7. Conditional Page Styling Without Classes
**Issue:** Need different `max-width` for home page (1200px with cards grid) vs detail pages (800px for readability)
**Cause:** EDS doesn't automatically add page-type classes to distinguish pages
**Solution:** Use CSS `:has()` selector to detect content:
```css
main .section:has(.cards) > div { max-width: 1200px; }
main .section:not(:has(.cards)) > div { max-width: 800px; }
```

### 8. Header Block Complexity
**Issue:** Default EDS header block has hamburger menu, nav sections, and complex responsive behavior - overkill for a simple site
**Solution:** Keep the header.js as-is (it handles loading the nav fragment), but override the CSS to hide unnecessary elements and simplify the layout:
```css
header nav .nav-hamburger,
header nav .nav-sections,
header nav .nav-tools {
  display: none;
}
```

### 9. Font Loading Performance
**Issue:** EDS boilerplate loads Roboto font files, adding extra HTTP requests
**Solution:** Switch to system font stack for better performance:
```css
--body-font-family: system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, sans-serif;
```
Empty out `fonts.css` to skip font loading entirely.

---

## Key Learnings

### Content-Driven Development (CDD)
Adobe's recommended approach for EDS development:
1. **Design content model first** — How will authors structure content in tables?
2. **Create test content** — Real content must exist before writing code
3. **Then build blocks** — Transform the HTML that EDS generates from documents

This is the opposite of traditional development where you build components first and then figure out content later.

### EDS Block Architecture
- Blocks are defined as tables in documents with the block name in the first row
- EDS converts tables to `<div class="blockname">` with nested `<div>` elements
- Block JS (`blocks/blockname/blockname.js`) transforms this HTML via DOM manipulation
- Block CSS (`blocks/blockname/blockname.css`) styles the transformed HTML
- No React, no build step — just vanilla JS and CSS

### DA.live vs Google Docs/SharePoint
- DA.live is Adobe's own document authoring interface for EDS
- Alternative to Google Docs or SharePoint
- Supports HTML import for faster content setup
- Same preview/publish workflow as other authoring options

### CSS :has() Selector
Modern CSS feature that enables parent/ancestor selection based on children. Very useful in EDS for:
- Conditional styling based on content type
- Detecting presence of blocks without adding classes
- Styling wrapper elements based on their contents

### Dark Mode Implementation
Use CSS custom properties with `prefers-color-scheme` media query:
```css
:root { --background-color: #fff; }
@media (prefers-color-scheme: dark) {
  :root { --background-color: #0a0a0a; }
  html { color-scheme: dark; }
}
```
The `color-scheme: dark` declaration helps browser UI elements (scrollbars, form controls) match the dark theme.

---

## Lighthouse Scores (EDS)

*(To be measured after deployment)*

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Home | - | - | - | - |
| Car Detail | - | - | - | - |

---

## Comparison Summary

*(Lighthouse scores to be completed after deployment)*

| Aspect | Next.js + Contentstack | EDS + Document Authoring |
|--------|------------------------|--------------------------|
| **Performance (Home)** | 100 | - |
| **Performance (Detail)** | 100 | - |
| **Accessibility** | 95 | - |
| **Best Practices** | 100 | - |
| **SEO** | 100 | - |
| | |
| **Build Step** | Required (`npm run build`) | None (direct publishing) |
| **Environment Variables** | 3 required (API keys) | None |
| **Content Authoring** | Contentstack CMS UI | DA.live / Google Docs / Word |
| **Content Storage** | Contentstack cloud | GitHub repo (via AEM sync) |
| **Deployment** | Vercel | Adobe CDN (automatic) |
| **Local Development** | `npm run dev` | `aem up` |
| **Framework** | React (Next.js) | Vanilla JS |
| **CSS Approach** | CSS Modules or global CSS | Block-scoped CSS files |
| **Code Complexity** | React components, API integration | DOM manipulation, CSS |
| **Learning Curve** | React knowledge required | HTML/CSS/vanilla JS |

---

## Useful Resources

### Adobe EDS Documentation
- **Main docs**: https://www.aem.live/docs/
- **Developer tutorial**: https://www.aem.live/developer/tutorial
- **Block anatomy**: https://www.aem.live/developer/markup-sections-blocks
- **AI coding agents guide**: https://www.aem.live/developer/ai-coding-agents
- **Keeping it 100 (performance)**: https://www.aem.live/developer/keeping-it-100

### Block References
- **Block Collection** (Adobe-maintained): https://github.com/adobe/aem-block-collection
- **Block Party** (community): https://github.com/adobe/block-party

### Tools
- **AEM CLI**: `npm install -g @adobe/aem-cli`
- **AEM Sidekick**: Chrome extension for preview/publish
- **DA.live**: https://da.live

### Claude Code Skills for EDS
Adobe provides Claude skills for EDS development:
- https://github.com/adobe/helix-website/tree/main/.claude/skills
- Skills include: building-blocks, content-modeling, content-driven-development, block-collection-and-party
