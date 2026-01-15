# GLINLABS - Architecture & Design

Visual guide to the GLINLABS project structure and design patterns.

## Project Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser / Client Side                 │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│           Next.js 14 Application (App Router)            │
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │  layout.tsx (Root Layout)                        │   │
│  │  - Imports Navbar & Footer globally              │   │
│  │  - Metadata configuration                        │   │
│  │  - Tailwind styles (globals.css)                 │   │
│  └──────────────────────────────────────────────────┘   │
│                         │                                │
│                         ▼                                │
│  ┌──────────────────────────────────────────────────┐   │
│  │         Route Pages (Page Router)                │   │
│  ├──────────────────────────────────────────────────┤   │
│  │ • / (page.tsx)          - Home                   │   │
│  │ • /services (page.tsx)  - Services               │   │
│  │ • /learn (page.tsx)     - Learning               │   │
│  │ • /glinai (page.tsx)    - AI Chat                │   │
│  │ • /pricing (page.tsx)   - Pricing                │   │
│  │ • /login (page.tsx)     - Authentication         │   │
│  └──────────────────────────────────────────────────┘   │
│                         │                                │
│          ┌──────────────┴──────────────┐               │
│          ▼                             ▼               │
│  ┌──────────────────┐        ┌──────────────────┐     │
│  │  Components/     │        │  lib/ (Shared)   │     │
│  │  Navbar.tsx      │        │  - constants.ts  │     │
│  │  Footer.tsx      │        │  - types.ts      │     │
│  │  (No DB needed)  │        │  - utils.ts      │     │
│  └──────────────────┘        └──────────────────┘     │
└──────────────────────────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│              Vercel (Deployment Target)                  │
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Edge Network / CDN                              │   │
│  └──────────────────────────────────────────────────┘   │
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Next.js Runtime                                 │   │
│  │  - SSR / Static Generation                       │   │
│  │  - API Routes (future)                           │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
RootLayout
├── Navbar (Client Component)
│   ├── Logo
│   ├── Desktop Navigation
│   │   ├── Home Link
│   │   ├── Services Link
│   │   ├── Learn Link
│   │   ├── GlinAI Link
│   │   ├── Pricing Link
│   │   └── Login Button
│   └── Mobile Menu (Hamburger)
│       └── Mobile Navigation (conditional)
│
├── Main Content (children)
│   ├── Home Page
│   │   ├── Hero Section
│   │   └── Features Grid (3 cards)
│   ├── Services Page
│   │   ├── Hero
│   │   ├── Service Cards
│   │   └── CTA Section
│   ├── Learn Page
│   │   ├── Hero
│   │   └── Article Cards
│   ├── GlinAI Page
│   │   ├── Hero
│   │   └── Chat Interface
│   ├── Pricing Page
│   │   ├── Hero
│   │   ├── Pricing Cards
│   │   └── FAQ Section
│   └── Login Page
│       ├── Login Form
│       ├── Social Login
│       └── Sign-up Link
│
└── Footer
    ├── Company Info
    ├── Quick Links
    ├── Resources
    └── Legal
```

## Data Flow Diagram

```
User Browser
    │
    ├─► Click Link
    │   └─► Next.js Router (App Router)
    │       └─► Load page.tsx
    │           ├─► Render Components
    │           ├─► Apply Styles (Tailwind)
    │           └─► Display in Browser
    │
    ├─► Type Message (GlinAI page)
    │   └─► React State (useState)
    │       └─► Simulate Response
    │           └─► Update UI
    │
    └─► Click Button
        └─► Navigate to New Route
            └─► [Repeat]
```

## File Organization Pattern

```
app/
├── Root
│   ├── layout.tsx           (Wrapper for all routes)
│   ├── page.tsx             (Home route /)
│   ├── globals.css          (Global styles)
│   └── [feature]/
│       └── page.tsx         (Route: /feature)
│
components/
├── Navbar.tsx               (Reusable, Client)
├── Footer.tsx               (Reusable, Server)
└── [Feature]/
    └── Component.tsx        (Feature-specific)
│
lib/
├── constants.ts             (App-wide values)
├── types.ts                 (TypeScript types)
└── utils.ts                 (Helper functions)
│
Configuration (Root)
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .eslintrc.json
```

## Styling Architecture

```
Global Styles
└── app/globals.css
    ├── @tailwind directives
    ├── Base reset styles
    └── Custom utilities

Component Styles
└── JSX className (Tailwind)
    ├── Layout classes (flex, grid)
    ├── Spacing (p, m, gap)
    ├── Colors (bg, text, border)
    ├── Responsive (md:, lg:)
    └── Interactive (hover, focus, active)

Tailwind Configuration
└── tailwind.config.js
    ├── Content paths
    ├── Custom colors
    └── Theme extensions
```

## TypeScript Type Flow

```
User Input
    │
    ▼
React Component
    │
    ├─► Import types from lib/types.ts
    │
    ├─► Define props: interface/type
    │
    ├─► Validate with TypeScript
    │
    └─► Render JSX
        │
        └─► Check with TypeScript Compiler
            │
            └─► tsc --noEmit (compile check)
                │
                └─► npm run type-check ✓
```

## Deployment Pipeline

```
Local Development
    │
    ├─► npm run dev       (Development server)
    │
    ├─► npm run build     (Production build)
    │   └─► .next folder created
    │
    └─► Git commit & push
        │
        ▼
    GitHub Repository
        │
        ├─► Webhook triggers
        │
        ▼
    Vercel CI/CD
        │
        ├─► npm install
        ├─► npm run build
        ├─► npm run type-check (optional)
        │
        ▼
    Vercel Edge Network
        │
        ├─► Global CDN
        ├─► Serverless Functions
        └─► Custom Domain
            │
            ▼
        Browser
```

## Request Flow

```
GET Request to /
    │
    ▼
Vercel Edge Network
    │
    ├─► Check CDN Cache
    │
    ├─► Route to Next.js Handler
    │
    ├─► Load app/page.tsx
    │   ├─► Import Components
    │   ├─► Import Styles
    │   ├─► Generate HTML (RSC)
    │   │
    │   └─► Send to Browser
    │
    ▼
Browser Renders
    │
    ├─► Parse HTML
    ├─► Load CSS (Tailwind)
    ├─► Hydrate React (if needed)
    │
    └─► Display Page
```

## State Management

```
Page Component (e.g., GlinAI)
    │
    ├─► useState (messages)
    ├─► useState (input)
    ├─► useState (isLoading)
    │
    ├─► onChange handlers
    ├─► onSubmit handlers
    │
    └─► Render with state
        │
        └─► Display messages
            └─► Update on interaction
```

## Responsive Design Breakpoints

```
Mobile First Approach

480px (phone)
│
├─► 1-column layout
├─► Small padding
├─► Hamburger menu
│
▼
768px (tablet) - md: prefix
│
├─► 2-column layout
├─► Medium padding
├─► Show desktop menu
│
▼
1024px (desktop) - lg: prefix
│
├─► 3-column layout
├─► Full padding
├─► Complete features
│
▼
1280px (wide) - xl: prefix
│
└─► Max width container
```

## Component Characteristics

```
Navbar.tsx
├─► 'use client'                    (Client component)
├─► useState (mobile menu)          (Client-side state)
├─► Responsive hamburger menu       (Mobile optimization)
├─► Sticky positioning              (Always visible)
└─► Navigation links from constants (DRY principle)

Footer.tsx
├─► Server component (default)      (No 'use client')
├─► Static content                  (No state needed)
├─► Multiple link sections          (Organized footer)
└─► Dynamic year                    (JS execution)

Page Components
├─► Server components (default)     (SSR efficient)
├─► No 'use client' unless needed   (Performance)
├─► Some exceptions (GlinAI, Login) (Interactive)
└─► Styled with Tailwind CSS        (Utility first)
```

## Performance Optimization

```
Next.js Built-in
├─► Code Splitting
│   └─► Each route = separate bundle
│
├─► Image Optimization
│   └─► next/image for responsive images
│
├─► Dynamic Imports
│   └─► Lazy load components
│
└─► Production Build
    └─► npm run build optimizes

Tailwind Optimization
├─► CSS Purging
│   └─► Only used classes in output
│
└─► Small bundle size
    └─► No unused CSS

Browser Caching
├─► Static assets cached
├─► HTML cached on CDN
└─► Revalidation on demand
```

## Security Model

```
Input Validation
├─► Type checking (TypeScript)
├─► Form validation (React)
└─► No Backend = No Data Risk

Secrets Management
├─► .env.local not committed
├─► .env.example for reference
└─► Vercel env vars (secure)

SSR Safety
├─► Never expose secrets in JSX
├─► Use NEXT_PUBLIC_ for public values
└─► Check .gitignore for secrets
```

---

## Summary

**GLINLABS** follows a **modern, scalable architecture**:

✅ **Next.js 14 App Router** - Latest routing
✅ **React 18** - Latest features  
✅ **TypeScript** - Type safe
✅ **Tailwind CSS** - Utility styling
✅ **Vercel Ready** - Optimized deployment
✅ **Component Based** - Reusable pieces
✅ **DRY Principles** - Constants centralized
✅ **Responsive** - Mobile first
✅ **Performance** - Optimized for speed
✅ **Security** - No exposed secrets

This architecture supports:
- Easy customization
- Quick development
- Efficient deployment
- Future scaling
- Team collaboration

**Ready to build!** 🚀
