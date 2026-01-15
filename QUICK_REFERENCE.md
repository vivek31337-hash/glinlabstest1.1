# GLINLABS - Quick Reference

**TL;DR for GLINLABS developers**

## Start Here (2 minutes)

```bash
npm install          # Install dependencies
npm run dev          # Start dev server → http://localhost:3000
npm run build        # Build for production
npm run type-check   # Check TypeScript
npm run lint         # Check code quality
```

## File Locations

| What | Where |
|------|-------|
| Pages | `app/*/page.tsx` |
| Components | `components/*.tsx` |
| Styles | `app/globals.css` + Tailwind in JSX |
| Constants | `lib/constants.ts` |
| Types | `lib/types.ts` |
| Utils | `lib/utils.ts` |
| Config | Root level (next.config.js, etc.) |

## Edit These Files

### Company Info
```typescript
// lib/constants.ts
SITE_NAME = 'GLINLABS'
SITE_DESCRIPTION = 'Your description'
CONTACT_EMAIL = 'your@email.com'
SOCIAL_LINKS = { ... }
```

### Navigation
```typescript
// lib/constants.ts
NAVBAR_LINKS = [
  { href: '/', label: 'Home' },
  // Add yours here
]
```

### Pricing
```typescript
// lib/constants.ts
PRICING_PLANS = [
  { name: 'Free', price: 0, ... },
  // Edit here
]
```

### Colors
```javascript
// tailwind.config.js
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

## Add New Page

1. Create folder: `mkdir -p app/my-page`
2. Create file: `touch app/my-page/page.tsx`
3. Add component:
```typescript
export default function MyPage() {
  return <div>Hello</div>
}
```
4. Add to navigation: Edit `lib/constants.ts` NAVBAR_LINKS

## Deploy to Vercel

1. Push to GitHub: `git push`
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy
5. Done! ✨

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Port taken | `npm run dev -- -p 3001` |
| Build fails | `rm -rf .next && npm run build` |
| Type errors | `npm run type-check` |
| Module missing | `rm -rf node_modules && npm install` |

## Page Routes

- `/` → Home
- `/services` → Services
- `/learn` → Learning hub
- `/glinai` → AI chat
- `/pricing` → Pricing
- `/login` → Login form

## Key Dependencies

- **next** - Framework
- **react** - UI library
- **typescript** - Type safety
- **tailwindcss** - Styling

## Important Notes

✅ **TypeScript**: All files must be typed
✅ **Components**: Use functional components
✅ **Styling**: Use Tailwind classes, not CSS files
✅ **Pages**: Each route needs `/app/route/page.tsx`
✅ **Types**: Define in `lib/types.ts`

⚠️ **Not Implemented Yet**:
- Database
- Authentication backend
- Stripe payments
- Real AI API

## Helpful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Production build
npm start               # Run prod server

# Quality
npm run lint            # ESLint check
npm run type-check      # TypeScript check

# Git
git status              # Check changes
git add .               # Stage all
git commit -m "msg"     # Commit
git push                # Deploy to Vercel
```

## Environment Setup

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Next.js App Router Basics

```typescript
// app/my-page/page.tsx
export default function MyPage() {
  return <h1>Hello World</h1>
}

// Nested routes
// app/blog/[id]/page.tsx → /blog/123
```

## Tailwind Quick Examples

```jsx
// Colors
<div className="bg-blue-600 text-white">

// Spacing
<div className="p-4 m-2">

// Flex
<div className="flex gap-4 items-center">

// Grid
<div className="grid grid-cols-3 gap-4">

// Responsive
<div className="text-sm md:text-lg lg:text-2xl">

// Hover
<button className="hover:bg-blue-700 transition">
```

## Documentation Files

- `README.md` - Full documentation
- `SETUP.md` - Quick start guide
- `PRODUCTION_CHECKLIST.md` - Launch checklist
- `PROJECT_SUMMARY.md` - Complete overview

## Deployment Checklist

- [ ] `npm run build` succeeds
- [ ] `npm run type-check` passes
- [ ] `npm run lint` reviewed
- [ ] All pages tested
- [ ] Updated `lib/constants.ts`
- [ ] Push to GitHub
- [ ] Deploy on Vercel
- [ ] Test live site

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)

## Contact

Issues? Check:
1. Terminal error messages
2. Browser DevTools console
3. Documentation files
4. Next.js/Tailwind official docs

---

**Go build something amazing!** 🚀
