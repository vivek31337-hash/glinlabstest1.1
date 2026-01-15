# GLINLABS Production Checklist

Complete this checklist before launching to production.

## Pre-Launch Checks

### Code Quality
- [ ] Run `npm run type-check` - zero TypeScript errors
- [ ] Run `npm run lint` - review all warnings
- [ ] Run `npm run build` - build succeeds
- [ ] Test all pages locally (`npm run dev`)
- [ ] Test on mobile devices/responsive design
- [ ] Check all internal links work
- [ ] Check all external links work
- [ ] Test form submissions (if applicable)
- [ ] Performance audit with Lighthouse

### Security
- [ ] No secrets in `.env.local` or code files
- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys hardcoded
- [ ] HTTPS enabled on Vercel
- [ ] Security headers configured
- [ ] Update security vulnerabilities: `npm audit fix`

### Content & Branding
- [ ] Company name and description updated
- [ ] Logo/favicon added to `public/`
- [ ] Contact email updated in `lib/constants.ts`
- [ ] Social media links added
- [ ] Footer links updated
- [ ] All placeholder text replaced
- [ ] Copyright year is correct
- [ ] Terms of Service and Privacy Policy links work (or removed)

### SEO & Meta
- [ ] Title in `layout.tsx` is accurate
- [ ] Meta description is compelling
- [ ] OG tags configured (Open Graph)
- [ ] Robots.txt configured (if needed)
- [ ] Sitemap.xml created (if needed)
- [ ] Canonical URLs set
- [ ] JSON-LD schema added (if needed)

### Configuration
- [ ] `.env.example` has all needed variables
- [ ] Environment variables set in Vercel
- [ ] API URLs configured correctly
- [ ] Build command verified: `npm run build`
- [ ] Start command verified: `next start`
- [ ] Node.js version specified (18+)
- [ ] npm version requirement documented

### Analytics & Monitoring
- [ ] Google Analytics configured (if desired)
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Performance monitoring enabled
- [ ] Email notifications set up (if applicable)
- [ ] Uptime monitoring configured

### Vercel Deployment
- [ ] Repository pushed to GitHub
- [ ] Vercel project created
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Build logs checked (no warnings)
- [ ] Environment variables set in Vercel dashboard
- [ ] Auto-deployment from main branch enabled
- [ ] Deployment preview links tested

### Browser & Device Testing
- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Edge (latest version)
- [ ] Mobile (iOS Safari, Chrome)
- [ ] Tablet responsiveness
- [ ] Dark mode (if applicable)
- [ ] Keyboard navigation
- [ ] Screen reader compatibility (basic)

### Performance Optimization
- [ ] Images optimized with next/image
- [ ] Code splitting working
- [ ] Bundle size acceptable
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals passed
- [ ] Cache headers configured
- [ ] Compression enabled

### Documentation
- [ ] README.md is current
- [ ] SETUP.md is accurate
- [ ] Deployment instructions clear
- [ ] Environment setup documented
- [ ] Team knows how to deploy

### Final Safety
- [ ] Backup of current production (if replacing)
- [ ] Rollback plan documented
- [ ] Team briefed on changes
- [ ] Support team trained if needed
- [ ] Monitoring dashboards set up

## Day-of-Launch

### Before Going Live
```bash
# Final checks
npm run build       # Build succeeds
npm run type-check  # No errors
npm run lint        # Review warnings
npm test            # Run tests (if applicable)
```

### Launch
1. [ ] Final Vercel build triggers
2. [ ] All tests pass
3. [ ] Production URL tested
4. [ ] Analytics showing traffic
5. [ ] Error logging active
6. [ ] Team notified
7. [ ] Status page updated (if applicable)

### Post-Launch (First 24 hours)
- [ ] Monitor error logs hourly
- [ ] Check uptime monitoring
- [ ] Monitor performance metrics
- [ ] Review user feedback channels
- [ ] Check email support queue
- [ ] Verify forms working (if applicable)
- [ ] Check social media mentions

## Ongoing Maintenance

### Weekly
- [ ] Review error logs
- [ ] Check performance metrics
- [ ] Update dependencies: `npm outdated`

### Monthly
- [ ] Security audit: `npm audit`
- [ ] Review analytics
- [ ] Check uptime/availability
- [ ] Update critical dependencies

### Quarterly
- [ ] Performance optimization review
- [ ] SEO audit
- [ ] Security assessment
- [ ] Content review and updates

## Useful Links

- [Next.js Production Checklist](https://nextjs.org/docs/going-to-production)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Security Best Practices](https://owasp.org/www-project-top-ten/)

## Emergency Contacts

- **Hosting Support**: Vercel Support
- **Domain Registrar**: [Your registrar]
- **Development Team Lead**: [Name, Email]
- **Security Contact**: [Name, Email]

## Sign-off

- [ ] Developer: _______________ Date: ___________
- [ ] QA/Reviewer: _____________ Date: ___________
- [ ] Product Manager: _________ Date: ___________

---

**Good luck with the launch!** 🚀
