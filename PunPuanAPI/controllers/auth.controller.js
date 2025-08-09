const db = require('../config/db');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Query check user with email and password
    const [rows] = await db.query(
      'SELECT * FROM user WHERE Email = ? AND Password = ?',
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Login success
    const user = rows[0];

    // ส่งข้อมูล user กลับไป (ไม่ส่ง password กลับด้วย)
    delete user.Password;

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};