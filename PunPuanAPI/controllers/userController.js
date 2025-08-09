const db = require('../config/db');

// User - CRUD
exports.getUsers = (req, res) => {
  db.query('SELECT * FROM User', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM User WHERE User_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(results[0]);
  });
};

exports.createUser = (req, res) => {
  const { User_Name, Email, Password, Phone_Number, Role } = req.body;
  db.query(
    'INSERT INTO User (User_Name, Email, Password, Phone_Number, Role) VALUES (?, ?, ?, ?, ?)',
    [User_Name, Email, Password, Phone_Number, Role],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'User created', User_ID: results.insertId });
    }
  );
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { User_Name, Email, Password, Phone_Number, Role } = req.body;
  db.query(
    'UPDATE User SET User_Name=?, Email=?, Password=?, Phone_Number=?, Role=? WHERE User_ID=?',
    [User_Name, Email, Password, Phone_Number, Role, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User updated' });
    }
  );
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM User WHERE User_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  });
};