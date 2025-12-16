# Content Models for Diecast Collection

This document describes how to structure content in DA.live to create the Diecast Collection site.

---

## 1. Navigation (`/nav`)

The navigation fragment is loaded by the header block. Create a document at `/nav`.

### Structure

```
┌─────────────────────────────────┐
│ Diecast Collection              │  ← Link to /
└─────────────────────────────────┘
```

### In DA.live

Simply create a paragraph with a link:

**[Diecast Collection](/)**

The header block will pick this up as the brand/logo area.

---

## 2. Home Page (`/index`)

The home page displays the car collection grid using a **Cards** block.

### Structure

```
Diecast Collection                    ← H1 heading (page title)

┌─────────────────────────────────────────────────────────────┐
│ Cards                                                        │  ← Block name
├─────────────────────────────────────────────────────────────┤
│ [car-image-1.jpg]  │ **1971 Hot Wheels Beatnik Bandit**     │
│                    │ Hot Wheels · 1971                       │
│                    │ [Link: /cars/beatnik-bandit-1971]       │
├─────────────────────────────────────────────────────────────┤
│ [car-image-2.jpg]  │ **1970 Matchbox Ford Mustang**          │
│                    │ Matchbox · 1970                         │
│                    │ [Link: /cars/matchbox-mustang-1970]     │
├─────────────────────────────────────────────────────────────┤
│ [car-image-3.jpg]  │ **1976 Hot Wheels Corvette Stingray**   │
│                    │ Hot Wheels · 1976                       │
│                    │ [Link: /cars/corvette-stingray-1976]    │
└─────────────────────────────────────────────────────────────┘
```

### In DA.live

1. Add an H1: `Diecast Collection`

2. Create a table with header row `Cards`:

| Cards |  |
|-------|--|
| ![Beatnik Bandit](image-url) | **[1971 Hot Wheels Beatnik Bandit](/cars/beatnik-bandit-1971)**<br>Hot Wheels · 1971 |
| ![Matchbox Mustang](image-url) | **[1970 Matchbox Ford Mustang](/cars/matchbox-mustang-1970)**<br>Matchbox · 1970 |
| ![Corvette Stingray](image-url) | **[1976 Hot Wheels Corvette Stingray](/cars/corvette-stingray-1976)**<br>Hot Wheels · 1976 |

### Content Model Details

| Cell | Content | Notes |
|------|---------|-------|
| Column 1 | Image | Car photo, will be displayed at 4:3 aspect ratio |
| Column 2 | Title + Meta | Bold title as link, then brand · year on next line |

---

## 3. Car Detail Pages (`/cars/{slug}`)

Each car gets its own page. Create documents at:
- `/cars/beatnik-bandit-1971`
- `/cars/matchbox-mustang-1970`
- `/cars/corvette-stingray-1976`

### Structure (Default Content - No Special Block)

```
← Back to Collection                  ← Link to /

[car-image-large.jpg]                 ← Hero image

1971 Hot Wheels Beatnik Bandit        ← H1 heading

Hot Wheels · 1971                     ← Metadata line

Description paragraph text here...    ← Rich text description
More paragraphs as needed...
```

### In DA.live

1. Add a paragraph with back link: `[← Back to Collection](/)`

2. Add the car image (large, will display at 16:9)

3. Add H1 with car title: `1971 Hot Wheels Beatnik Bandit`

4. Add metadata paragraph: `Hot Wheels · 1971`

5. Add description paragraphs

### Example: Beatnik Bandit Page

```
[← Back to Collection](/)

![1971 Hot Wheels Beatnik Bandit](beatnik-bandit.jpg)

# 1971 Hot Wheels Beatnik Bandit

Hot Wheels · 1971

The Beatnik Bandit was one of the original "Sweet Sixteen" Hot Wheels cars
released in 1968, designed by Ed "Big Daddy" Roth. This 1971 redline version
features the classic spectraflame paint and redline wheels that collectors prize.

The design showcases Roth's signature style with its bubble top canopy and
wild proportions. This particular model represents the golden age of Hot Wheels
when the brand was revolutionizing the die-cast car market.
```

---

## 4. Footer (`/footer`)

Optional - create if you want footer content.

### Structure

```
┌─────────────────────────────────┐
│ © 2024 Diecast Collection       │
└─────────────────────────────────┘
```

---

## Content Checklist

### Required Documents
- [ ] `/nav` - Navigation with site title link
- [ ] `/index` - Home page with Cards block
- [ ] `/cars/beatnik-bandit-1971` - Car detail page
- [ ] `/cars/matchbox-mustang-1970` - Car detail page
- [ ] `/cars/corvette-stingray-1976` - Car detail page

### Required Assets
- [ ] Beatnik Bandit image
- [ ] Matchbox Mustang image
- [ ] Corvette Stingray image

---

## Sample Car Data

### 1. 1971 Hot Wheels Redline Beatnik Bandit
- **Slug**: `beatnik-bandit-1971`
- **Brand**: Hot Wheels
- **Year**: 1971
- **Description**: The Beatnik Bandit was one of the original "Sweet Sixteen" Hot Wheels cars released in 1968, designed by Ed "Big Daddy" Roth. This 1971 redline version features the classic spectraflame paint and redline wheels that collectors prize. The design showcases Roth's signature style with its bubble top canopy and wild proportions.

### 2. 1970 Matchbox Superfast Ford Mustang
- **Slug**: `matchbox-mustang-1970`
- **Brand**: Matchbox
- **Year**: 1970
- **Description**: This 1970 Matchbox Superfast Ford Mustang represents Matchbox's response to Hot Wheels' speed-focused designs. The Superfast line featured low-friction wheels that could compete with Hot Wheels on orange track. This Mustang captures the muscle car era perfectly.

### 3. 1976 Hot Wheels Flying Colors Corvette Stingray
- **Slug**: `corvette-stingray-1976`
- **Brand**: Hot Wheels
- **Year**: 1976
- **Description**: The 1976 Flying Colors Corvette Stingray showcases Hot Wheels' transition from redlines to the colorful tampo-printed designs of the mid-70s. This Corvette features the iconic Stingray body style with eye-catching graphics that defined the Flying Colors era.

---

## Notes for Block Development

After content is created, the code will need to:

1. **Cards block**: Style to match Next.js site
   - 4:3 aspect ratio images
   - Bold title as link
   - Brand displayed as red badge
   - Year in gray text
   - Hover effect (lift + shadow)
   - Responsive grid layout

2. **Car detail pages**: Style default content
   - Back link styling (gray, hover red)
   - Hero image at 16:9 aspect ratio
   - Title styling
   - Brand badge styling
   - Description text styling

3. **Header**: Simplify to match Next.js site
   - Gray background
   - Simple title link
   - No hamburger menu needed (single page nav)
