# Youth4Youth Africa Art Website

A modern, production-ready website for Youth4Youth Africa Art—a youth-led African initiative using art for empowerment, storytelling, peacebuilding, cultural identity, and social change.

## 🎯 Project Overview

This is a complete Next.js website featuring:
- **11 Full Pages** with comprehensive, inspiring content
- **Modern Design** inspired by African art and culture
- **Mobile-First, Responsive** design
- **Accessibility-Friendly** with WCAG AA compliance
- **SEO-Optimized** with proper metadata
- **Production-Ready** code structure

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📁 Project Structure

```
Youth4Youth/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── globals.css          # Global styles and Tailwind
│   ├── about/               # About Us page
│   ├── mission-vision/      # Mission & Vision page
│   ├── programs/            # Programs & Initiatives
│   ├── artists/             # Artists & Youth Voices
│   ├── gallery/             # Gallery & Showcase
│   ├── events/              # Events & Workshops
│   ├── blog/                # Blog / Stories
│   ├── get-involved/        # Get Involved
│   ├── donate/              # Donate / Support
│   └── contact/             # Contact Us
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section component
│   ├── ProgramCard.tsx     # Program card component
│   ├── ArtistCard.tsx      # Artist card component
│   ├── EventCard.tsx        # Event card component
│   ├── BlogPostPreview.tsx  # Blog post preview
│   └── GalleryContent.tsx  # Gallery with filtering
└── public/                  # Static assets (images, etc.)
```

## 🎨 Design System

### Colors (African-Inspired Palette)
- **Primary**: Deep Sienna (#A83926)
- **Accent**: Warm Amber (#F1C232)
- **Green**: Forest Green (#2E7D32)
- **Indigo**: Indigo Blue (#3F51B5)
- **Gold**: Mustard Gold (#FFC107)
- **Neutral Light**: Ivory (#FAF3E0)
- **Neutral Dark**: Charcoal (#333333)

### Typography
- **Display Font**: Cormorant Garamond (headings)
- **Body Font**: Inter (body text)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables (if needed):**
   - Add any environment variables in Vercel dashboard
   - Settings → Environment Variables

### Deploy to Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy:**
   - Connect your GitHub repository
   - Netlify will auto-detect Next.js
   - Click "Deploy site"

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

## ✨ Features

### Pages Included
1. ✅ **Home** - Hero, programs, artists, events, stories
2. ✅ **About Us** - Organization story, team, impact
3. ✅ **Mission & Vision** - Core values and goals
4. ✅ **Programs & Initiatives** - Four main programs
5. ✅ **Artists & Youth Voices** - Featured artists and submissions
6. ✅ **Gallery / Showcase** - Filterable art gallery
7. ✅ **Events & Workshops** - Upcoming and past events
8. ✅ **Blog / Stories** - Stories and articles
9. ✅ **Get Involved** - Join, volunteer, partner
10. ✅ **Donate / Support** - Donation form and impact
11. ✅ **Contact Us** - Contact form and information

### Components
- Responsive navigation header
- Footer with links and social media
- Reusable Hero sections
- Card components for programs, artists, events, blog posts
- Interactive gallery with filtering
- Contact and donation forms

### SEO & Accessibility
- Proper meta tags on all pages
- Semantic HTML structure
- ARIA labels for accessibility
- Keyboard navigation support
- WCAG AA color contrast compliance
- Open Graph tags for social sharing

## 📝 Content

All content is written with:
- **Youth-driven, hopeful, bold tone**
- **African storytelling approach**
- **Human-centered, inspiring copy**
- **Clear calls-to-action**

## 🔧 Customization

### Update Colors
Edit `tailwind.config.ts` to change the color palette.

### Update Content
All content is in the page files under `app/`. Edit directly to update text, images, and information.

### Add New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Follow the existing page structure
4. Add route to `components/Header.tsx` navigation

## 📄 License

This project is created for Youth4Youth Africa Art. All rights reserved.

## 🤝 Support

For questions or support:
- Email: info@youth4youthafricaart.org
- Website: [youth4youthafricaart.org](https://youth4youthafricaart.org)

## 🙏 Acknowledgments

Built with passion for African youth, art, and social change.

---

**Art that Speaks. Youth that Leads.**

