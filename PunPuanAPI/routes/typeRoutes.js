const typeController = require('../controllers/typeController');

module.exports = (app) => {
  app.get('/api/types', typeController.getTypes);
  app.get('/api/types/:id', typeController.getTypeById);
  app.post('/api/types', typeController.createType);
  app.put('/api/types/:id', typeController.updateType);
  app.delete('/api/types/:id', typeController.deleteType);
};