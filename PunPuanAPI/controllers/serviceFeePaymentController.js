const db = require('../config/db');

exports.getServiceFeePayments = (req, res) => {
  db.query('SELECT * FROM Service_Fee_Payment', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getServiceFeePaymentById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Service_Fee_Payment WHERE Fee_Payment_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ error: 'Service Fee Payment not found' });
    res.json(results[0]);
  });
};

exports.createServiceFeePayment = (req, res) => {
  const { Landlord_ID, Service_Fee_ID, Amount, Payment_Method, Payment_Status, Payment_Date } = req.body;
  db.query(
    'INSERT INTO Service_Fee_Payment (Landlord_ID, Service_Fee_ID, Amount, Payment_Method, Payment_Status, Payment_Date) VALUES (?, ?, ?, ?, ?, ?)',
    [Landlord_ID, Service_Fee_ID, Amount, Payment_Method, Payment_Status, Payment_Date],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Service Fee Payment created', Fee_Payment_ID: results.insertId });
    }
  );
};

exports.updateServiceFeePayment = (req, res) => {
  const id = req.params.id;
  const { Landlord_ID, Service_Fee_ID, Amount, Payment_Method, Payment_Status, Payment_Date } = req.body;
  db.query(
    'UPDATE Service_Fee_Payment SET Landlord_ID=?, Service_Fee_ID=?, Amount=?, Payment_Method=?, Payment_Status=?, Payment_Date=? WHERE Fee_Payment_ID=?',
    [Landlord_ID, Service_Fee_ID, Amount, Payment_Method, Payment_Status, Payment_Date, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results.affectedRows) return res.status(404).json({ error: 'Service Fee Payment not found' });
      res.json({ message: 'Service Fee Payment updated' });
    }
  );
};

exports.deleteServiceFeePayment = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Service_Fee_Payment WHERE Fee_Payment_ID=?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.affectedRows) return res.status(404).json({ error: 'Service Fee Payment not found' });
    res.json({ message: 'Service Fee Payment deleted' });
  });
};