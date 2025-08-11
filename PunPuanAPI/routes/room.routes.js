const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const roomController = require('../controllers/room.controller');

// ตั้งค่า multer เก็บไฟล์ในโฟลเดอร์ uploads/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // โฟลเดอร์เก็บไฟล์ ต้องมีในโปรเจค
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// ใช้ multer middleware ร่วมกับ controller
router.post(
  '/api/rooms',
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'propertyImages', maxCount: 10 }
  ]),
  roomController.addRoom
);

module.exports = router;