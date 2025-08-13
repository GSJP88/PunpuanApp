const db = require('../config/db');
const path = require('path');

exports.addRoom = async (req, res) => {
  const connection = await db.getConnection();
  console.log(req.body);
  console.log("userID = ", req.body.userId);
  try {
    const userId = req.body.userId;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: userId missing' });
    }
    console.log('userId:', userId);

    const [landlordRows] = await connection.query(
      'SELECT Landlord_ID FROM Landlord WHERE User_ID = ? LIMIT 1',
      [userId]
    );

    if (landlordRows.length === 0) {
      return res.status(400).json({ error: 'Landlord not found for this user' });
    }

    const landlord_id = landlordRows[0].Landlord_ID;
    console.log('landlord_id:', landlord_id);

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
      maxOccupancy,
      bedRooms,
      bathRooms,
      parking
    } = req.body;

    const address = `${village || ''}, ${district || ''}, ${province || ''}`;
    const monthly_rent = price || null;
    const availability_status = maxOccupancy === '1' ? 'Available' : 'Unavailable';

    const bed_rooms = bedRooms || 0;        // สำหรับ Bed_Rooms
    const bath_rooms = bathRooms || 0;      // สำหรับ Bath_Rooms
    const parkingValue = parking || 0;      // สำหรับ Parking
    const max_occupancy = maxOccupancy || 0;    // สำหรับ Max_Occupancy (เพิ่มตรงนี้)
    
    const property_name = propertyName || null;
    const room_type = roomType || null;
    const room_amount = roomAmount || null;
    const location_link = locationLink || null;

    const profileImage = req.files?.profileImage?.[0]?.filename || null;
    const propertyImagesFiles = req.files?.propertyImages || [];
    const propertyImages = propertyImagesFiles.map(file => file.filename).join(',');

    await connection.beginTransaction();

    let [typeRows] = await connection.query(
      'SELECT Type_ID FROM type WHERE Type_Name = ? LIMIT 1',
      [room_type]
    );

    let type_id;
    if (typeRows.length > 0) {
      type_id = typeRows[0].Type_ID;
    } else {
      let [typeInsert] = await connection.query(
        'INSERT INTO type (Type_Name, Description) VALUES (?, ?)',
        [room_type, `${room_type} property`]
      );
      type_id = typeInsert.insertId;
      console.log(`✅ Inserted new type: ${room_type} with ID ${type_id}`);
    }

    const [roomResult] = await connection.query(
      `INSERT INTO room 
        (Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Bed_Rooms, Bath_Rooms, Parking, Max_Occupancy, Property_Name, Room_Type, Room_Amount, Location_Link, Profile_Image, Property_Images)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        landlord_id,
        type_id,
        address,
        description || null,
        monthly_rent,
        availability_status,
        bed_rooms,
        bath_rooms,
        parkingValue,
        max_occupancy,      // <-- เพิ่มค่า Max_Occupancy ตรงนี้
        property_name,
        room_type,
        room_amount,
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

exports.getRooms = async (req, res) => {
  try {
    if (!req.session?.user?.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // ดึงข้อมูลห้องทั้งหมด ไม่จำกัด landlord
    const [rooms] = await db.query(
      'SELECT * FROM room'
    );

    res.json(rooms);
  } catch (err) {
    console.error('❌ Error fetching rooms:', err);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getRoomById = async (req, res) => {
  try {
    if (!req.session?.user?.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const roomId = req.params.id;

    // ดึง landlordId จาก userId ใน session
    const [landlordRows] = await db.query(
      'SELECT Landlord_ID FROM landlord WHERE User_ID = ?',
      [req.session.user.id]
    );
    if (landlordRows.length === 0) {
      return res.status(400).json({ error: 'Landlord not found' });
    }
    const landlordId = landlordRows[0].Landlord_ID;

    // ดึงห้องที่ตรงกับ landlord และ roomId
    const [rooms] = await db.query(
      'SELECT * FROM room WHERE Room_ID = ? AND Landlord_ID = ?',
      [roomId, landlordId]
    );

    if (rooms.length === 0) {
      return res.status(404).json({ error: 'Room not found' });
    }

    res.json(rooms[0]);
  } catch (err) {
    console.error('❌ Error fetching room by id:', err);
    res.status(500).json({ error: 'Server error' });
  }
};