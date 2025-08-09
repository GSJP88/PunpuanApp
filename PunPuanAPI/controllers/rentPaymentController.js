const db = require('../config/db');

exports.getRentPayments = (req, res) => {
  db.query('SELECT * FROM Rent_Payment', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getRentPaymentById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Rent_Payment WHERE Rent_payment_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ error: 'Rent Payment not found' });
    res.json(results[0]);
  });
};

exports.createRentPayment = (req, res) => {
  const { Rent_ID, Tenant_ID, Amount, Payment_Status, Payment_Method, Payment_Date, Rent_Bill_ID } = req.body;
  db.query(
    'INSERT INTO Rent_Payment (Rent_ID, Tenant_ID, Amount, Payment_Status, Payment_Method, Payment_Date, Rent_Bill_ID) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [Rent_ID, Tenant_ID, Amount, Payment_Status, Payment_Method, Payment_Date, Rent_Bill_ID],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Rent Payment created', Rent_payment_ID: results.insertId });
    }
  );
};

exports.updateRentPayment = (req, res) => {
  const id = req.params.id;
  const { Rent_ID, Tenant_ID, Amount, Payment_Status, Payment_Method, Payment_Date, Rent_Bill_ID } = req.body;
  db.query(
    'UPDATE Rent_Payment SET Rent_ID=?, Tenant_ID=?, Amount=?, Payment_Status=?, Payment_Method=?, Payment_Date=?, Rent_Bill_ID=? WHERE Rent_payment_ID=?',
    [Rent_ID, Tenant_ID, Amount, Payment_Status, Payment_Method, Payment_Date, Rent_Bill_ID, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.affectedRows) return res.status(404).json({ error: 'Rent Payment not found' });
      res.json({ message: 'Rent Payment updated' });
    }
  );
};

exports.deleteRentPayment = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Rent_Payment WHERE Rent_payment_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.affectedRows) return res.status(404).json({ error: 'Rent Payment not found' });
    res.json({ message: 'Rent Payment deleted' });
  });
};