# GLINLABS Setup Guide

Quick start guide for developing GLINLABS locally.

## Prerequisites

- **Node.js**: 18.17 or higher (check with `node --version`)
- **npm**: 9 or higher (check with `npm --version`)
- **Git**: for version control

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:3000`

You should see the GLINLABS home page!

## Project Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## Project Structure

```
glinlabstest1/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page (/)
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── globals.css          # Global styles
│   ├── services/page.tsx    # Services page (/services)
│   ├── learn/page.tsx       # Learn page (/learn)
│   ├── glinai/page.tsx      # GlinAI page (/glinai)
│   ├── pricing/page.tsx     # Pricing page (/pricing)
│   └── login/page.tsx       # Login page (/login)
│
├── components/              # React components
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer
│
├── lib/                     # Utilities & constants
│   ├── utils.ts            # Helper functions
│   ├── constants.ts        # App constants
│   └── types.ts            # TypeScript types
│
├── public/                 # Static assets (images, icons, etc.)
│
├── Configuration Files
│   ├── package.json        # Dependencies & scripts
│   ├── tsconfig.json       # TypeScript configuration
│   ├── next.config.js      # Next.js configuration
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── postcss.config.js   # PostCSS configuration
│   └── vercel.json         # Vercel deployment config
│
└── Documentation
    ├── README.md           # Full documentation
    ├── SETUP.md            # This file
    ├── .env.example        # Environment variables template
    └── .eslintrc.json      # ESLint rules
```

## Pages Overview

### Home (/)
- Hero section with main value proposition
- Feature cards
- Call-to-action buttons

### Services (/services)
- Service descriptions
- Feature lists
- Contact CTA

### Learn (/learn)
- Educational content placeholder
- Article cards layout
- Coming soon announcement

### GlinAI (/glinai)
- Interactive chat interface
- Real-time message display
- Simulated AI responses

### Pricing (/pricing)
- Three-tier pricing model
- Feature comparison
- FAQ section

### Login (/login)
- Email/password login form
- Social login placeholders
- Sign-up link

## Development Tips

### Styling
- All styling uses **Tailwind CSS**
- No CSS files needed (except globals.css)
- Use `@apply` directive for custom styles if needed

### File Naming
- Page files: `page.tsx`
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`

### TypeScript
- All files are typed with TypeScript
- Check for errors: `npm run type-check`

### Adding New Pages
1. Create folder: `app/your-route/`
2. Create file: `app/your-route/page.tsx`
3. Export default component
4. Navbar automatically renders new links (update NAVBAR_LINKS in `lib/constants.ts`)

## Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Clear cache and rebuild
```bash
rm -rf .next
npm run build
```

### TypeScript errors?
```bash
npm run type-check
```

### Module not found?
```bash
rm -rf node_modules package-lock.json
npm install
```

## Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` and verify it succeeds
- [ ] Run `npm run type-check` - no errors
- [ ] Run `npm run lint` - review warnings
- [ ] Test all pages locally
- [ ] Update environment variables in Vercel
- [ ] Check `.env.example` doesn't contain secrets

## Deploy to Vercel

### Automatic Deployment
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Vercel auto-detects Next.js
5. Click "Deploy"

### Manual Deployment
```bash
npm install -g vercel
vercel
```

## Useful Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs

## Common Tasks

### Add new component
```bash
touch components/MyComponent.tsx
```

### Add new page
```bash
mkdir -p app/my-page
echo "export default function MyPage() { return <div>Hello</div>; }" > app/my-page/page.tsx
```

### Update styling
Edit `app/globals.css` or add Tailwind classes to components

### Update navigation
Edit `lib/constants.ts` NAVBAR_LINKS array

## Support

For issues:
1. Check [Next.js docs](https://nextjs.org/docs)
2. Check error messages in terminal
3. Review console in browser DevTools
4. Search GitHub issues

## Next Steps

- [ ] Customize company info in `lib/constants.ts`
- [ ] Add your logo to `public/`
- [ ] Update contact email
- [ ] Add your social media links
- [ ] Set up GitHub repository
- [ ] Connect Vercel account
- [ ] Add custom domain
- [ ] Set up email notifications

---

**Happy coding!** 🚀
