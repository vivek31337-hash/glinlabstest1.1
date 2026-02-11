# GLINLABS

AI-Powered Security Intelligence for Everyone

## Overview

GLINLABS is a modern cybersecurity platform built with Next.js 14, offering security consulting, AI-powered analysis, and open-source intelligence tools.

## Features

- 🏠 **Home Page**: Hero section with feature overview
- 🔐 **Services**: Security consulting, AI analysis, open-source tools
- 📚 **Learn**: Educational security content hub
- 🤖 **GlinAI**: Interactive AI chat interface (mocked)
- 🧠 **Glin AI Knowledge Base**: AI-driven Q&A system with points and LLM selection (NEW!)
- 💰 **Pricing**: Three-tier pricing model (Free, Pro, Enterprise)
- 🔑 **Login**: Placeholder authentication UI
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✨ **Modern UI**: Clean, startup-style interface

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
│   │   ├── page.tsx        # Main GlinAI chat page
│   │   └── knowledge/      # Knowledge Base system
│   │       └── page.tsx    # Q&A with points & LLM selection
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
- Feature cards highlighting main services
- CTA buttons: Get Started, Learn, GlinAI
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
- Interactive chat interface
- Simulated AI responses
- Message history
- Powered by open-source security AI
- Link to Knowledge Base system

### Glin AI Knowledge Base (`/glinai/knowledge`) - NEW!
- **Ask Questions**: Text-based Q&A interface
- **Earn Points**: Get points for quality questions
  - Interesting questions: 6-10 points (🌟)
  - Relevant questions: 3-5 points (✨)
  - Simple questions: 0-2 points
  - Unclear questions: -2 to 0 points (⚠️)
  - Irrelevant questions: -5 to -2 points (⚠️)
- **LLM Selection**: Choose from 5 top free models
  - GPT (OpenAI) - General-purpose, highly capable
  - Grok (xAI) - Real-time knowledge, witty
  - Gemini (Google) - Multimodal, fast
  - Claude (Anthropic) - Helpful, harmless, honest
  - LLaMA (Meta) - Open-source, efficient
- **Auto-Select Mode**: AI automatically picks best model for your question
- **Transparent Scoring**: View detailed points criteria
- **Real-time Feedback**: See your score immediately after asking
- **Accessibility**: Screen reader support and colorblind-friendly design

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
- [ ] Real LLM API integration (OpenAI, Google AI, etc.)
- [ ] Blog/CMS functionality
- [ ] Analytics integration
- [ ] Email newsletter signup
- [ ] Support chat system
- [ ] Persistent points storage across sessions

## Glin AI Knowledge Base - Points System

The Knowledge Base uses an intelligent points system to encourage quality questions:

### How Points Are Calculated

The system evaluates questions based on multiple factors:

1. **Question Length & Structure**
   - Very short questions (< 3 words): 0-2 points
   - Medium questions (3-7 words): 2-5 points
   - Long questions (8-19 words): 4-8 points
   - Very long questions (20+ words): 5-10 points

2. **Keyword Bonuses**
   - Security-related keywords: +2 points
   - Technology-related keywords: +1 point
   - Proper question format (includes "?"): +1 point

3. **Quality Penalties**
   - Single-word greetings (hi, hello, hey): -1 to 0 points
   - Off-topic questions: -5 to -2 points

### Points Ranges

| Category | Points | Description |
|----------|--------|-------------|
| 🌟 Interesting | 6-10 pts | Thought-provoking, well-structured questions |
| ✨ Relevant | 3-5 pts | Clear, relevant questions with good structure |
| Fair | 0-2 pts | Simple or basic questions |
| ⚠️ Unclear | -2 to 0 pts | Poorly structured or unclear questions |
| ⚠️ Irrelevant | -5 to -2 pts | Off-topic or low-quality questions |

### Tips for Earning More Points

- Ask specific, detailed questions
- Include context and relevant keywords
- Focus on security and technology topics
- Use proper grammar and question marks
- Avoid one-word or greeting messages

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

