const db = require('../config/db');

exports.getRents = (req, res) => {
  db.query('SELECT * FROM Rent', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getRentById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Rent WHERE Rent_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Rent not found' });
    res.json(results[0]);
  });
};

exports.createRent = (req, res) => {
  const { Tenant_ID, Room_ID, Start_Date, End_Date, Monthly_Rent, Status } = req.body;
  db.query(
    `INSERT INTO Rent (Tenant_ID, Room_ID, Start_Date, End_Date, Monthly_Rent, Status) 
     VALUES (?, ?, ?, ?, ?, ?)`,
    [Tenant_ID, Room_ID, Start_Date, End_Date, Monthly_Rent, Status],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Rent created', Rent_ID: results.insertId });
    }
  );
};

exports.updateRent = (req, res) => {
  const id = req.params.id;
  const { Tenant_ID, Room_ID, Start_Date, End_Date, Monthly_Rent, Status } = req.body;
  db.query(
    `UPDATE Rent SET Tenant_ID=?, Room_ID=?, Start_Date=?, End_Date=?, Monthly_Rent=?, Status=? WHERE Rent_ID=?`,
    [Tenant_ID, Room_ID, Start_Date, End_Date, Monthly_Rent, Status, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Rent not found' });
      res.json({ message: 'Rent updated' });
    }
  );
};

exports.deleteRent = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Rent WHERE Rent_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Rent not found' });
    res.json({ message: 'Rent deleted' });
  });
};