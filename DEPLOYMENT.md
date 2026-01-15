# Deployment Guide - Youth4Youth Africa Art

## Quick Deploy to Vercel

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon → "New repository"
   - Name it: `youth4youth-africa-art` (or your preferred name)
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   cd /Users/user/Youth4Youth
   
   # Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/youth4youth-africa-art.git
   
   # Push to GitHub
   git push -u origin main
   ```

   If you get authentication errors, you may need to:
   - Use a Personal Access Token instead of password
   - Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/youth4youth-africa-art.git`

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account (or create an account)

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find and select your `youth4youth-africa-art` repository
   - Click "Import"

3. **Configure project:**
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://youth4youth-africa-art.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Add custom domain in Vercel:**
   - Go to your project → Settings → Domains
   - Add your domain (e.g., `youth4youthafricaart.org`)
   - Follow Vercel's DNS configuration instructions

2. **Update DNS records:**
   - Add the DNS records Vercel provides to your domain registrar
   - Wait for DNS propagation (usually 24-48 hours)

## Environment Variables

Currently, no environment variables are required. If you add features later (like contact form submissions, email services, etc.), you can add them in:

**Vercel Dashboard → Project → Settings → Environment Variables**

## Automatic Deployments

Once connected, Vercel will automatically:
- ✅ Deploy every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Run builds automatically

## Manual Deployment

If you need to redeploy manually:
- Go to Vercel Dashboard → Your Project → Deployments
- Click "..." → "Redeploy"

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### Images Not Loading
- Ensure image URLs are correct
- Check `next.config.js` for image domain configuration
- Use Next.js Image component for optimization

### Styling Issues
- Clear Vercel cache: Settings → General → Clear Build Cache
- Ensure Tailwind CSS is properly configured

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form (if connected to backend)
- [ ] Check SEO metadata
- [ ] Verify social media links
- [ ] Test newsletter signup (if connected)

## Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Support: info@youth4youthafricaart.org

---

**Your website is ready to go live! 🚀**

