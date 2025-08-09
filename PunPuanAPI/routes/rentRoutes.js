const rentController = require('../controllers/rentController');

module.exports = (app) => {
  app.get('/api/rents', rentController.getRents);
  app.get('/api/rents/:id', rentController.getRentById);
  app.post('/api/rents', rentController.createRent);
  app.put('/api/rents/:id', rentController.updateRent);
  app.delete('/api/rents/:id', rentController.deleteRent);
};