# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/blog built with Eleventy (11ty) v0.12.1, a static site generator. The site includes blog posts, a DJ page, research articles, and various other content pages. Content is written in Markdown with Liquid templating.

## Development Commands

### Local Development
```bash
# Standard development server
npx @11ty/eleventy --serve
# View at http://localhost:8080/

# Debug mode (shows Eleventy debug output)
DEBUG=Eleventy* npx @11ty/eleventy --serve

# Production mode (applies publishing filters)
ELEVENTY_ENV=prod npx @11ty/eleventy --serve
```

### Deployment
The site auto-deploys to Netlify on push to master:
```bash
git add .
git commit -m "message"
git push
```

### Troubleshooting
If changes don't update, delete the `_site` folder and restart the dev server.

## Architecture

### Directory Structure
- `src/` - Source files (input directory)
  - `blog/*.md` - Blog post markdown files
  - `_includes/` - Reusable templates and components
    - `components/` - Liquid components (postlist, forms, etc.)
    - `pages/` - Page layout templates (post.liquid, listpage.liquid, page.liquid)
    - `shortcodes/` - JavaScript shortcodes for complex layouts
    - `js/` - JavaScript utilities (filtering.js)
  - `_data/` - Global data files (env.js provides environment config)
  - `css/` - Stylesheets
  - `files/` - Static assets (PDFs, images)
- `_site/` - Generated output (git-ignored, auto-built)
- `.eleventy.js` - Main Eleventy configuration

### Content Publishing System

Blog posts use front matter flags to control visibility:
- `published: false` - Completely hidden (not rendered at all)
- `published: true, unlisted: true` - Accessible via direct URL but hidden from listings
- `published: true` - Fully visible in all listings

In production mode (`ELEVENTY_ENV=prod`), the `removeUnpublished` and `removeUnlisted` filters automatically hide unpublished/unlisted posts from listings. In dev mode, all posts are visible (drafts shown with gray styling).

The `popularity: 5` front matter flag adds a flame icon to highlight "hot" articles.

### Eleventy Configuration (.eleventy.js)

Key features:
- **Custom Filters**: `sortByOrder`, `removeUnpublished`, `removeUnlisted`, `mostRelated` (uses Dice coefficient for content similarity)
- **Custom Shortcodes**:
  - `{% include_js %}`, `{% include_css %}`, `{% include_html %}` - Inline content
  - `{% spiel_and_piccy %}`, `{% piccy_and_spiel %}` - Layout helpers for text+image
  - `{% youtube %}`, `{% streamable %}`, `{% vimeo %}` - Video embeds
  - `{% social_link %}` - Social media icons
  - `{% callout %}` - Styled callout boxes with markdown support
  - `{% detail_summary_drop_down %}` - Collapsible sections
- **Transforms**: Auto-adds `loading="lazy"` to all images using JSDOM
- **Markdown**: Uses markdown-it with HTML enabled, code blocks disabled
- **Syntax Highlighting**: Prism.js via @11ty/eleventy-plugin-syntaxhighlight

### Collections & Templates

The site uses Eleventy collections (`collections.blog`, `collections.research`) which are filtered in templates based on `env.isProd`. The `postlist.liquid` component conditionally renders blog or research posts depending on the page slug.

The `mostRelated` filter (in `src/_includes/js/filtering.js`) uses Dice coefficient string similarity to find related posts based on fileSlug, title, blurb, and image metadata.

### Environment Variables

Environment config is centralized in `src/_data/env.js`:
- `ELEVENTY_ENV=prod` enables production mode
- Production URL: https://tglyn.ch
- Dev URL: http://localhost:8080
