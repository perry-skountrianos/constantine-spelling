# Quick Deployment Checklist

## Step 1: Prepare Local Files ✓
- [x] `login.html` - Password page
- [x] `index.html` - Game
- [x] `server.js` - Optional server
- [x] `package.json` - Dependencies
- [x] `.gitignore` - Git ignore
- [x] `README.md` - Instructions

---

## Step 2: Choose Your Deployment

### A. GitHub Pages (Recommended - FREE & EASY)

**Prerequisites:**
- GitHub account (free at github.com)
- Git installed on computer

**Steps:**
1. Create a new GitHub repository:
   - Go to github.com
   - Click "New repository"
   - Name: `constantine-spelling`
   - Public repository
   - Click "Create repository"

2. Upload files:
   ```bash
   # In your spelling folder:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/constantine-spelling.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Save

4. Your site is live at:
   ```
   https://YOUR_USERNAME.github.io/constantine-spelling/login.html
   ```

5. Share the link with Constantine!

---

### B. Render.com (Alternative - FREE tier available)

**Prerequisites:**
- Render.com account (free)
- GitHub connected to Render

**Steps:**
1. Sign up at render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Fill in:
   - **Name:** constantine-spelling
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Add Environment Variable:
   - **Key:** PASSWORD
   - **Value:** spelling123 (or your password)
6. Click "Deploy"

Your site will be at: `https://constantine-spelling-xxxx.onrender.com`

---

### C. Railway.app (Alternative - FREE tier)

**Prerequisites:**
- Railway.app account (free)
- GitHub connected to Railway

**Steps:**
1. Sign up at railway.app
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Set Environment Variable:
   - **PASSWORD=spelling123**
5. Deploy automatically

---

## Step 3: Change the Password

### For GitHub Pages:
1. Edit `login.html` locally
2. Find line: `const CORRECT_PASSWORD = 'spelling123';`
3. Change password
4. Save and push to GitHub:
   ```bash
   git add login.html
   git commit -m "Change password"
   git push
   ```

### For Render/Railway:
1. Go to Dashboard → Environment
2. Update PASSWORD variable
3. Redeploy automatically

---

## Step 4: Test It!

1. Visit your deployment URL
2. Enter password: `spelling123` (or your password)
3. Game should open
4. Try Study Cards and Scoring Challenge
5. Go for 10 correct answers to see the SUPER GOAL bonus!

---

## Troubleshooting

**Issue:** "Cannot find login.html"
- **Fix:** Make sure file is in the root directory

**Issue:** Password not working
- **Fix:** Check you spelled it correctly (case-sensitive)

**Issue:** Page won't load on Render/Railway
- **Fix:** Check deployment logs for errors

**Issue:** Server keeps restarting
- **Fix:** Make sure PORT environment variable is set

---

## Support Links

- GitHub Pages Help: https://docs.github.com/en/pages
- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app

---

## Size Check

Total files: ~50KB (very fast to load)
- login.html: ~3KB
- index.html: ~45KB
- No backend database needed

---

**Deployed! 🎉 Share the link with Constantine and enjoy!**
