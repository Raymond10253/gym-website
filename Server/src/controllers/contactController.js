const pool = require('../config/db');

exports.getContacts = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECCT * FROM contacts ORDER BY created_at DESC');
        res.json(rows);

        if (rows.length === 0) {
            res.status(404).json({ error: 'No contacts found' });
        } else {
            res.status(200).json(rows);
        }
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createContact = async (req, res) => {
    const {name, email, message} = req.body;
    try {
        const [result] = await pool.query(
            'INSER INTO contacts (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        )
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM contacts WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Contact not found' });
        } else {
            res.status(200).json({ message: 'Contact deleted successfully' });
        }
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}