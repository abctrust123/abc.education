# LearnHub - Education Marketplace

A modern, public-facing education marketplace UI where students can browse courses, teachers, categories, and offers. Built with a clean gradient green + white theme.

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **shadcn/ui** components (Radix UI primitives)
- **Lucide React** icons
- **Framer Motion** for subtle animations
- **React Router** for navigation
- **ESLint** with type-aware TypeScript, React, and React DOM rules

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/     # UI, layout, shared, and page-specific components
├── pages/           # Route pages (Home, Courses, Teachers, Offers, etc.)
├── data/            # Demo content (courses, teachers, categories)
├── lib/             # Utilities
└── App.tsx          # Router setup
```

## Pages

- **Home** – Hero, categories, featured courses/teachers, promo, bundles, testimonials
- **Categories** – Browse by category
- **Courses** – Listing with filters
- **Course Details** – Full course view with tabs
- **Teachers** – Teacher marketplace
- **Teacher Profile** – Public teacher profile
- **Offers** – Promotions and discounted courses
- **About** – Platform info
- **Sign Up** / **Sign In** – Auth pages (UI only)

## Design

- Primary colors: green (`#16a34a`), deep green (`#15803d`), soft green (`#dcfce7`)
- Responsive: mobile, tablet, desktop
- UI-only: no backend, auth logic, or API calls
