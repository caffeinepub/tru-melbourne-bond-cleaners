# Tru Melbourne Bond Cleaners

## Current State
- 4-page site: Home, Services, About, Contact
- Header with 4 nav links
- SEO meta tags on index.html (global)
- No suburb-specific pages
- Existing images: hero, service cards, logo

## Requested Changes (Diff)

### Add
- 10 suburb-specific pages, each with:
  - Unique URL path (e.g. /suburbs/south-yarra)
  - Per-page SEO: `<title>`, `<meta name="description">`, `<meta name="keywords">`, OG tags (injected via react-helmet or dynamic document title pattern)
  - Branded hero image for each suburb with descriptive alt text
  - 400-word semantically optimised body copy about bond cleaning in that suburb, written in plain English (10-year-old readability), active voice, Australian English
  - CTA section with WhatsApp link and contact form link
  - A "What's included" checklist card
- Suburbs covered: South Yarra, Richmond, St Kilda, Fitzroy, Carlton, Collingwood, Hawthorn, Prahran, Toorak, Docklands
- A /suburbs index page listing all 10 suburbs with cards
- "Suburbs" navigation link added to Header

### Modify
- Header: add "Suburbs" nav link
- App.tsx: add /suburbs and /suburbs/:suburb routes

### Remove
- Nothing removed

## Implementation Plan
1. Generate 2-3 suburb hero images (shared/reused across suburb pages for practicality)
2. Create SuburbPage.tsx reusable component that accepts suburb data
3. Create suburbs-data.ts with all 10 suburb objects (name, slug, seo, body copy, image)
4. Create SuburbsIndexPage.tsx listing all suburbs
5. Update App.tsx to add routes
6. Update Header.tsx to add Suburbs nav link
