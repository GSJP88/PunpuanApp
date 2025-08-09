const serviceFeeController = require('../controllers/serviceFeeController');

module.exports = (app) => {
  app.get('/api/service-fees', serviceFeeController.getServiceFees);
  app.get('/api/service-fees/:id', serviceFeeController.getServiceFeeById);
  app.post('/api/service-fees', serviceFeeController.createServiceFee);
  app.put('/api/service-fees/:id', serviceFeeController.updateServiceFee);
  app.delete('/api/service-fees/:id', serviceFeeController.deleteServiceFee);
};