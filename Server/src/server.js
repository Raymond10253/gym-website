const express = require('express');
const cors = require('cors');

require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/admin', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})