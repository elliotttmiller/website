# computeUS LLC Digital Platform

The flagship digital platform for computeUS LLC - a leading AI Engineering & Consultation firm specializing in secure, custom AI solutions on private, on-premise infrastructure.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with Global Design Tokens
- **Deployment:** Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Homepage
│   ├── services/           # Services page
│   ├── our-approach/       # Our Approach page
│   ├── case-studies/       # Case Studies (with dynamic [slug])
│   ├── insights/           # Insights (with dynamic [slug])
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── privacy-policy/     # Privacy Policy page
├── components/             # Reusable React components
│   ├── Header.tsx          # Global navigation header
│   ├── Header.module.css
│   ├── Footer.tsx          # Global footer
│   └── Footer.module.css
└── styles/
    └── globals.css         # Global styles & design tokens
```

## Sitemap

- `/` - Home
- `/services` - Services
- `/our-approach` - Our Approach
- `/case-studies` - Case Studies
- `/case-studies/[slug]` - Individual Case Study
- `/insights` - Insights
- `/insights/[slug]` - Individual Insight
- `/about` - About
- `/contact` - Contact
- `/privacy-policy` - Privacy Policy

## Brand

**computeUS LLC** - Premier AI Engineering & Consultation

### Core USP: The Private Infrastructure Advantage

1. **Absolute Data Sovereignty** - Your data never leaves your secure, private hardware
2. **Cost Predictability** - Fixed-price projects and predictable retainers
3. **Unmatched Customization** - Total control over the entire hardware and software stack
