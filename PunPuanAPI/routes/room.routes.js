const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const roomController = require('../controllers/room.controller');

// ตั้งค่า multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// POST เพิ่มห้อง
router.post(
  '/api/rooms',
  upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'propertyImages', maxCount: 10 }
  ]),
  roomController.addRoom
);

// 🆕 GET ดึงข้อมูลห้องทั้งหมด
router.get('/api/rooms', roomController.getRooms);
router.get('/api/rooms/:id', roomController.getRoomById);

module.exports = router;