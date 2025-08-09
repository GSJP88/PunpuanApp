const db = require('../config/db');

exports.getServiceFees = (req, res) => {
  db.query('SELECT * FROM Service_Fee', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getServiceFeeById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Service_Fee WHERE Service_Fee_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Service Fee not found' });
    res.json(results[0]);
  });
};

exports.createServiceFee = (req, res) => {
  const { Room_ID, Amount } = req.body;
  db.query(
    'INSERT INTO Service_Fee (Room_ID, Amount) VALUES (?, ?)',
    [Room_ID, Amount],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Service Fee created', Service_Fee_ID: results.insertId });
    }
  );
};

exports.updateServiceFee = (req, res) => {
  const id = req.params.id;
  const { Room_ID, Amount } = req.body;
  db.query(
    'UPDATE Service_Fee SET Room_ID=?, Amount=? WHERE Service_Fee_ID=?',
    [Room_ID, Amount, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Service Fee not found' });
      res.json({ message: 'Service Fee updated' });
    }
  );
};

exports.deleteServiceFee = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Service_Fee WHERE Service_Fee_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Service Fee not found' });
    res.json({ message: 'Service Fee deleted' });
  });
};