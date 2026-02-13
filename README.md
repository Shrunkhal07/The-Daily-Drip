# The Daily Drip — News Website

A clean, editorial-style news website with daily briefings and deep dives.

## 🚀 Deploy on GitHub Pages (Free)

### Step 1: Create GitHub Repository
1. Go to github.com → **New Repository**
2. Name: `thedailydrip` (or your chosen name)
3. Set to **Public**
4. Click **Create Repository**

### Step 2: Upload Files
1. Click **"uploading an existing file"** link
2. Drag ALL files from this folder (index.html, article.html, about.html, 404.html, style.css, script.js)
3. Click **Commit changes**

### Step 3: Enable GitHub Pages
1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**
5. Wait 2-3 minutes — your site is live at `https://yourusername.github.io/thedailydrip/`

### Step 4: Connect Custom Domain
1. In **Settings → Pages → Custom domain**, type: `thedailypunch.in`
2. Check **Enforce HTTPS**
3. In your domain registrar's DNS settings, add these **A records**:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Add **CNAME record**: `www` → `yourusername.github.io`

## 📁 File Structure
```
├── index.html      ← Homepage (Editorial + Daily Briefing tabs)
├── article.html    ← Article template page
├── about.html      ← About page
├── 404.html        ← Custom 404 error page
├── style.css       ← Complete stylesheet
├── script.js       ← Interactive functionality
└── README.md       ← This file (don't upload to site)
```

## 💰 Monetization — Ad Slots
Search for `<!-- AD SLOT -->` in HTML files to find all ad placement locations.
Replace with your Google AdSense code once approved.

## ✏️ How to Add New Articles
1. Duplicate `article.html`
2. Rename to your article URL (e.g., `swiggy-quick-commerce.html`)
3. Update the title, content, meta tags, and Schema.org JSON
4. Add a link to it from `index.html`

## 🔄 Changing the Brand Name
If you choose a different name than "The Daily Drip":
1. Find & Replace `The Daily Drip` in all HTML files
2. Find & Replace `thedailydrip` in URLs
3. Update the logo letter in `.logo-mark` elements
4. Update favicon SVG in each HTML `<head>`
