# ARMTECH Website - GitHub Pages Setup Guide

## What You Have

A complete, professional website with:
- ✅ Home page with brand logos
- ✅ Products catalog (compact, no-scroll layout, 6-column grid)
- ✅ Brand logos from Google Drive (Fluke, Lutron, Hanna)
- ✅ Quote request system (WhatsApp integration)
- ✅ Services page (calibration offerings)
- ✅ Brands page
- ✅ Industries page
- ✅ FAQ page
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Fast loading (static HTML/CSS/JS)

## Files Included

```
armtech-site/
├── index.html          (Home page)
├── products.html       (Product catalog)
├── services.html       (Calibration services)
├── brands.html         (Brand showcase)
├── industries.html     (Industry solutions)
├── faq.html            (Frequently asked questions)
├── style.css           (Main stylesheet)
├── products.js         (Product data and filtering)
└── README.md           (This file)
```

## Setup Instructions

### Step 1: Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Follow the registration process

### Step 2: Create a New Repository
1. Log in to GitHub
2. Click the "+" icon in top right → "New repository"
3. Repository name: `armtech-website` (or any name you prefer)
4. Description: "ARMTECH Test & Measurement Equipment Website"
5. Set to **Public**
6. **DO NOT** check "Add a README file"
7. Click "Create repository"

### Step 3: Upload Your Website Files
1. On the repository page, click "uploading an existing file"
2. Drag and drop ALL files from the `armtech-site` folder
3. Add commit message: "Initial website upload"
4. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. In your repository, click "Settings" (top menu)
2. Scroll down and click "Pages" (left sidebar)
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and folder "/ (root)"
5. Click "Save"
6. Wait 2-3 minutes

### Step 5: Access Your Website
Your site will be live at:
```
https://YOUR-USERNAME.github.io/armtech-website/
```

Example: If your GitHub username is "darrenchen", your site will be:
```
https://darrenchen.github.io/armtech-website/
```

### Step 6: Connect Your Custom Domain (professionalwebsol.info)
1. In GitHub Pages settings, find "Custom domain"
2. Enter: `professionalwebsol.info`
3. Click "Save"
4. Go to your domain registrar (where you bought the domain)
5. Add these DNS records:

**A Records** (point to GitHub):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (for www):
```
www  →  YOUR-USERNAME.github.io
```

6. Wait 24-48 hours for DNS propagation
7. Enable "Enforce HTTPS" in GitHub Pages settings

## Customization Guide

### Update Your Products
Edit `products.js` and replace the sample products with your actual 102 products.

Current structure:
```javascript
{ 
    id: 1, 
    brand: 'fluke', 
    name: 'Fluke 87V Digital Multimeter', 
    sku: '87V', 
    price: 'Request Quote', 
    category: 'Electronics & RF', 
    image: 'URL_TO_IMAGE' 
}
```

### Update Contact Information
1. Open each HTML file
2. Find: `+65 9123 4567` → Replace with your actual WhatsApp number
3. Find: `info@armtech.com.sg` → Replace with your actual email

### Update Brand Logos
- Fluke: Already linked to Google Drive
- Lutron: Already linked to Google Drive
- Hanna: Already linked to Google Drive
- Testo: Add logo URL when available

### Add Product Images
You can either:
1. Upload images to the GitHub repository in an `images/` folder
2. Use external image hosting (Google Drive, Imgur, etc.)
3. Use CDN services

## Features

### Quote Request System
- Click any product to add to quote cart
- Cart counter updates in real-time
- "Request Quote" button opens WhatsApp with product list
- Cart persists using browser localStorage

### Brand Filtering
- Click brand buttons to filter products
- Shows product count per brand
- Instant filtering (no page reload)

### No-Scroll Layout
- Desktop: 6-column grid, fits 18 products without scrolling
- Tablet: 4-column grid
- Mobile: 2-column grid

### SEO Optimized
- Semantic HTML5
- Meta descriptions on all pages
- Clean URLs
- Fast loading (<1 second)
- Mobile responsive

## Security

✅ **No database** = No SQL injection attacks
✅ **No login system** = No password breaches
✅ **Static files** = No server-side vulnerabilities
✅ **HTTPS** = Encrypted connections (via GitHub Pages)
✅ **No plugins** = No third-party security risks

## Cost Breakdown

- **Hosting:** $0 (GitHub Pages is free)
- **Domain:** ~$12/year (professionalwebsol.info)
- **SSL Certificate:** $0 (GitHub provides free HTTPS)
- **Total:** $12/year

## Next Steps

1. Upload files to GitHub
2. Enable GitHub Pages
3. Test the site
4. Update products with real data
5. Update contact information
6. Connect custom domain
7. Add Google Analytics (optional)

## Support

If you need help:
1. Check GitHub Pages documentation: https://pages.github.com
2. Watch GitHub Pages tutorial videos on YouTube
3. Ask me (Claude) for specific help

## Site Speed

Expected load time: **<1 second** (much faster than Wix)

Why so fast?
- No heavy JavaScript frameworks
- No database queries
- No server-side processing
- Static HTML/CSS/JS only
- Cached by GitHub's CDN

---

**Your website is ready to go live! 🚀**
