const serviceFeePaymentController = require('../controllers/serviceFeePaymentController');

module.exports = (app) => {
  app.get('/api/service-fee-payments', serviceFeePaymentController.getServiceFeePayments);
  app.get('/api/service-fee-payments/:id', serviceFeePaymentController.getServiceFeePaymentById);
  app.post('/api/service-fee-payments', serviceFeePaymentController.createServiceFeePayment);
  app.put('/api/service-fee-payments/:id', serviceFeePaymentController.updateServiceFeePayment);
  app.delete('/api/service-fee-payments/:id', serviceFeePaymentController.deleteServiceFeePayment);
};