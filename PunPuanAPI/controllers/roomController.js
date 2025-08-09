const db = require('../config/db');

exports.getRooms = (req, res) => {
  db.query('SELECT * FROM Room', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getRoomById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Room WHERE Room_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Room not found' });
    res.json(results[0]);
  });
};

exports.createRoom = (req, res) => {
  const { Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Max_Occupancy } = req.body;
  db.query(
    `INSERT INTO Room (Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Max_Occupancy)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Max_Occupancy],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Room created', Room_ID: results.insertId });
    }
  );
};

exports.updateRoom = (req, res) => {
  const id = req.params.id;
  const { Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Max_Occupancy } = req.body;
  db.query(
    `UPDATE Room SET Landlord_ID=?, Type_ID=?, Address=?, Description=?, Monthly_Rent=?, Availability_Status=?, Max_Occupancy=? WHERE Room_ID=?`,
    [Landlord_ID, Type_ID, Address, Description, Monthly_Rent, Availability_Status, Max_Occupancy, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Room not found' });
      res.json({ message: 'Room updated' });
    }
  );
};

exports.deleteRoom = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Room WHERE Room_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Room not found' });
    res.json({ message: 'Room deleted' });
  });
};