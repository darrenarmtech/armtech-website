# ARMTECH Website - EASIEST Setup Method (5 Minutes)

## You Have 3 Options - Pick ONE:

---

## ⭐ OPTION 1: GitHub Desktop (EASIEST - Recommended for You!)

### Step 1: Download GitHub Desktop
1. Go to: https://desktop.github.com
2. Download for Windows
3. Install it (just click Next, Next, Next)
4. Sign in with your GitHub account (or create one during setup)

### Step 2: Publish Your Website
1. Open GitHub Desktop
2. Click "File" → "Add local repository"
3. Click "Choose..." and select the `armtech-site` folder
4. Click "Add repository"
5. Click "Publish repository" (big blue button)
6. Settings:
   - Name: `armtech-website`
   - Description: `ARMTECH Test & Measurement`
   - ⚠️ **IMPORTANT:** UNCHECK "Keep this code private"
7. Click "Publish repository"

**DONE! Your code is now on GitHub!**

### Step 3: Enable GitHub Pages (Make it LIVE)
1. Click "View on GitHub" button in GitHub Desktop
2. In your browser, click "Settings" (top menu)
3. Click "Pages" (left sidebar - scroll down)
4. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
5. Click "Save"
6. Wait 2 minutes
7. Refresh the page
8. You'll see: "Your site is live at https://username.github.io/armtech-website/"

**🎉 WEBSITE IS LIVE! Click the link to see it!**

---

## OPTION 2: Upload Directly on GitHub Website (No Software)

### Step 1: Create GitHub Account
1. Go to: https://github.com
2. Click "Sign up"
3. Enter email, create password, choose username
4. Verify email

### Step 2: Create Repository
1. Click "+" icon (top right) → "New repository"
2. Repository name: `armtech-website`
3. Description: `ARMTECH Test & Measurement Equipment`
4. Select **Public**
5. DO NOT check "Add a README"
6. Click "Create repository"

### Step 3: Upload Files
1. Click "uploading an existing file" (blue link)
2. Drag ALL 9 files from `armtech-site` folder
3. Type: "Initial website"
4. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Click "Settings" → "Pages"
2. Source: **main** branch, **/ (root)** folder
3. Click "Save"
4. Wait 2 minutes, refresh
5. Your site is LIVE!

---

## OPTION 3: Command Line (For Advanced Users)

```bash
cd armtech-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/armtech-website.git
git push -u origin main
```

Then enable GitHub Pages in Settings → Pages.

---

## 🔧 Troubleshooting

### "I can't find the armtech-site folder"
- It's in your Downloads folder
- Click the download link in Claude
- Extract the ZIP file if needed

### "GitHub Desktop says 'not a repository'"
- That's OK! Just click "Create a repository" instead
- Then copy all files into that folder

### "My website shows 404 error"
- Wait 3-5 minutes (GitHub takes time to build)
- Check Settings → Pages - make sure branch is "main"
- Make sure repository is Public (not Private)

### "I forgot my GitHub password"
- Click "Forgot password" on GitHub login
- Reset via email

---

## ✅ Success Checklist

- [ ] Downloaded armtech-site folder
- [ ] Created GitHub account
- [ ] Created repository named `armtech-website`
- [ ] Uploaded all 9 files
- [ ] Enabled GitHub Pages (Settings → Pages)
- [ ] Waited 3 minutes
- [ ] Visited https://YOUR-USERNAME.github.io/armtech-website/
- [ ] Website loads correctly!

---

## 📞 Need Help?

**Tell me which step you're stuck on and I'll help!**

Common issues:
- "Can't create account" → Check email spam folder for verification
- "Upload failed" → Make sure repository is Public, not Private
- "Page won't load" → Wait longer (up to 5 minutes), then refresh
- "Wrong files uploaded" → Delete repository and start over

---

## 🎯 After Your Site is Live

### Update Products
Edit `products.js` with your actual 102 products

### Update Contact Info
Replace `+65 9123 4567` with your real WhatsApp number
Replace `info@armtech.com.sg` with your real email

### Add Testo Logo
Upload Testo logo to Google Drive and update the URL

### Connect Custom Domain
Settings → Pages → Custom domain: `professionalwebsol.info`

---

**You're almost there! Pick Option 1 (GitHub Desktop) - it's the easiest!**
