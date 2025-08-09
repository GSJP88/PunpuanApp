const db = require('../config/db');

exports.getRentalAgreements = (req, res) => {
  db.query('SELECT * FROM Rental_Agreement', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getRentalAgreementById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Rental_Agreement WHERE Agreement_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ error: 'Rental Agreement not found' });
    res.json(results[0]);
  });
};

exports.createRentalAgreement = (req, res) => {
  const { Agreement_Date, Document_URL, Tenant_ID, Rent_ID, Landlord_ID } = req.body;
  db.query(
    'INSERT INTO Rental_Agreement (Agreement_Date, Document_URL, Tenant_ID, Rent_ID, Landlord_ID) VALUES (?, ?, ?, ?, ?)',
    [Agreement_Date, Document_URL, Tenant_ID, Rent_ID, Landlord_ID],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Rental Agreement created', Agreement_ID: results.insertId });
    }
  );
};

exports.updateRentalAgreement = (req, res) => {
  const id = req.params.id;
  const { Agreement_Date, Document_URL, Tenant_ID, Rent_ID, Landlord_ID } = req.body;
  db.query(
    'UPDATE Rental_Agreement SET Agreement_Date=?, Document_URL=?, Tenant_ID=?, Rent_ID=?, Landlord_ID=? WHERE Agreement_ID=?',
    [Agreement_Date, Document_URL, Tenant_ID, Rent_ID, Landlord_ID, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.affectedRows) return res.status(404).json({ error: 'Rental Agreement not found' });
      res.json({ message: 'Rental Agreement updated' });
    }
  );
};

exports.deleteRentalAgreement = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Rental_Agreement WHERE Agreement_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.affectedRows) return res.status(404).json({ error: 'Rental Agreement not found' });
    res.json({ message: 'Rental Agreement deleted' });
  });
};