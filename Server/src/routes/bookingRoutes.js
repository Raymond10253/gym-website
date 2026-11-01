const express = require('express');
const router = express.Router();
const getBookings = require('../controllers/bookingController');

router.get('/', getBookings);
router.post('/', createBooking);
router.delete('/:id', deleteBooking);

module.exports = router;