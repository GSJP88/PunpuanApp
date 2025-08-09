const db = require('../config/db');

exports.getLandlords = (req, res) => {
  db.query('SELECT * FROM Landlord', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getLandlordById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Landlord WHERE Landlord_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Landlord not found' });
    res.json(results[0]);
  });
};

exports.createLandlord = (req, res) => {
  const { First_Name, Last_Name, ID_Card, Bank_Account, Business_License, User_ID } = req.body;
  db.query(
    'INSERT INTO Landlord (First_Name, Last_Name, ID_Card, Bank_Account, Business_License, User_ID) VALUES (?, ?, ?, ?, ?, ?)',
    [First_Name, Last_Name, ID_Card, Bank_Account, Business_License, User_ID],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Landlord created', Landlord_ID: results.insertId });
    }
  );
};

exports.updateLandlord = (req, res) => {
  const id = req.params.id;
  const { First_Name, Last_Name, ID_Card, Bank_Account, Business_License, User_ID } = req.body;
  db.query(
    'UPDATE Landlord SET First_Name=?, Last_Name=?, ID_Card=?, Bank_Account=?, Business_License=?, User_ID=? WHERE Landlord_ID=?',
    [First_Name, Last_Name, ID_Card, Bank_Account, Business_License, User_ID, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Landlord not found' });
      res.json({ message: 'Landlord updated' });
    }
  );
};

exports.deleteLandlord = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Landlord WHERE Landlord_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Landlord not found' });
    res.json({ message: 'Landlord deleted' });
  });
};