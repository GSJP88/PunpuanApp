const db = require('../config/db');

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query(
      'SELECT * FROM user WHERE Email = ? AND Password = ?',
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];
    delete user.Password;

    // เซฟข้อมูล user ลงใน session
    req.session.user = {
      id: user.User_ID,     // สมมติ user table ใช้ ID เป็น primary key
      email: user.Email,
      role: user.Role  // ถ้ามี field role
    };

    console.log('User saved in session:', req.session.user);

    res.json({
  message: 'Login successful',
  user: {
    id: user.User_ID,
    email: user.Email,
    role: user.Role
  }
});

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: err.message });
  }
};