const crypto = require('crypto');
const { createAdminSession } = require('../middleware/authMiddleware');

const passwordDigest = (password) => crypto.createHash('sha256').update(password).digest();

exports.login = (req, res) => {
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
        return res.status(503).json({ error: 'Admin login is not configured on the server.' });
    }

    const password = typeof req.body?.password === 'string' ? req.body.password : '';
    const passwordMatches = crypto.timingSafeEqual(
        passwordDigest(password),
        passwordDigest(adminPassword)
    );

    if (!passwordMatches) {
        return res.status(401).json({ error: 'Incorrect password.' });
    }

    res.json({
        token: createAdminSession(),
        expiresIn: 8 * 60 * 60,
    });
};