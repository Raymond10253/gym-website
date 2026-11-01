const express = require('express');
const router = express.Router();
const { getBookings, createBooking, deleteBooking } = require('../controllers/bookingController');
const { requireAdmin } = require('../middleware/authMiddleware');

router.get('/', requireAdmin, getBookings);
router.post('/', createBooking);
router.delete('/:id', requireAdmin, deleteBooking);

module.exports = router;