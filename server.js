const express = require('express');
const path = require('path');
const app = express();

// Get password from environment variable or use default
const PASSWORD = process.env.PASSWORD || 'spelling123';
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session storage (simple in-memory)
const sessions = new Map();

// Generate session ID
function generateSessionId() {
    return Math.random().toString(36).substring(2, 15);
}

// Login route
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    
    if (password === PASSWORD) {
        const sessionId = generateSessionId();
        sessions.set(sessionId, {
            authenticated: true,
            createdAt: Date.now()
        });
        
        res.json({ 
            success: true, 
            sessionId: sessionId,
            message: 'Login successful'
        });
    } else {
        res.status(401).json({ 
            success: false, 
            message: 'Incorrect password'
        });
    }
});

// Check authentication
app.get('/api/check-auth/:sessionId', (req, res) => {
    const { sessionId } = req.params;
    const session = sessions.get(sessionId);
    
    if (session && session.authenticated) {
        res.json({ authenticated: true });
    } else {
        res.status(401).json({ authenticated: false });
    }
});

// Logout route
app.post('/api/logout/:sessionId', (req, res) => {
    const { sessionId } = req.params;
    sessions.delete(sessionId);
    res.json({ success: true });
});

// Serve login page on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Protect game route
app.get('/game', (req, res) => {
    const sessionId = req.query.session;
    const session = sessions.get(sessionId);
    
    if (session && session.authenticated) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        res.redirect('/');
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n⚽ Constantine Spelling Server Running ⚽`);
    console.log(`\nURL: http://localhost:${PORT}`);
    console.log(`Password: ${PASSWORD}`);
    console.log(`\nPress Ctrl+C to stop\n`);
});

// Clean up old sessions every 5 minutes
setInterval(() => {
    const now = Date.now();
    const TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours
    
    for (const [sessionId, session] of sessions.entries()) {
        if (now - session.createdAt > TIMEOUT) {
            sessions.delete(sessionId);
        }
    }
}, 5 * 60 * 1000);
