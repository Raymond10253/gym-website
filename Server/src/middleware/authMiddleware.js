const crypto = require('crypto');

const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;
const sessions = new Map();

const createAdminSession = () => {
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + SESSION_DURATION_MS;

    for (const [existingToken, session] of sessions) {
        if (session.expiresAt <= Date.now()) {
            sessions.delete(existingToken);
        }
    }

    sessions.set(token, { expiresAt });
    return token;
};

const requireAdmin = (req, res, next) => {
    const authorization = req.get('authorization') || '';
    const match = authorization.match(/^Bearer ([a-f0-9]{64})$/i);
    const session = match && sessions.get(match[1]);

    if (!session || session.expiresAt <= Date.now()) {
        if (match) sessions.delete(match[1]);
        return res.status(401).json({ error: 'Admin authentication required.' });
    }

    next();
};

module.exports = { createAdminSession, requireAdmin };