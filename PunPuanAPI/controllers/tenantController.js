const db = require('../config/db');

exports.getTenants = (req, res) => {
  db.query('SELECT * FROM Tenant', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getTenantById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Tenant WHERE Tenant_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Tenant not found' });
    res.json(results[0]);
  });
};

exports.createTenant = (req, res) => {
  const { First_Name, Last_Name, ID_Card, Occupation, Monthly_Income, User_ID } = req.body;
  db.query(
    'INSERT INTO Tenant (First_Name, Last_Name, ID_Card, Occupation, Monthly_Income, User_ID) VALUES (?, ?, ?, ?, ?, ?)',
    [First_Name, Last_Name, ID_Card, Occupation, Monthly_Income, User_ID],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Tenant created', Tenant_ID: results.insertId });
    }
  );
};

exports.updateTenant = (req, res) => {
  const id = req.params.id;
  const { First_Name, Last_Name, ID_Card, Occupation, Monthly_Income, User_ID } = req.body;
  db.query(
    'UPDATE Tenant SET First_Name=?, Last_Name=?, ID_Card=?, Occupation=?, Monthly_Income=?, User_ID=? WHERE Tenant_ID=?',
    [First_Name, Last_Name, ID_Card, Occupation, Monthly_Income, User_ID, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Tenant not found' });
      res.json({ message: 'Tenant updated' });
    }
  );
};

exports.deleteTenant = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Tenant WHERE Tenant_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Tenant not found' });
    res.json({ message: 'Tenant deleted' });
  });
};