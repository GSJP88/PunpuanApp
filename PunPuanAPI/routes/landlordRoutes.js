const landlordController = require('../controllers/landlordController');

module.exports = (app) => {
  app.get('/api/landlords', landlordController.getLandlords);
  app.get('/api/landlords/:id', landlordController.getLandlordById);
  app.post('/api/landlords', landlordController.createLandlord);
  app.put('/api/landlords/:id', landlordController.updateLandlord);
  app.delete('/api/landlords/:id', landlordController.deleteLandlord);
};