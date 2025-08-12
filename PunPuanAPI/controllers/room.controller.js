const db = require('../config/db');
const path = require('path');

exports.addRoom = async (req, res) => {
  const connection = await db.getConnection();
  console.log(req.body);
  console.log("userID = ", req.body.userId);
  try {
    // ดึง User_ID จาก req.body
    const userId = req.body.userId;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: userId missing' });
    }
    console.log('userId:', userId);

    // ดึง Landlord_ID จาก User_ID
    const [landlordRows] = await connection.query(
      'SELECT Landlord_ID FROM Landlord WHERE User_ID = ? LIMIT 1',
      [userId]
    );

    if (landlordRows.length === 0) {
      return res.status(400).json({ error: 'Landlord not found for this user' });
    }

    const landlord_id = landlordRows[0].Landlord_ID;
    console.log('landlord_id:', landlord_id);

    // ดึงข้อมูลอื่น ๆ จาก req.body
    const {
      province,
      district,
      village,
      locationLink,
      propertyName,
      price,
      roomType,
      description,
      roomAmount,
      available,
      bedRooms,
      bathRooms,
      parking
    } = req.body;

    const address = `${village || ''}, ${district || ''}, ${province || ''}`;
    const monthly_rent = price || null;
    const availability_status = available === '1' ? 'Available' : 'Unavailable';
    const max_occupancy = bedRooms || null;
    const property_name = propertyName || null;
    const room_type = roomType || null;
    const room_amount = roomAmount || null;
    const bath_rooms = bathRooms || null;
    const location_link = locationLink || null;
    const parkingValue = parking || null;

    // ถ้าใช้ multipart/form-data ต้องจัดการไฟล์จาก req.files
    const profileImage = req.files?.profileImage?.[0]?.filename || null;
    const propertyImagesFiles = req.files?.propertyImages || [];
    const propertyImages = propertyImagesFiles.map(file => file.filename).join(',');

    await connection.beginTransaction();

    // หา Type_ID จากชื่อ roomType
    let [typeRows] = await connection.query(
      'SELECT Type_ID FROM type WHERE Type_Name = ? LIMIT 1',
      [room_type]
    );

    let type_id;
    if (typeRows.length > 0) {
      type_id = typeRows[0].Type_ID;
    } else {
      // ถ้าไม่มีประเภทนี้ ให้เพิ่มใหม่
      let [typeInsert] = await connection.query(
        'INSERT INTO type (Type_Name, Description) VALUES (?, ?)',
        [room_type, `${room_type} property`]
      );
      type_id = typeInsert.insertId;
      console.log(`✅ Inserted new type: ${room_type} with ID ${type_id}`);
    }

    // เพิ่มข้อมูล room
    const [roomResult] = await connection.query(
      `INSERT INTO room 
        (Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Max_Occupancy, Property_Name, Room_Type, Room_Amount, Bath_Rooms, Parking, Location_Link, Profile_Image, Property_Images)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        landlord_id,
        type_id,
        address,
        description || null,
        monthly_rent,
        availability_status,
        max_occupancy,
        property_name,
        room_type,
        room_amount,
        bath_rooms,
        parkingValue,
        location_link,
        profileImage,
        propertyImages
      ]
    );

    await connection.commit();

    console.log('✅ Room added with ID:', roomResult.insertId);
    res.status(201).json({
      message: 'Room added successfully',
      room_id: roomResult.insertId,
      type_id
    });
  } catch (error) {
    await connection.rollback();
    console.error('❌ Add Room Error:', error);
    res.status(500).json({ error: 'Failed to add room' });
  } finally {
    connection.release();
  }
};