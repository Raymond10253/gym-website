const express = require('express');
const router =express.Router();
const { getContacts, createContact, deleteContact } = require('../controllers/contactController');
const { requireAdmin } = require('../middleware/authMiddleware');

router.get('/', requireAdmin, getContacts);
router.post('/', createContact);
router.delete('/:id', requireAdmin, deleteContact);

module.exports = router;