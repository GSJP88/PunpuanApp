const db = require('../config/db');

exports.getRentBills = (req, res) => {
  db.query('SELECT * FROM Rent_Bill', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getRentBillById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Rent_Bill WHERE Rent_Bill_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ error: 'Rent Bill not found' });
    res.json(results[0]);
  });
};

exports.createRentBill = (req, res) => {
  const { Amount, Date, Status, Room_ID, Tenant_ID, Rent_ID } = req.body;
  db.query(
    'INSERT INTO Rent_Bill (Amount, Date, Status, Room_ID, Tenant_ID, Rent_ID) VALUES (?, ?, ?, ?, ?, ?)',
    [Amount, Date, Status, Room_ID, Tenant_ID, Rent_ID],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Rent Bill created', Rent_Bill_ID: results.insertId });
    }
  );
};

exports.updateRentBill = (req, res) => {
  const id = req.params.id;
  const { Amount, Date, Status, Room_ID, Tenant_ID, Rent_ID } = req.body;
  db.query(
    'UPDATE Rent_Bill SET Amount=?, Date=?, Status=?, Room_ID=?, Tenant_ID=?, Rent_ID=? WHERE Rent_Bill_ID=?',
    [Amount, Date, Status, Room_ID, Tenant_ID, Rent_ID, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.affectedRows) return res.status(404).json({ error: 'Rent Bill not found' });
      res.json({ message: 'Rent Bill updated' });
    }
  );
};

exports.deleteRentBill = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Rent_Bill WHERE Rent_Bill_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.affectedRows) return res.status(404).json({ error: 'Rent Bill not found' });
    res.json({ message: 'Rent Bill deleted' });
  });
};