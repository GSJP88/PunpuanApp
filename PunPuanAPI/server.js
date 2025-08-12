const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const session = require('express-session');
const path = require('path');

dotenv.config();

const app = express();

// ตั้งค่า CORS ให้รองรับ frontend URL และส่ง cookie ได้
app.use(cors({
  origin: 'http://localhost:5173',  // เปลี่ยนเป็น URL frontend ของคุณ
  credentials: true,                 // ต้องเปิด เพื่อส่ง cookie
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ตั้งค่า session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,       // เปลี่ยนเป็น secret ของคุณ
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,                  // ถ้าใช้ HTTPS ให้ true
    httpOnly: true,
    sameSite: 'lax',                // หรือ 'none' ถ้า HTTPS และ cross-site
    maxAge: 24 * 60 * 60 * 1000,   // 1 วัน
  },
  // แนะนำใส่ store จริงถ้าใช้งานจริง production (เช่น connect-mongo, redis)
}));

// Middleware log user id ใน session ทุก request
app.use((req, res, next) => {
  console.log('User ID in session:', req.session?.user?.id);
  next();
});

// Static โฟลเดอร์รูปภาพ
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// โหลด routes ต่าง ๆ
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