# GLINLABS

AI-Powered Security Intelligence for Everyone

## Overview

GLINLABS is a modern cybersecurity platform built with Next.js 14, offering security consulting, AI-powered analysis, and open-source intelligence tools.

## Features

- 🏠 **Home Page**: Hero section with prominent Glin AI access button
- 🔐 **Services**: Security consulting, AI analysis, open-source tools
- 📚 **Learn**: Educational security content hub
- 🤖 **GlinAI**: Interactive AI chat with points system and multi-LLM support
- 💰 **Pricing**: Three-tier pricing model (Free, Pro, Enterprise)
- 🔑 **Login**: Placeholder authentication UI
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✨ **Modern UI**: Clean, startup-style interface
- 🎯 **Points System**: Gamified learning experience with quality-based rewards
- 🧠 **Multi-LLM**: Integration with 5 free LLMs with auto-selection

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel-ready
- **Node.js**: 18+

## Installation

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Setup

1. **Clone or navigate to the project**
   ```bash
   cd glinlabstest1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
glinlabstest1/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── services/           # Services page
│   ├── learn/              # Learning hub
│   ├── glinai/             # AI chat interface
│   ├── pricing/            # Pricing page
│   └── login/              # Login page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Pages

### Home (`/`)
- Hero section with "AI-Powered Security Intelligence for Everyone"
- **Prominent Glin AI Button**: Center-placed, gradient-styled, animated call-to-action
- Feature cards highlighting main services
- Secondary CTA buttons: Get Started, Learn More
- Responsive gradient background

### Services (`/services`)
- Security Consulting
- AI Security Analysis
- Open-Source Intelligence
- Feature descriptions and benefits

### Learn (`/learn`)
- Educational content placeholder
- Security tutorial cards
- Coming soon announcement

### GlinAI (`/glinai`)
- **Knowledge-Based Chat System** with intelligent point rewards
- **Points System**: Earn or lose points based on question quality
  - Interesting questions: +10 to +15 points
  - Normal questions: +5 points
  - Low-quality questions: 0 to -5 points
- **Multi-LLM Integration**: Support for 5 free LLMs
  - GPT-3.5 Turbo 🤖
  - Google Gemini ✨
  - Claude 🧠
  - LLaMA 2 🦙
  - Mistral 🌬️
- **Auto-Selection**: AI automatically selects the best model for your question
- **Manual Selection**: Choose your preferred LLM from the dropdown
- **Real-time Feedback**: Point changes displayed with context
- **Premium Feature Placeholders**: Image upload and voice input (Coming Soon)
- **Beta Version Badge**: Visible indicator of beta status
- **Rotating Questions**: Background animation with interesting security questions

### Pricing (`/pricing`)
- Free plan
- Pro plan ($99/month) - highlighted
- Enterprise plan (custom pricing)
- FAQ section
- "Coming Soon" buttons for all plans

### Login (`/login`)
- Email and password input
- Remember me option
- Social login placeholders (Google, GitHub)
- Sign up link
- Disclaimer about placeholder status

## Customization

### Colors
Edit Tailwind configuration in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0066cc',
  secondary: '#1a1a1a',
}
```

### Fonts
Modify font family in `app/globals.css`

### Content
Update page content in respective route files

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Framework: Next.js
   - Vercel will auto-detect and configure

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

### Environment Variables

Create a `.env.local` file for local development:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication (NextAuth.js)
- [ ] Stripe payment integration
- [ ] GlinAI backend API
- [ ] Blog/CMS functionality
- [ ] Analytics integration
- [ ] Email newsletter signup
- [ ] Support chat system

## Performance

- ✅ Next.js built-in optimizations
- ✅ Image optimization with next/image
- ✅ Code splitting and lazy loading
- ✅ Tailwind CSS purging for minimal bundle
- ✅ TypeScript for type safety

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components
- Implement proper error handling

### Styling
- Use Tailwind CSS utility classes
- Avoid inline styles
- Maintain consistent spacing/colors
- Test responsive design

### Git Workflow
```bash
git checkout -b feature/your-feature-name
# Make changes
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name
```

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next
npm run build
```

### Type errors
```bash
npm run type-check
```

## License

Proprietary - GLINLABS © 2026

## Support

For issues or questions, contact support@glinlabs.com

## Contributing

We welcome contributions! Please follow our code style guidelines and submit pull requests for review.

---

**Built with ❤️ for security** | Vercel Ready | Production-Grade | TypeScript First

