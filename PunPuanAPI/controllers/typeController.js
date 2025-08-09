const db = require('../config/db');

exports.getTypes = (req, res) => {
  db.query('SELECT * FROM Type', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getTypeById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM Type WHERE Type_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Type not found' });
    res.json(results[0]);
  });
};

exports.createType = (req, res) => {
  const { Type_Name, Description } = req.body;
  db.query(
    'INSERT INTO Type (Type_Name, Description) VALUES (?, ?)',
    [Type_Name, Description],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Type created', Type_ID: results.insertId });
    }
  );
};

exports.updateType = (req, res) => {
  const id = req.params.id;
  const { Type_Name, Description } = req.body;
  db.query(
    'UPDATE Type SET Type_Name=?, Description=? WHERE Type_ID=?',
    [Type_Name, Description, id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ error: 'Type not found' });
      res.json({ message: 'Type updated' });
    }
  );
};

exports.deleteType = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM Type WHERE Type_ID = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ error: 'Type not found' });
    res.json({ message: 'Type deleted' });
  });
};
