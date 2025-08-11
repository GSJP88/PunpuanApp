const db = require('../config/db');
const path = require('path');

exports.addRoom = async (req, res) => {
  try {
    console.log('req.body:', req.body);
    console.log('req.files:', req.files);

    const {
      landlord_id,
      type_id,
      address,
      description,
      monthly_rent,
      availability_status,
      max_occupancy,
      property_name,
      room_type,
      room_amount,
      bath_rooms,
      parking,
      location_link
    } = req.body;

    // ดึงไฟล์ภาพจาก multer
    const profileImage = req.files['profileImage'] ? req.files['profileImage'][0].filename : null;
    const propertyImagesFiles = req.files['propertyImages'] || [];
    const propertyImages = propertyImagesFiles.map(file => file.filename).join(',');

    const [result] = await db.query(
  `INSERT INTO room 
    (Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Max_Occupancy)
   VALUES (?, ?, ?, ?, ?, ?, ?)`,
  [
    landlord_id,
    type_id,
    address,
    description,
    monthly_rent,
    availability_status,
    max_occupancy
  ]
);

    console.log('Room added with ID:', result.insertId);
    res.status(201).json({ message: 'Room added successfully', room_id: result.insertId });
  } catch (error) {
    console.error('Add Room Error:', error);
    res.status(500).json({ error: 'Failed to add room' });
  }
};