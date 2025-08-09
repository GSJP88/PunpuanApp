const rentalConfirmationController = require('../controllers/rentalConfirmationController');

module.exports = (app) => {
  app.get('/api/rental-confirmations', rentalConfirmationController.getRentalConfirmations);
  app.get('/api/rental-confirmations/:id', rentalConfirmationController.getRentalConfirmationById);
  app.post('/api/rental-confirmations', rentalConfirmationController.createRentalConfirmation);
  app.put('/api/rental-confirmations/:id', rentalConfirmationController.updateRentalConfirmation);
  app.delete('/api/rental-confirmations/:id', rentalConfirmationController.deleteRentalConfirmation);
};