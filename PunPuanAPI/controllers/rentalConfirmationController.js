const db = require('../config/db');

exports.getRentalConfirmations = (req, res) => {
  db.query('SELECT * FROM Rental_Confirmation', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getRentalConfirmationById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Rental_Confirmation WHERE Confirmation_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ error: 'Rental Confirmation not found' });
    res.json(results[0]);
  });
};

exports.createRentalConfirmation = (req, res) => {
  const { Confirmation_by, Confirmation_at, Status, Rent_ID, Type_ID } = req.body;
  db.query(
    'INSERT INTO Rental_Confirmation (Confirmation_by, Confirmation_at, Status, Rent_ID, Type_ID) VALUES (?, ?, ?, ?, ?)',
    [Confirmation_by, Confirmation_at, Status, Rent_ID, Type_ID],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Rental Confirmation created', Confirmation_ID: results.insertId });
    }
  );
};

exports.updateRentalConfirmation = (req, res) => {
  const id = req.params.id;
  const { Confirmation_by, Confirmation_at, Status, Rent_ID, Type_ID } = req.body;
  db.query(
    'UPDATE Rental_Confirmation SET Confirmation_by=?, Confirmation_at=?, Status=?, Rent_ID=?, Type_ID=? WHERE Confirmation_ID=?',
    [Confirmation_by, Confirmation_at, Status, Rent_ID, Type_ID, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.affectedRows) return res.status(404).json({ error: 'Rental Confirmation not found' });
      res.json({ message: 'Rental Confirmation updated' });
    }
  );
};

exports.deleteRentalConfirmation = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Rental_Confirmation WHERE Confirmation_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.affectedRows) return res.status(404).json({ error: 'Rental Confirmation not found' });
    res.json({ message: 'Rental Confirmation deleted' });
  });
};