const rentPaymentController = require('../controllers/rentPaymentController');

module.exports = (app) => {
  app.get('/api/rent-payments', rentPaymentController.getRentPayments);
  app.get('/api/rent-payments/:id', rentPaymentController.getRentPaymentById);
  app.post('/api/rent-payments', rentPaymentController.createRentPayment);
  app.put('/api/rent-payments/:id', rentPaymentController.updateRentPayment);
  app.delete('/api/rent-payments/:id', rentPaymentController.deleteRentPayment);
};