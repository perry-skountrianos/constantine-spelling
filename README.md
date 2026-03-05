# Constantine Spelling - Password Protected Deployment Guide

## Quick Start

### Option A: GitHub Pages (Free, Static Hosting)
1. Create a GitHub account at github.com
2. Create a new repository named `constantine-spelling`
3. Add these files to the repository:
   - `login.html` (password page)
   - `index.html` (game)
   - `README.md`
4. Go to repository Settings → Pages → Source: "Deploy from a branch" → Select "main"
5. Your site will be at: `https://[your-username].github.io/constantine-spelling/login.html`

**To change the password:**
- Edit `login.html`
- Find line: `const CORRECT_PASSWORD = 'spelling123';`
- Change `'spelling123'` to your desired password
- Push changes to GitHub

---

### Option B: Render.com or Railway.app (Free tier, Simple Server)

**1. Set up the server locally first:**
```bash
npm install express
```

**2. Create `package.json` (already included)**

**3. Create `server.js` (already included)**

**4. Test locally:**
```bash
node server.js
```
Visit: `http://localhost:3000`

**5. Deploy to Render.com:**
- Sign up at render.com
- Create new "Web Service"
- Connect your GitHub repository
- Build: `npm install`
- Start: `node server.js`
- Add environment variable: `PASSWORD=spelling123`

**6. Deploy to Railway.app:**
- Sign up at railway.app
- Import your GitHub repo
- Set environment variable: `PASSWORD=spelling123`
- Deploy automatically

---

## File Structure
```
constantine-spelling/
├── login.html          (Password page)
├── index.html          (Game file)
├── server.js           (Node.js server - optional)
├── package.json        (Dependencies - optional)
├── .gitignore          (Git ignore file)
└── README.md           (This file)
```

---

## Changing the Password

### For GitHub Pages:
Edit `login.html` line 86:
```javascript
const CORRECT_PASSWORD = 'spelling123';  // Change this
```

### For Node.js Server:
Set environment variable:
```bash
PASSWORD=your_new_password
```

Or edit `server.js` directly (not recommended for security)

---

## Features

✅ **Simple login screen** - Password required before accessing game
✅ **Session-based** - Password cleared when browser closes
✅ **Black & white design** - Clean, dyslexia-friendly interface
✅ **Responsive** - Works on mobile and desktop
✅ **No database needed** - Fully static

---

## Access Details

- **Default Password:** `spelling123`
- **Game accessible at:** `/index.html` (after login)
- **Login page:** `/login.html` (default page)

---

## Support

For questions about:
- **GitHub Pages:** Check github.com/pages
- **Render:** render.com/docs
- **Railway:** railway.app/docs

---

## Security Note

This is a simple password protection. If you need:
- User accounts (multiple teachers/students)
- Admin dashboard
- Progress tracking
- Advanced security

We can upgrade to a more robust solution.
