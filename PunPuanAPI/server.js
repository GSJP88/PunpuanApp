const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();

app.use(cors());

// อย่าลืมเพิ่มการใช้ express.urlencoded สำหรับรับ form-data ที่ไม่ใช่ json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static โฟลเดอร์รูปภาพ
app.use('/uploads', express.static('uploads'));

// Routes (แก้ให้ถูกต้องทีละไฟล์)
require('./routes/userRoutes')(app);
require('./routes/tenantRoutes')(app);
require('./routes/landlordRoutes')(app);
require('./routes/typeRoutes')(app);
const roomRoutes = require('./routes/room.routes');
app.use(roomRoutes);

require('./routes/serviceFeeRoutes')(app);
require('./routes/rentRoutes')(app);
require('./routes/rentalAgreementRoutes')(app);
require('./routes/rentalConfirmationRoutes')(app);
require('./routes/rentBillRoutes')(app);
require('./routes/rentPaymentRoutes')(app);
require('./routes/serviceFeePaymentRoutes')(app);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

// Checking connect DB
(async () => {
  try {
    console.log('🔍 Checking database connection...');
    await db.query('SELECT 1');
    console.log('✅ Database connected successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  }
})();