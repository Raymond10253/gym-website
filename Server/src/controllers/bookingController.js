const pool = require('../config/db');

exports.getBookings = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * From bookings ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBooking = async (req,res) => {
    const { name, email, phone, date, time, goal} = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO bookings (name, email, phone, date, time, goal) VALUES (?, ?, ?, ?, ?, ?)',
            [name, email, phone, date, time, goal]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM bookings WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Booking not found' });
        } else {
            res.status(200).json({ message: 'Booking deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}