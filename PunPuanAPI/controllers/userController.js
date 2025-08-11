// userController.js
const db = require('../config/db');

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM User');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM User WHERE User_ID = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create user
exports.createUser = async (req, res) => {
  try {
    const { User_Name, Email, Password, Phone_Number, Role } = req.body;
    const [result] = await db.query(
      'INSERT INTO User (User_Name, Email, Password, Phone_Number, Role) VALUES (?, ?, ?, ?, ?)',
      [User_Name, Email, Password, Phone_Number, Role]
    );
    res.status(201).json({ message: 'User created', User_ID: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { User_Name, Email, Password, Phone_Number, Role } = req.body;
    const [result] = await db.query(
      'UPDATE User SET User_Name=?, Email=?, Password=?, Phone_Number=?, Role=? WHERE User_ID=?',
      [User_Name, Email, Password, Phone_Number, Role, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await db.query('DELETE FROM User WHERE User_ID = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

///////////////////// Function ////////////////////

exports.registerUser = (req, res) => {
  console.log('Register request body:', req.body);
  const {
    User_Name,
    Email,
    Password,
    Phone_Number,
    Role,
    Occupation,
    Income,
    Bank_Account,
  } = req.body;

  // ตรวจสอบข้อมูลที่จำเป็น
  if (!User_Name || !Email || !Password || !Phone_Number || !Role) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // แยกชื่อเป็น firstName และ lastName (สมมติชื่อแบ่งด้วย space)
  const nameParts = User_Name.trim().split(' ');
  const First_Name = nameParts[0] || '';
  const Last_Name = nameParts.slice(1).join(' ') || '';

  // ขั้นตอน 1: Insert ลงตาราง user
  const insertUserSQL = `
    INSERT INTO user (User_Name, Email, Password, Phone_Number, Role)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(insertUserSQL, [User_Name, Email, Password, Phone_Number, Role], (errUser, resultUser) => {
    if (errUser) {
      console.error('User insert error:', errUser);
      return res.status(500).json({ error: errUser.message });
    }

    const userId = resultUser.insertId;

    // ขั้นตอน 2: Insert ลง tenant หรือ landlord
    if (Role.toLowerCase() === 'tenant') {
      const insertTenantSQL = `
        INSERT INTO tenant (First_Name, Last_Name, Occupation, Monthly_Income, User_ID)
        VALUES (?, ?, ?, ?, ?)
      `;
      db.query(insertTenantSQL, [First_Name, Last_Name, Occupation || null, Income || null], (errTenant, resultTenant) => {
        if (errTenant) {
          console.error('Tenant insert error:', errTenant);
          return res.status(500).json({ error: errTenant.message });
        }

        res.status(201).json({
          message: 'Tenant registered successfully',
          User_ID: userId,
          Tenant_ID: resultTenant.insertId,
        });
      });

    } else if (Role.toLowerCase() === 'landlord') {
      const insertLandlordSQL = `
        INSERT INTO landlord (First_Name, Last_Name, Bank_Account, User_ID)
        VALUES (?, ?, ?, ?)
      `;
      db.query(insertLandlordSQL, [First_Name, Last_Name, Bank_Account || null, userId], (errLandlord, resultLandlord) => {
        if (errLandlord) {
          console.error('Landlord insert error:', errLandlord);
          return res.status(500).json({ error: errLandlord.message });
        }

        res.status(201).json({
          message: 'Landlord registered successfully',
          User_ID: userId,
          Landlord_ID: resultLandlord.insertId,
        });
      });
    } else {
      return res.status(400).json({ error: 'Invalid role' });
    }
  });
};