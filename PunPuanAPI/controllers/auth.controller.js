const db = require('../config/db');

exports.loginUser = async (req, res) => {

  try {
    const { email, password } = req.body;
    console.log("Login attempt:", email); // debug
    console.log("Login attempt:", password); // debug

    const [rows] = await db.query(
      'SELECT * FROM user WHERE Email = ? AND Password = ?',
      [email, password]
    );

    if (rows.length === 0) {
      console.log("Login failed for:", email); // debug
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];
    delete user.Password;

    console.log("Login successful for:", email); // debug
    res.json({ message: 'Login successful', user });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message });
  }
};